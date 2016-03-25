Accounts.onCreateUser((options, user) => {
  const domain = options.profile.domain
  const domainId = Domains.insert({url: domain})
  user.domainIds = [domainId]
  return user
})
