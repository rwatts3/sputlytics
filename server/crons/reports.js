SyncedCron.add({
  name: "Processing reports",
  schedule(parser) {
    return parser.text("every 15 minutes")
  },
  job() {
    Reports.process()
  }
})
