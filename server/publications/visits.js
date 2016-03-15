Meteor.publish("visits", function(domainId, startTime, endTime) {
  if (this.userId) {
    const user = Meteor.users.findOne(this.userId, {fields: {domainIds: 1}});
    if (_.contains(user.domainIds, domainId)) {
      return Visits.byDateRange(domainId, startTime, endTime);
    } else {
      throw new Meteor.Error(412, "Domain not allowed");
    }
  } else {
    throw new Meteor.Error(412, "Not allowed");
  }
});
