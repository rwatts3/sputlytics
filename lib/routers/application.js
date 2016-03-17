FlowRouter.route("/dashboard", {
  triggersEnter: [AccountsTemplates.ensureSignedIn],
  action() {
    BlazeLayout.render("dashboard")
  }
})

FlowRouter.route("/content", {
  triggersEnter: [AccountsTemplates.ensureSignedIn],
  action() {
    BlazeLayout.render("content")
  }
})

FlowRouter.route("/traffics", {
  triggersEnter: [AccountsTemplates.ensureSignedIn],
  action() {
    BlazeLayout.render("traffics")
  }
})

FlowRouter.route("/settings", {
  triggersEnter: [AccountsTemplates.ensureSignedIn],
  action() {
    BlazeLayout.render("settings")
  }
})
