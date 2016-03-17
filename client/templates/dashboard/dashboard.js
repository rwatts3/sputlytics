Template.dashboard.onCreated(function(){
  Filter.init()
  this.autorun(() => {
    let domainId = Session.get("domainId");
    let startTime = Session.get("startTime");
    let endTime = Session.get("endTime");
    Filter.refresh(domainId, startTime, endTime);
  });
});

Template.dashboard.helpers({
  isReady() {
    return Session.get("isReady")
  },
  browsers() {
    const visits = Filter.getVisits()
    return _
      .chain(visits)
      .map((value) => { return {name: value.ua.browser.name }})
      .countBy("name")
      .map((value, key) => { return {name: key, pageviews: value} })
      .sortBy("pageviews")
      .reverse()
      .first(Filter.MAX)
      .value()
  },
  countries() {
    const visits = Filter.getVisits()
    return _
      .chain(visits)
      .map((value) => { return {name: value.geo.c }})
      .countBy("name")
      .map((value, key) => { return {name: key, pageviews: value} })
      .sortBy("pageviews")
      .reverse()
      .first(Filter.MAX)
      .value()
  },
  operationSystems() {
    const visits = Filter.getVisits()
    return _
      .chain(visits)
      .map((value) => { return {name: value.ua.os.name }})
      .countBy("name")
      .map((value, key) => { return {name: key, pageviews: value} })
      .sortBy("pageviews")
      .reverse()
      .first(Filter.MAX)
      .value()
  },
  deviceTypes() {
    const visits = Filter.getVisits()
    return _
      .chain(visits)
      .map((value) => { return {name: value.ua.device.type }})
      .countBy("name")
      .map((value, key) => { return {name: key, pageviews: value} })
      .sortBy("pageviews")
      .reverse()
      .first(Filter.MAX)
      .value()
  }
})
