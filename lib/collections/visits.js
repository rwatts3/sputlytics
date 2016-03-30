Visits = new Mongo.Collection("visits")

Visits.byDateRange = (domainId, startTime, endTime) => {
  return Visits.find({
    dkey: domainId,
    time: { $gt: startTime, $lte: endTime }
  })
}

Visits.before.insert(function(userId, visit) {
  visit.time = Date.now()
})
