let totalSort = new ReactiveVar(false)

Template.oss.onCreated(() => {
  Filter.init()
})

Template.oss.helpers({
  isReady() {
    return Session.get("isReady")
  },
  oss() {
    const reports = Filter.getReports()
    const oss = OSService.group(reports)
    return totalSort.get() ? oss : oss.reverse()
  },
  totalSortClass() {
    return totalSort.get() ? "asc" : "desc"
  }
})

Template.oss.events({
  "click a[data-sort-total]": (event) => {
    event.preventDefault()
    totalSort.set(!totalSort.get())
  }
})
