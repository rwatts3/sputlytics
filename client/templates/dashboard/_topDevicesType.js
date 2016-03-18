Template._topDevicesType.helpers({
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
