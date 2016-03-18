Accounts.onCreateUser((options, user) => {
  const domain = options.profile.domain.replace(/http(s):\/\//, "")
  const domainId = Domains.insert({domain: domain})
  user.domainIds = [domainId]
  return user
})
