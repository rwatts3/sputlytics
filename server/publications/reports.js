Meteor.publish("reports", function(domainId, startTime, endTime) {
  check(domainId, String)
  check(startTime, Number)
  check(endTime, Number)
  if (this.userId) {
    const user = Meteor.users.findOne(this.userId, {fields: {domainIds: 1}})
    if (_.contains(user.domainIds, domainId)) {
      return Reports.byDateRange(domainId, startTime, endTime)
    } else {
      throw new Meteor.Error(412, "Domain not allowed")
    }
  } else {
    throw new Meteor.Error(412, "Not allowed")
  }
})
