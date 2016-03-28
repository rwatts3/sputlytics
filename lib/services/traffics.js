Traffics = {
  filter(visits) {
    return _
      .chain(visits)
      .map((value) => {
        let rf = null
        if (!!value.rf) {
          rf = value.rf.includes(domain.url) ? "Direct" : value.rf
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
  }
}
