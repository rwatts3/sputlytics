let pageviewsSort = new ReactiveVar(true)

Template.content.onCreated(() => {
  Filter.init()
})

Template.content.helpers({
  isReady() {
    return Session.get("isReady")
  },
  pages() {
    const visits = Filter.getVisits()
    const pageviews = _.chain(visits)
      .map((value) => { return {path: value.path }})
      .countBy("path")
      .map((value, key) => { return {page: key, pageviews: value} })
      .sortBy("pageviews")
      .value()
    return pageviewsSort.get() ? pageviews : pageviews.reverse()
  },
  pageviewsSortClass() {
    return pageviewsSort.get() ? "asc" : "desc"
  }
})

Template.content.events({
  "click a[data-sort-pageviews]": (event) => {
    event.preventDefault()
    pageviewsSort.set(!pageviewsSort.get())
  }
})
