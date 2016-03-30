let pagesSort = new ReactiveVar(false)

Template.content.onCreated(() => {
  Filter.init()
})

Template.content.helpers({
  isReady() {
    return Session.get("isReady")
  },
  pages() {
    const reports = Filter.getReports()
    const pages = ContentService.group(reports)
    return pagesSort.get() ? pages : pages.reverse()
  },
  pagesSortClass() {
    return pagesSort.get() ? "asc" : "desc"
  },
  pageUrl() {
    const domain = Domains.findOne(Session.get("domainId"))
    return `${domain.url.replace(/\/$/, "")}${this.name}`
  }
})

Template.content.events({
  "click a[data-sort-pageviews]": (event) => {
    event.preventDefault()
    pagesSort.set(!pagesSort.get())
  }
})
