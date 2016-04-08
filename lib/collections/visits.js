Visits = new Mongo.Collection("visits")

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
		index: 1
	},
	timeEnd: {
		type: Number,
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
