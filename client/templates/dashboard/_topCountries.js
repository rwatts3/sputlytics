Template._topCountries.helpers({
  countries() {
    const visits = Filter.getVisits()
    const countries = CountryService.filter(visits).reverse()
    return _.first(countries, Filter.MAX)
  }
})
