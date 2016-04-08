// Startup code
Meteor.startup(() => {
  console.log("Sputlytics running...")
  Seed.clear();
  Seed.init();
  SyncedCron.config({ collectionTTL: 172800 })
  SyncedCron.start()
})

