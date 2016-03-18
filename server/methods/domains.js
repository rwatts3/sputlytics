Meteor.methods({
  deleteDomain: function(domainId) {
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
