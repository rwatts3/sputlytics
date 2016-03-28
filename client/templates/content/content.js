let pageviewsSort = new ReactiveVar(false)

Template.content.onCreated(() => {
  Filter.init()
})

Template.content.helpers({
  isReady() {
    return Session.get("isReady")
  },
  pages() {
    const visits = Filter.getVisits()
    const pageviews = ContentService.filter(visits)
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
