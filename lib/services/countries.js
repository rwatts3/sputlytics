Countries = {
  filter(visits) {
    return _
      .chain(visits)
      .map((value) => {
        return {name: value.geo.c || "(not set)" }
      })
      .countBy("name")
      .map((value, key) => {
        return {name: key, total: value}
      })
      .sortBy("total")
      .value()
  }
}
