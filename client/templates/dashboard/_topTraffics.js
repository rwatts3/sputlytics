Template._topContents.helpers({
  sites() {
    const visits = Filter.getVisits()
    return _.chain(visits)
      .map((value) => {return {name: value.rf || "direct"}})
      .countBy("name")
      .map((value, key) => {return {name: key, total: value}})
      .sortBy("total")
      .reverse()
      .first(Filter.MAX)
      .value()
  }
})
