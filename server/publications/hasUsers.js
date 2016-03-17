Meteor.publish("hasUsers", function() {
  return Meteor.users.find({}, {fields: {username: 1}})
})
