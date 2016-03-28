Reports = new Mongo.Collection("reports")

Reports.process = () => {
  const report = Reports.findOne({}, {sort: {time: -1}})
  const startTime = !!report ? report.time : 0
  const endTime = Date.now()
  const domains = Domains.find({})

  domains.forEach((domain) => {
    const domainId = domain._id
    const data = Visits.byDateRange(domainId, startTime, endTime)
    const visitsOfDay = VisitService.groupByDate(data)

    visitsOfDay.forEach((visits) => {
      console.log(`Processing visits of date: ${visits[0].date}`)
      const reportTime = +moment(visits[0].date, "YYYYMMDD")
      const topBrowsers = BrowserService.filter(visits)
      const topOSS = OSService.filter(visits)
      const topDevicesType = DeviceTypeService.filter(visits)
      const topCountries = CountryService.filter(visits)
      const topTraffics = TrafficService.filter(visits)
      const topContents = ContentService.filter(visits)
      const visitorsChart = VisitorsChartService.filter(visits)
      const pageviewsChart = PageviewsChartService.filter(visits)
      Reports.insert({
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
  })
}
