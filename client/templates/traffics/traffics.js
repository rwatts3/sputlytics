let totalSort = new ReactiveVar(false)

Template.traffics.onCreated(() => {
  Filter.init()
})

Template.traffics.helpers({
  isReady() {
    return Session.get("isReady")
  },
  sites() {
    const visits = Filter.getVisits()
    const sites = _.chain(visits)
      .map((value) => {return {name: value.rf || "direct"}})
      .countBy("name")
      .map((value, key) => {return {name: key, total: value}})
      .sortBy("total")
      .value()
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
