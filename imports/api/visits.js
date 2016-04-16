import { Meteor } from 'meteor/meteor'
import { Mongo } from 'meteor/mongo'
import { check } from 'meteor/check'

export const Visits = new Mongo.Collection("visits")

Visits.attachSchema(new SimpleSchema({
	dkey: {
		type: String,
		index: 1
	},
	ip: {
		type: String,
		index: 1
	},
	time: {
		type: Number,
		optional: true,
		index: 1,
	},
	timeEnd: {
		type: Number,
		optional: true,
		index: 1
	},
	// TODO: Finish schema
	// ...
}))



Visits.byDateRange = (domainId, startTime, endTime) => {
  return Visits.find({
    dkey: domainId,
    time: { $gt: startTime, $lte: endTime }
  })
}

Visits.before.insert(function(userId, visit) {
  visit.time = Date.now()
})
