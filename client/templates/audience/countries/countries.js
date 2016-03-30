let totalSort = new ReactiveVar(true)

Template.countries.onCreated(() => {
  Filter.init()
})

Template.countries.helpers({
  isReady() {
    return Session.get("isReady")
  },
  countries() {
    const reports = Filter.getReports()
    const countries = CountryService.group(reports)
    return totalSort.get() ? countries : countries.reverse()
  },
  totalSortClass() {
    return totalSort.get() ? "asc" : "desc"
  }
})

Template.countries.events({
  "click a[data-sort-total]": (event) => {
    event.preventDefault()
    totalSort.set(!totalSort.get())
  }
})
