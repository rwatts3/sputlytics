TrafficService = {
  filter(visits, domainUrl) {
    return _
      .chain(visits)
      .map((value) => {
        let rf = null
        if (!!value.rf) {
          rf = value.rf.includes(domainUrl) ? "Direct" : value.rf
        } else {
          rf = "Direct"
        }
        return {name: rf}
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
        return value.topTraffics
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
