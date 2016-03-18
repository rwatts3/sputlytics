Template._visitorsChart.onRendered(() => {
  const chart = nv.models.pieChart()
    .x((data) => data.label)
    .y((data) => data.value)
    .noData("No data in this period")
    .showLegend(false)
    .showLabels(true)
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
      const data = [
        {label: "New", value: newVisits, color: "#2ecc71"},
        {label: "Returned", value: returnedVisits, color: "#2980b9"}
      ]
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
