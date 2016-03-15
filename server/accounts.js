Accounts.onCreateUser((options, user) => {
  user.domainIds = [];
  return user;
});
