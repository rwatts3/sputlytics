Template.dashboard.onCreated(() => {
  Filter.init()
})

Template.dashboard.helpers({
  isReady() {
    return Session.get("isReady")
  }
})
