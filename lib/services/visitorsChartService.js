VisitorsChartService = {
  filter(visits) {
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
  }
}
