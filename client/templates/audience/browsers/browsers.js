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
    const browsers = BrowserService.filter(visits)
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
