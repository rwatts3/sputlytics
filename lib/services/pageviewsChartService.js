PageviewsChartService = {
  filter(visits) {
    return _
      .chain(visits)
      .map((visit) => {
        return {date: moment(visit.time).format("MM/DD/YY")}
      })
      .countBy("date")
      .map((value, key) => {
        return {
          time: +moment(key, "MM/DD/YY"),
          label: moment(key, "MM/DD/YY").format("MM/DD"),
          value: value
        }
      })
      .sortBy("time")
      .value()
  },
  group(reports) {
    return _
      .chain(reports)
      .map((value) => {
        return value.pageviewsChart
      })
      .flatten()
      .sortBy("time")
      .groupBy("time")
      .map((val, key) => {
        return {
          time: key,
          label: _.first(val).label,
          value: _.reduce(val, (sum, obj) => {
            return sum + obj.value
          }, 0)}
      })
      .value()
  }
}
