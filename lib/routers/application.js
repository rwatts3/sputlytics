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

FlowRouter.route("/audience/browsers", {
  triggersEnter: [AccountsTemplates.ensureSignedIn],
  action() {
    BlazeLayout.render("browsers")
  }
})

FlowRouter.route("/audience/oss", {
  triggersEnter: [AccountsTemplates.ensureSignedIn],
  action() {
    BlazeLayout.render("oss")
  }
})

FlowRouter.route("/audience/countries", {
  triggersEnter: [AccountsTemplates.ensureSignedIn],
  action() {
    BlazeLayout.render("countries")
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
