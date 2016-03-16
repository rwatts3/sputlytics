const MAX = 10

Template.dashboard.onCreated(() => {
  const userSubs = Meteor.subscribe("currentUser")
  Meteor.subscribe("domains")
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
      Session.set("visitsReady", visitsSubs.ready())
    }
  })
})

Template.dashboard.helpers({
  visitsReady() {
    return Session.get("visitsReady")
  },
  browsers() {
    const visits = Visits.byDateRange(
      Session.get("domainId"),
      Session.get("startTime"),
      Session.get("endTime")
    )
    return _
      .chain(visits.fetch())
      .map((value) => { return {name: value.ua.browser.name }})
      .countBy("name")
      .map((value, key) => { return {name: key, pageviews: value} })
      .sortBy("pageviews")
      .reverse()
      .first(MAX)
      .value()
  },
  countries() {
    const visits = Visits.byDateRange(
      Session.get("domainId"),
      Session.get("startTime"),
      Session.get("endTime")
    )
    return _
      .chain(visits.fetch())
      .map((value) => { return {name: value.geo.c }})
      .countBy("name")
      .map((value, key) => { return {name: key, pageviews: value} })
      .sortBy("pageviews")
      .reverse()
      .first(MAX)
      .value()
  },
  operationSystems() {
    const visits = Visits.byDateRange(
      Session.get("domainId"),
      Session.get("startTime"),
      Session.get("endTime")
    )
    return _
      .chain(visits.fetch())
      .map((value) => { return {name: value.ua.os.name }})
      .countBy("name")
      .map((value, key) => { return {name: key, pageviews: value} })
      .sortBy("pageviews")
      .reverse()
      .first(MAX)
      .value()
  },
  deviceTypes() {
    const visits = Visits.byDateRange(
      Session.get("domainId"),
      Session.get("startTime"),
      Session.get("endTime")
    )
    return _
      .chain(visits.fetch())
      .map((value) => { return {name: value.ua.device.type }})
      .countBy("name")
      .map((value, key) => { return {name: key, pageviews: value} })
      .sortBy("pageviews")
      .reverse()
      .first(MAX)
      .value()
  }
})
