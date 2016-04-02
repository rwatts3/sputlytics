PageviewsChartService = {
  process(visits) {
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
  group(reports, startTime, endTime) {
    let periodsChart = {}
    let days = moment(endTime).diff(startTime, "days")
    let time = moment(startTime).startOf("day")
    _(days).times(() => {
      periodsChart[+time] = [{
        time: +time,
        label: time.format("MM/DD"),
        value: 0
      }]
      time.add(1, "day").startOf("day")
    })
    const pageviewsChart = _
      .chain(reports)
      .map((value) => {
        return value.pageviewsChart
      })
      .flatten()
      .groupBy("time")
      .value()
    return _
      .chain(pageviewsChart)
      .extend(periodsChart)
      .map((val, key) => {
        return {
          time: +key,
          label: _.first(val).label,
          value: _.reduce(val, (sum, obj) => {
            return sum + obj.value
          }, 0)}
      })
      .sortBy("time")
      .value()
  }
}
