ContentService = {
  filter(visits) {
    return _
      .chain(visits)
      .map((value) => {
        return {name: value.path || "(not set)"}
      })
      .countBy("name")
      .map((value, key) => {
        return {name: key, pageviews: value}
      })
      .sortBy("pageviews")
      .value()
  }
}
