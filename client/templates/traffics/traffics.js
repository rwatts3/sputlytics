let totalSort = new ReactiveVar(false)

Template.traffics.onCreated(() => {
  Filter.init()
})

Template.traffics.helpers({
  isReady() {
    return Session.get("isReady")
  },
  sites() {
    const reports = Filter.getReports()
    const sites = TrafficService.group(reports)
    return totalSort.get() ? sites : sites.reverse()
  },
  totalSortClass() {
    return totalSort.get() ? "asc" : "desc"
  },
  isDirect() {
    return this.name.toLowerCase() === "direct"
  }
})

Template.traffics.events({
  "click a[data-sort-total]": (event) => {
    event.preventDefault()
    totalSort.set(!totalSort.get())
  }
})
