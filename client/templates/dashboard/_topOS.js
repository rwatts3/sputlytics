Template._topOS.helpers({
  operationSystems() {
    const visits = Filter.getVisits()
    const oss = OS.filter(visits).reverse()
    return _.first(oss, Filter.MAX)
  }
})
