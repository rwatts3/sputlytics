Template._visitorsChart.onRendered(() => {
  const chart = nv.models.pieChart()
    .x((data) => data.label)
    .y((data) => data.value)
    .noData("No data in this period")
    .showLegend(false)
    .showLabels(true)
    .labelType("percent")
    .valueFormat(d3.format("d"))
  Tracker.autorun(() => {
    if (Session.get("isReady")) {
      const visits = Filter.getVisits()
      const returnedVisits = _.chain(visits)
        .filter((v) => {return !!v.rv})
        .countBy("rv")
        .toArray()
        .reduce((sum, val) => {return sum + val}, 0)
        .value()
      const newVisits = _.size(visits) - returnedVisits
      const data = []
      if (newVisits || returnedVisits) {
        data.push({label: "New visitors", value: newVisits, color: "#2ecc71"})
        data.push({label: "Returned visitors", value: returnedVisits, color: "#2980b9"})
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
