SyncedCron.add({
  name: "Processing reports",
  schedule(parser) {
    return parser.text("every 1 day")
  },
  job() {
    Reports.process()
  }
})
