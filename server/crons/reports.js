import { Reports } from '../../imports/api/reports.js'	

SyncedCron.add({
  name: "Processing reports",
  schedule(parser) {
    return parser.text("every 10 minutes")
  },
  job() {
    Reports.process()
  }
})
