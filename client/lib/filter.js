Filter = {
  MAX: 10,
  init() {
    const userSubs = Meteor.subscribe("currentUser")
    Meteor.subscribe("domains")
    Session.set("domainId", false)
    Session.set("startTime", +moment().subtract(1, "day").startOf("day"))
    Session.set("endTime", +moment().endOf("day"))
    Tracker.autorun(() => {
      if (userSubs.ready()) {
        if (!Session.get("domainId")) {
          Session.set("domainId", _.first(Meteor.user().domainIds))
        }
        const visitsSubs = Meteor.subscribe("visits",
          Session.get("domainId"),
          Session.get("startTime"),
          Session.get("endTime")
        )
        Session.set("isReady", visitsSubs.ready())
      }
    })
  },
  getVisits() {
    return Visits.byDateRange(
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
