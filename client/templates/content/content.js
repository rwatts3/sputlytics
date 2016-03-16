Template.content.onCreated(() => {
  Filter.init()
})

Template.content.helpers({
  isReady() {
    return Session.get("isReady")
  },
  paths() {
    const visits = Filter.getVisits()
    return _
      .chain(visits)
      .map((value) => { return {name: value.rf }})
      .countBy("name")
      .map((value, key) => { return {name: key, pageviews: value} })
      .sortBy("pageviews")
      .reverse()
      .value()
  }
})
