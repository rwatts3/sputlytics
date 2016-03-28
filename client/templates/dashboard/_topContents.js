Template._topContents.helpers({
  pages() {
    const visits = Filter.getVisits()
    const pageviews = ContentService.filter(visits).reverse()
    return _.first(pageviews, Filter.MAX)
  }
})
