Template.dashboard.onCreated(() => {
  Filter.init()
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
