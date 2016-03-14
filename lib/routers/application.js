FlowRouter.route("/dashboard", {
  triggersEnter: [AccountsTemplates.ensureSignedIn],
  action() {
    BlazeLayout.render("dashboard");
  }
});
