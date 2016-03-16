Filter = {
  MAX: 10,
  init() {
    Session.setDefault("domainId", false)
    Session.setDefault("startTime", +moment().subtract(1, "day").startOf("day"))
    Session.setDefault("endTime", +moment().endOf("day"))
  },
  refresh(domainId, startTime, endTime) {
    if (startTime > endTime) {
      let time = startTime
      startTime = endTime
      endTime = time
    }
    Session.set("domainId", domainId)
    Session.set("startTime", startTime)
    Session.set("endTime", endTime)
  }
}
