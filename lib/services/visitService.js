VisitService = {
  groupByDate(visits) {
    return _
      .chain(visits)
      .map((value) => {
        value.date = moment(value.time).format("YYYYMMDDhhmm")
        return value
      })
      .groupBy("date")
      .toArray()
      .value()
  }
}
