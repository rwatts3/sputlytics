Template.visitorsChart.onRendered(() => {
  const chart = nv.models.pieChart()
    .x((data) => data.label)
    .y((data) => Math.round(data.value))
    .noData("No data in this period")
    .showLegend(false)
    .showLabels(true)
    .labelType("percent")
    .valueFormat(d3.format("0d"))
  Tracker.autorun(() => {
    if (Session.get("isReady")) {
      const reports = Filter.getReports()
      const filtered = VisitorsChartService.group(reports)
      const data = []
      if (filtered && filtered.newVisits || filtered.returnedVisits) {
        data.push({label: "New visitors", value: filtered.newVisits, color: "#2ecc71"})
        data.push({label: "Returned visitors", value: filtered.returnedVisits, color: "#2980b9"})
      }
      nv.addGraph(() => {
        d3.select("svg#visitorschart")
          .datum(data)
          .call(chart)
        nv.utils.windowResize(chart.update)
        return chart
      })
    }
  })
})
