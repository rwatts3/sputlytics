Meteor.methods({
  addDomain: function(domain) {
    check(domain, String)
    if (this.userId) {
      const domainId = Domains.insert({domain: domain})
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
  }
})
