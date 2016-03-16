Domains = new Mongo.Collection("domains")

Domains.before.insert((userId, domain) => {
  domain.createdAt = Date.now()
})
