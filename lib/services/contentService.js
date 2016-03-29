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
  },
  group(reports) {
    return _
      .chain(reports)
      .map((value) => {
        return value.topContents
      })
      .flatten()
      .groupBy("name")
      .map((value, key) => {
        return {
          name: key,
          pageviews: _.reduce(value, (sum, obj) => {
            return sum + obj.pageviews
          }, 0)}
      })
      .value()
  }
}
