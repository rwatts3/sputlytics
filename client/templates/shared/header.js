Template.header.helpers({
  isActive(template) {
    const currentPath = FlowRouter.current().path
    return currentPath.includes(template)
  }
})

Template.header.events({
  "click a[data-logout]": () => {
    AccountsTemplates.logout()
  }
})
