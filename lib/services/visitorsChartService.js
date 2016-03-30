VisitorsChartService = {
  process(visits) {
    const returnedVisits = _.chain(visits)
      .filter((v) => {return !!v.rv})
      .countBy("rv")
      .toArray()
      .reduce((sum, val) => {return sum + val}, 0)
      .value()
    const newVisits = _.size(visits) - returnedVisits
    return {
      returnedVisits: returnedVisits || 0,
      newVisits: newVisits || 0
    }
  },
  group(reports) {
    const newVisits = _
      .chain(reports)
      .map((value) => {
        return value.visitorsChart
      })
      .reduce((sum, val) => {
        return sum + val.newVisits
      }, 0)
      .value()
    const returnedVisits = _
      .chain(reports)
      .map((value) => {
        return value.visitorsChart
      })
      .reduce((sum, val) => {
        return sum + val.returnedVisits
      }, 0)
      .value()
    return {
      newVisits: newVisits,
      returnedVisits: returnedVisits
    }
  }
}
