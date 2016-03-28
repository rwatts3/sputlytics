Template._topTraffics.helpers({
  sites() {
    const domain = Domains.findOne(Session.get("domainId"))
    const visits = Filter.getVisits()
    const sites = TrafficService.filter(visits).reverse()
    return _.first(sites, Filter.MAX)
  }
})
