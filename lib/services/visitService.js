VisitService = {
  groupByDate(visits) {
    return _
      .chain(visits)
      .map((value) => {
        value.date = moment(value.time).format("YYYYMMDD")
        return value
      })
      .groupBy("date")
      .toArray()
      .value()
  }
}
