FlowRouter.triggers.enter([AccountsTemplates.ensureSignedIn])

FlowRouter.route("/dashboard", {
  action: () => BlazeLayout.render("dashboard")
})

FlowRouter.route("/content", {
  action: () => BlazeLayout.render("content")
})

FlowRouter.route("/audience/browsers", {
  action: () => BlazeLayout.render("browsers")
})

FlowRouter.route("/audience/oss", {
  action: () => BlazeLayout.render("oss")
})

FlowRouter.route("/audience/countries", {
  action: () => BlazeLayout.render("countries")
})

FlowRouter.route("/traffics", {
  action: () => BlazeLayout.render("traffics")
})

FlowRouter.route("/settings", {
  action: () => BlazeLayout.render("settings")
})
