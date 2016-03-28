let totalSort = new ReactiveVar(false)

Template.traffics.onCreated(() => {
  Filter.init()
})

Template.traffics.helpers({
  isReady() {
    return Session.get("isReady")
  },
  sites() {
    const domain = Domains.findOne(Session.get("domainId"))
    const visits = Filter.getVisits()
    const sites = TrafficService.filter(visits)
    return totalSort.get() ? sites : sites.reverse()
  },
  totalSortClass() {
    return totalSort.get() ? "asc" : "desc"
  }
})

Template.traffics.events({
  "click a[data-sort-total]": (event) => {
    event.preventDefault()
    totalSort.set(!totalSort.get())
  }
})
