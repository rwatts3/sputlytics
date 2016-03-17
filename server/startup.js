Meteor.startup(() => {
  console.log("Sputlytics running...")
  DBIndex.init()
  // Seed.clear()
  // Seed.init()
})
