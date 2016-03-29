Template._topCountries.helpers({
  countries() {
    const reports = Filter.getReports()
    const countries = CountryService.group(reports)
    return _.first(countries.reverse(), Filter.MAX)
  }
})
