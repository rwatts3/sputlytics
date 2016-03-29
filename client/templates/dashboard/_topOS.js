Template._topOS.helpers({
  operationSystems() {
    const reports = Filter.getReports()
    const oss = OSService.group(reports)
    return _.first(oss.reverse(), Filter.MAX)
  }
})
