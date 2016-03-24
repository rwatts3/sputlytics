Domains = new Mongo.Collection("domains")

Domains.before.insert((userId, obj) => {
  obj.domain = obj.domain.replace(/[http(s):\/\/]+/, "")
})
