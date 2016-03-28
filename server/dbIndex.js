DBIndex = {
  init() {
    Domains._ensureIndex({url: 1})
    Visits._ensureIndex({dkey: 1, ip: 1, time: 1, timeEnd: 1})
    Reports._ensureIndex({time: 1})
  }
}
