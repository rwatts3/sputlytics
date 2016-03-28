Template._topBrowsers.helpers({
  browsers() {
    const visits = Filter.getVisits()
    const browsers = Browsers.filter(visits).reverse()
    return _.first(browsers, Filter.MAX)
  }
})
