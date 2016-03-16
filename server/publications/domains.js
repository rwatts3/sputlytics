Meteor.publish("domains", function() {
  if (this.userId) {
    const user = Meteor.users.findOne(this.userId, {fields: {domainIds: 1}})
    return Domains.find({_id: {$in: user.domainIds}})
  } else {
    throw new Meteor.Error(412, "Not allowed")
  }
})
