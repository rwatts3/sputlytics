Template._topCountries.helpers({
  countries() {
    const visits = Filter.getVisits()
    const countries = Countries.filter(visits).reverse()
    return _.first(countries, Filter.MAX)
  }
})
