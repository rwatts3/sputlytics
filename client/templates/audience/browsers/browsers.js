let totalSort = new ReactiveVar(true)

Template.browsers.onCreated(() => {
  Filter.init()
})

Template.browsers.helpers({
  isReady() {
    return Session.get("isReady")
  },
  browsers() {
    const visits = Filter.getVisits()
    const total = _.chain(visits)
      .map((value) => { return {name: value.ua.browser.name || "(not set)" }})
      .countBy("name")
      .map((value, key) => { return {name: key, total: value}})
      .sortBy("total")
      .value()
    return totalSort.get() ? total : total.reverse()
  },
  totalSortClass() {
    return totalSort.get() ? "asc" : "desc"
  }
})

Template.browsers.events({
  "click a[data-sort-total]": (event) => {
    event.preventDefault()
    totalSort.set(!totalSort.get())
  }
})
