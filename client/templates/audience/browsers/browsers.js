let totalSort = new ReactiveVar(false)

Template.browsers.onCreated(() => {
  Filter.init()
})

Template.browsers.helpers({
  isReady() {
    return Session.get("isReady")
  },
  browsers() {
    const reports = Filter.getReports()
    const browsers = BrowserService.group(reports)
    return totalSort.get() ? browsers : browsers.reverse()
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
