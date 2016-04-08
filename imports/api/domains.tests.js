import { Meteor } from 'meteor/meteor'
import { Random } from 'meteor/random'
import { assert } from 'meteor/practicalmeteor:chai'

import { Domains } from './domains.js'

if (Meteor.isServer) {
  describe('Domains', () => {
    const username = "test_user"
    const password = "topsecret"
    let userId

    before(() => {
      Meteor.users.remove({})
      userId = Accounts.createUser({ username, password })
    })

    describe('methods', () => {
      beforeEach(() => {
        Domains.remove({})
      })

      it('user can add a domain', () => {
        const addDomain = Meteor.server.method_handlers['addDomain']
        const invocation = { userId }

        addDomain.apply(invocation, ['http://localhost:3000'])

        let domain = Domains.findOne({})
        let user = Meteor.users.findOne({ _id: userId })

        assert.isDefined(domain)
        assert.equal(domain._id, user.domainIds[0])
      })
    })
  })

}
