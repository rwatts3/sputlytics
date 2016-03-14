Meteor.startup(() => {
  console.log("Sputlytics running...");
  if (process.env.NODE_ENV === "development") {
    Visits.remove({});
  }
});
