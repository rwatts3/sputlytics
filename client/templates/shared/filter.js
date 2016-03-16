Template.filter.onCreated(() => {
  Session.setDefault("domainId", false)
  Session.setDefault("startTime", +moment().subtract(1, "day").startOf("day"))
  Session.setDefault("endTime", +moment().endOf("day"))
})

Template.filter.onRendered(() => {
  const params = {
    endDate: "0d",
    orientation: "bottom right",
    calendarWeeks: true,
    autoclose: true,
    todayHighlight: true
  }
  this.$("#startDate").datepicker(params)
  this.$("#endDate").datepicker(params)
})

Template.filter.helpers({
  isDomainActive() {
    return this._id === Session.get("domainId")
  },
  domains() {
    return Domains.find({_id: {$in: Meteor.user().domainIds}})
  },
  startDate() {
    return moment(Session.get("startTime")).format("MM/DD/YYYY")
  },
  endDate() {
    return moment(Session.get("endTime")).format("MM/DD/YYYY")
  }
})

Template.filter.events({
  "submit form[data-filter-form]": (event) => {
    e.preventDefault()
    const domainId = $(event.currentTarget).find("#domains").val()
    const startDate = $(event.currentTarget).find("#startDate").val()
    const endDate = $(event.currentTarget).find("#endDate").val()
    let startTime = +moment(startDate, "MM/DD/YYYY").startOf("day")
    let endTime = +moment(endDate, "MM/DD/YYYY").endOf("day")
    if (startTime > endTime) {
      let time = startTime
      startTime = endTime
      endTime = time
    }
    Session.set("domainId", domainId)
    Session.set("startTime", startTime)
    Session.set("endTime", endTime)
  }
})
