Visits = new Mongo.Collection("visits");

Visits.byDateRange = (domainId, startTime, endTime) => {
  return Visits.find({
    dkey: domainId,
    time: { $gte: +startTime, $lt: +endTime }
  });
};

Visits.before.insert((userId, visit) => {
  visit.time = Date.now();
});
