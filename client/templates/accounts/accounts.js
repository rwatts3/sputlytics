Template.accounts.onCreated(() => {
  Meteor.subscribe("hasUsers")
})

Template.accounts.helpers({
  hasUsers() {
    return !!Meteor.users.find({}).count()
  }
})
