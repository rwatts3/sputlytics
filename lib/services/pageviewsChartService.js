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
  }
}
