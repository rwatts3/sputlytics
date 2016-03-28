Template._pageviewsChart.onRendered(() => {
  const chart = nv.models.discreteBarChart()
    .x((data) => data.label)
    .y((data) => data.value)
    .noData("No data in this period")
    .showLegend(false)
    .valueFormat(d3.format("0d"))
    .showValues(true)
  chart.xAxis.axisLabel("Period")
  chart.yAxis.axisLabel("Pageviews").tickFormat(d3.format("0d"))
  Tracker.autorun(() => {
    if (Session.get("isReady")) {
      const visits = Filter.getVisits()
      const pageviews = PageviewsChartService.filter(visits)
      const data = [{key: "Pageviews per day", values: pageviews}]
      nv.addGraph(() => {
        d3.select("svg#pageviewschart")
          .datum(data)
          .call(chart)
        nv.utils.windowResize(chart.update)
        return chart
      })
    }
  })
})
