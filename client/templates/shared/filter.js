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
    // FIX: This is returning an exception
    // return Domains.find({_id: {$in: Meteor.user().domainIds}});
    return Domains.find({});
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
    event.preventDefault()
    const domainId = $(event.currentTarget).find("#domains").val()
    const startDate = $(event.currentTarget).find("#startDate").val()
    const endDate = $(event.currentTarget).find("#endDate").val()
    let startTime = +moment(startDate, "MM/DD/YYYY").startOf("day")
    let endTime = +moment(endDate, "MM/DD/YYYY").endOf("day")
    Filter.refresh(domainId, startTime, endTime)
  },
  'change #domains'(e, t){
    let domainId = e.target.value;
    Session.set('domainId', domainId);
  },
  'change #startDate'(e, t){
    let startDate = e.target.value;
    let startTime = +moment(startDate, "MM/DD/YYYY").startOf("day");
    Session.set('startTime', startTime);
  },
  'change #endDate'(e, t){
    let endDate = e.target.value;
    let endTime = +moment(endDate, "MM/DD/YYYY").endOf("day")
    Session.set('endTime', endTime);
  },
});
