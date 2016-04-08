import { Domains } from '../../imports/api/domains.js'

Meteor.publishComposite('domains', function() {
  if (this.userId) {
    return {
      find() {
        return Meteor.users.find({ _id: this.userId }, {
          fields: {
            domainIds: 1
          }
        })
      },
      children: [{
        find(user) {
          return Domains.find({ _id: { $in: user.domainIds } })
        }
      }]
    }
  }
  throw new Meteor.Error(412, "Not allowed")
})
