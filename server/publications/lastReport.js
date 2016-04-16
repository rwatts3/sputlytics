import { Reports } from '../../imports/api/reports.js'

Meteor.publish("lastReport", function(domainId) {
  check(domainId, String)
  if (this.userId) {
    const user = Meteor.users.findOne(this.userId, {fields: {domainIds: 1}})
    if (_.contains(user.domainIds, domainId)) {
      return Reports.lastReport(domainId)
    } else {
      throw new Meteor.Error(412, "Domain not allowed")
    }
  } else {
    throw new Meteor.Error(412, "Not allowed")
  }
})