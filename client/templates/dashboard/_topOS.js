Template._topOS.helpers({
  operationSystems() {
    const visits = Filter.getVisits()
    const oss = OSService.filter(visits).reverse()
    return _.first(oss, Filter.MAX)
  }
})
