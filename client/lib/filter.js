Filter = {
  MAX: 10,
  init() {
    const userSubs = Meteor.subscribe("currentUser")
    Meteor.subscribe("domains")
    Session.setDefault("domainId", false)
    Session.setDefault("startTime", +moment().subtract(1, "day").startOf("day"))
    Session.setDefault("endTime", +moment().endOf("day"))
    Tracker.autorun(() => {
      if (userSubs.ready()) {
        if (!Session.get("domainId")) {
          Session.set("domainId", _.first(Meteor.user().domainIds))
        }
        const reportsSubs = Meteor.subscribe("reports",
          Session.get("domainId"),
          Session.get("startTime"),
          Session.get("endTime")
        )
        Session.set("isReady", reportsSubs.ready())
      }
    })
  },
  getReports() {
    return Reports.byDateRange(
      Session.get("domainId"),
      Session.get("startTime"),
      Session.get("endTime")
    ).fetch()
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
