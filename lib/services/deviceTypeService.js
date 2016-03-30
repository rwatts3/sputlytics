DeviceTypeService = {
  filter(visits) {
    return _
      .chain(visits)
      .map((value) => {
        return {name: value.ua.device.type || "(not set)" }
      })
      .countBy("name")
      .map((value, key) => {
        return {name: key, total: value}
      })
      .sortBy("total")
      .value()
  },
  group(reports) {
    return _
      .chain(reports)
      .map((value) => {
        return value.topDevicesType
      })
      .flatten()
      .groupBy("name")
      .map((value, key) => {
        return {
          name: key,
          total: _.reduce(value, (sum, obj) => {
            return sum + obj.total
          }, 0)}
      })
      .sortBy("total")
      .value()
  }
}
