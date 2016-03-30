Template._topTraffics.helpers({
  sites() {
    const reports = Filter.getReports()
    const sites = TrafficService.group(reports)
    return _.first(sites.reverse(), Filter.MAX)
  },
  isDirect() {
    return this.name.toLowerCase() === "direct"
  }
})
