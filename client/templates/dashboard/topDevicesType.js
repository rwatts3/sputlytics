Template.topDevicesType.helpers({
  deviceTypes() {
    const reports = Filter.getReports()
    const devicesTypes = DeviceTypeService.group(reports)
    return _.first(devicesTypes.reverse(), Filter.MAX)
  }
})
