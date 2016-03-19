Template.header.helpers({
  isActive(template) {
    return FlowRouter.current().path.includes(template)
  }
})

Template.header.events({
  "click a[data-logout]": () => {
    AccountsTemplates.logout()
  }
})
