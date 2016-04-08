import { Meteor } from 'meteor/meteor'
import { Mongo } from 'meteor/mongo'
import { check } from 'meteor/check'

export const Domains = new Mongo.Collection("domains")

if (Meteor.isServer) {
  Meteor.methods({
    addDomain: function(domain) {
      check(domain, String)
      if (this.userId) {
        const domainId = Domains.insert({url: domain})
        Meteor.users.update(
          {_id: this.userId},
          {$push: {domainIds: domainId}}
        )
      } else {
        throw new Meteor.Error(412, "Not allowed")
      }
    },
    deleteDomain: function(domainId) {
      check(domainId, String)
      if (this.userId) {
        Domains.remove({_id: domainId})
        Visits.remove({dkey: domainId})
        Meteor.users.update(
          {domainIds: domainId},
          {$pull: {domainIds: {$in: [domainId]}}},
          {multi: true}
        )
      } else {
        throw new Meteor.Error(412, "Not allowed")
      }
    },
    checkDomain: function(domainId) {
      check(domainId, String)
      if (this.userId) {
        const domain = Domains.findOne(domainId)
        if (domain && domain.url) {
          const snippet = `clientKey: "${domain._id}"`
          const result = HTTP.get(domain.url)
          if (result.statusCode === 200 && result.content.includes(snippet)) {
            return true
          } else {
            throw new Meteor.Error(404, "Tracking code not found")
          }
        } else {
          throw new Meteor.Error(404, "Tracking code not found")
        }
      } else {
        throw new Meteor.Error(412, "Not allowed")
      }
    }
  })
}
