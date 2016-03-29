Template._topBrowsers.helpers({
  browsers() {
    const reports = Filter.getReports()
    const browsers = BrowserService.group(reports)
    return _.first(browsers.reverse(), Filter.MAX)
  }
})
