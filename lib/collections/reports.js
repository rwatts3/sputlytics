Reports = new Mongo.Collection("reports")

Reports.byDateRange = (domainId, startTime, endTime) => {
  return Reports.find({
    domainId: domainId,
    time: { $gte: startTime, $lt: endTime }
  })
}

Reports.process = () => {
  const domains = Domains.find({}).fetch()
  if (domains && domains.length) {
    domains.forEach((domain) => {
      const domainId = domain._id
      const report = Reports.findOne({domainId: domainId}, {sort: {time: -1}})
      const startTime = !!report ? report.time : 0
      const endTime = Date.now()
      const data = Visits.byDateRange(domainId, startTime, endTime).fetch()
      console.log(`Processing domain: ${domain.url}`)
      if (data && data.length) {
        const visitsOfDay = VisitService.groupByDate(data)
        visitsOfDay.forEach((visits) => {
          console.log(`Visits of date: ${visits[0].date}`)
          const reportTime = +moment(visits[0].date, "YYYYMMDDhhmm")
          const topBrowsers = BrowserService.filter(visits)
          const topOSS = OSService.filter(visits)
          const topDevicesType = DeviceTypeService.filter(visits)
          const topCountries = CountryService.filter(visits)
          const topTraffics = TrafficService.filter(visits)
          const topContents = ContentService.filter(visits)
          const visitorsChart = VisitorsChartService.filter(visits)
          const pageviewsChart = PageviewsChartService.filter(visits)
          Reports.insert({
            domainId: domainId,
            time: reportTime,
            topBrowsers: topBrowsers,
            topOSS: topOSS,
            topDevicesType: topDevicesType,
            topCountries: topCountries,
            topTraffics: topTraffics,
            topContents: topContents,
            visitorsChart: visitorsChart,
            pageviewsChart: pageviewsChart
          })
        })
      } else {
        console.log("No visits to this domain")
      }
    })
  }
}
