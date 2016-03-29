Template._topContents.helpers({
  pages() {
    const reports = Filter.getReports()
    const pages = ContentService.group(reports)
    return _.first(pages.reverse(), Filter.MAX)
  }
})
