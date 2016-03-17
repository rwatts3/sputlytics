const url = Meteor.npmRequire("url")

Accounts.onCreateUser((options, user) => {
  const domain = url.parse(options.profile.domain).host
  const domainId = Domains.insert({domain: domain})
  user.domainIds = [domainId]
  return user
})
