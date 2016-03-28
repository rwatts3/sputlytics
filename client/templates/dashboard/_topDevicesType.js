Template._topDevicesType.helpers({
  deviceTypes() {
    const visits = Filter.getVisits()
    const devicesTypes = DevicesType.filter(visits).reverse()
    return _.first(devicesTypes, Filter.MAX)
  }
})
