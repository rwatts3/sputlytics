Template.dashboard.onCreated(() => {
  Filter.init()
})

Template.dashboard.onRendered(() => {
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
        {label: "New visitors", value: newVisits, color: "#2ecc71"},
        {label: "Returned visitors", value: returnedVisits, color: "#2980b9"}
      ]
      nv.addGraph(() => {
        d3.select("svg#nxrchart")
          .datum(data)
          .call(chart)
        nv.utils.windowResize(chart.update)
        return chart
      })
    }
  })
})

Template.dashboard.helpers({
  isReady() {
    return Session.get("isReady")
  },
  browsers() {
    const visits = Filter.getVisits()
    return _
      .chain(visits)
      .map((value) => { return {name: value.ua.browser.name || "(not set)" }})
      .countBy("name")
      .map((value, key) => { return {name: key, total: value}})
      .sortBy("total")
      .reverse()
      .first(Filter.MAX)
      .value()
  },
  countries() {
    const visits = Filter.getVisits()
    return _
      .chain(visits)
      .map((value) => { return {name: value.geo.c || "(not set)" }})
      .countBy("name")
      .map((value, key) => { return {name: key, total: value} })
      .sortBy("total")
      .reverse()
      .first(Filter.MAX)
      .value()
  },
  operationSystems() {
    const visits = Filter.getVisits()
    return _
      .chain(visits)
      .map((value) => { return {name: value.ua.os.name || "(not set)" }})
      .countBy("name")
      .map((value, key) => { return {name: key, total: value} })
      .sortBy("total")
      .reverse()
      .first(Filter.MAX)
      .value()
  },
  deviceTypes() {
    const visits = Filter.getVisits()
    return _
      .chain(visits)
      .map((value) => { return {name: value.ua.device.type || "(not set)" }})
      .countBy("name")
      .map((value, key) => { return {name: key, total: value} })
      .sortBy("total")
      .reverse()
      .first(Filter.MAX)
      .value()
  }
})
