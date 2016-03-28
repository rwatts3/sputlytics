Template._topContents.helpers({
  pages() {
    const visits = Filter.getVisits()
    const pageviews = Contents.filter(visits).reverse()
    return _.first(pageviews, Filter.MAX)
  }
})
