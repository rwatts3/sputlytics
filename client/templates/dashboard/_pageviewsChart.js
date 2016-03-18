Template._pageviewsChart.onRendered(() => {
  const chart = nv.models.discreteBarChart()
    .x((data) => data.label)
    .y((data) => data.value)
    .noData("No data in this period")
    .showLegend(false)
    .staggerLabels(true)
    .showValues(true)
    .valueFormat(d3.format("d"))
  Tracker.autorun(() => {
    if (Session.get("isReady")) {
      const visits = Filter.getVisits()
      const pageviews = _.chain(visits)
        .map((visit) => { return {date: moment(visit.time).format("MM/DD/YY")}})
        .countBy("date")
        .map((value, key) => { return {label: key, value: value}})
        .value()
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
