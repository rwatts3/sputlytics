Template.topContents.helpers({
  pages() {
    const reports = Filter.getReports()
    const pages = ContentService.group(reports)
    return _.first(pages.reverse(), Filter.MAX)
  },
  pageUrl() {
    const domain = Domains.findOne(Session.get("domainId"))
    return `${domain.url.replace(/\/$/, "")}${this.name}`
  }
})
