Template._topBrowsers.helpers({
  browsers() {
    const visits = Filter.getVisits()
    const browsers = BrowserService.filter(visits).reverse()
    return _.first(browsers, Filter.MAX)
  }
})
