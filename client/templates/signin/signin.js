Template.signin.onCreated(() => {
  Meteor.subscribe("hasUsers")
})

Template.signin.helpers({
  hasUsers() {
    return !!Meteor.users.find({}).count()
  }
})
