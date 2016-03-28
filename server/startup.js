Meteor.startup(() => {
  console.log("Sputlytics running...")
  DBIndex.init()
  SyncedCron.config({collectionTTL: 172800})
  SyncedCron.start()
  // Seed.clear()
  // Seed.init()
})
