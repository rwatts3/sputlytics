DBIndex = {
  init() {
    Domains._ensureIndex({domain: 1});
    Visits._ensureIndex({dkey: 1, ip: 1, time: 1});
  }
}
