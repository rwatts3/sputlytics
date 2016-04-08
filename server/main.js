// Startup code
DBIndex.init()
SyncedCron.config({ collectionTTL: 172800 })
SyncedCron.start()
console.log("Sputlytics running...")
