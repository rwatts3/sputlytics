Accounts.onCreateUser((options, user) => {
  const domain = options.profile.domain
  const domainId = Domains.insert({domain: domain})
  user.domainIds = [domainId]
  return user
})
