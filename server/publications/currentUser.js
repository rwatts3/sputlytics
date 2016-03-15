Meteor.publish("currentUser", function() {
  return Meteor.users.find(this.userId, {fields: {username: 1, domainIds: 1}});
});
