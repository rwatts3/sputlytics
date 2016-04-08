import { Domains } from '../../../imports/api/domains.js'

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
    return Domains.find({})
  },
  startDate() {
    return moment(Session.get("startTime")).format("MM/DD/YYYY")
  },
  endDate() {
    return moment(Session.get("endTime")).format("MM/DD/YYYY")
  },
  lastSyncTime() {
    const report = Reports.findOne()
    if (report && report.createdAt) {
      return moment(report.createdAt).format("MMMM Do YYYY, HH:mm")
    }
    return "never"
  }
})

Template.filter.events({
  "submit form[data-filter-form]": (event) => {
    event.preventDefault()
    const domainId = $(event.currentTarget).find("#domains").val()
    const startDate = $(event.currentTarget).find("#startDate").val()
    const endDate = $(event.currentTarget).find("#endDate").val()
    let startTime = +moment(startDate, "MM/DD/YYYY").startOf("day")
    let endTime = +moment(endDate, "MM/DD/YYYY").endOf("day")
    Filter.refresh(domainId, startTime, endTime)
  },
  "change #domains": (event) => {
    Session.set("domainId", event.target.value)
  },
  "change #startDate": (event) => {
    let startDate = event.target.value
    let startTime = +moment(startDate, "MM/DD/YYYY").startOf("day")
    Session.set("startTime", startTime)
  },
  "change #endDate": (event) => {
    let endDate = event.target.value
    let endTime = +moment(endDate, "MM/DD/YYYY").endOf("day")
    Session.set("endTime", endTime)
  }
})
