Reports = new Mongo.Collection("reports")

Reports.byDateRange = (domainId, startTime, endTime) => {
  return Reports.find({
    domainId: domainId,
    time: { $gte: startTime, $lte: endTime }
  })
}

Reports.process = () => {
  Domains.find({}).forEach((domain) => {
    const report = Reports.findOne({domainId: domain._id}, {sort: {createdAt: -1}})
    const startTime = !!report ? (report.createdAt + 1) : 0
    const endTime = Date.now()
    const isSameDay = moment(startTime).isSame(endTime, "day")
    const data = Visits.byDateRange(domain._id, startTime, endTime).fetch()
    console.log("======================================================")
    console.log(`Domain: ${domain.url}`)
    console.log(`Period: ${startTime} - ${endTime}| Same day?: ${isSameDay}`)
    if (data && data.length) {
      const visitsOfDay = VisitService.groupByDate(data)
      visitsOfDay.forEach((visits) => {
        console.log(`Visits of date: ${visits[0].date}`)
        const reportTime = +moment(visits[0].date, "YYYYMMDD")
        const reportParams = {
          domainId: domain._id,
          time: reportTime,
          createdAt: endTime,
          topBrowsers: BrowserService.filter(visits),
          topOSS: OSService.filter(visits),
          topDevicesType: DeviceTypeService.filter(visits),
          topCountries: CountryService.filter(visits),
          topTraffics: TrafficService.filter(visits, domain.url),
          topContents: ContentService.filter(visits),
          visitorsChart: VisitorsChartService.filter(visits),
          pageviewsChart: PageviewsChartService.filter(visits)
        }
        if (isSameDay) {
          console.log(`Updating report: ${report._id}`)
          Reports.update(report._id, reportParams)
        } else {
          console.log(`Inserting new report`)
          Reports.insert(reportParams)
        }
      })
    } else {
      console.log("No visits for this domain")
    }
  })
}
