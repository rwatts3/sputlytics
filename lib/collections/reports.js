import { Domains } from '../../imports/api/domains.js'

Reports = new Mongo.Collection("reports")

Reports.attachSchema(new SimpleSchema({
  domainId: {
    type: String
  },
  time: {
    type: Number,
    optional: true,
    index: 1
  },
  createdAt: {
    type: Number,
    index: 1
  },
  // TODO: Finish schema keys
  // ...
}))


Reports.byDateRange = (domainId, startTime, endTime) => {
  return Reports.find({
    domainId: domainId,
    time: { $gte: startTime, $lte: endTime }
  })
}

Reports.lastReport = (domainId) => {
  return Reports.find(
    {domainId: domainId},
    {sort: {createdAt: -1}, limit: 1, fields: {createdAt: 1}}
  )
}

Reports.process = () => {
  Domains.find({}).forEach((domain) => {
    const reports = Reports.lastReport(domain._id).fetch()
    const lastReport = reports && reports.length && reports[0]
    const startTime = !!lastReport ? (lastReport.createdAt + 1) : 0
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
          topBrowsers: BrowserService.process(visits),
          topOSS: OSService.process(visits),
          topDevicesType: DeviceTypeService.process(visits),
          topCountries: CountryService.process(visits),
          topTraffics: TrafficService.process(visits, domain.url),
          topContents: ContentService.process(visits),
          visitorsChart: VisitorsChartService.process(visits),
          pageviewsChart: PageviewsChartService.process(visits)
        }
        if (isSameDay) {
          console.log(`Updating report: ${lastReport._id}`)
          Reports.update(lastReport._id, reportParams)
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
