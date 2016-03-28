Template.settings.onCreated(() => {
  Meteor.subscribe("currentUser")
  Meteor.subscribe("domains")
})

Template.settings.helpers({
  domains() {
    return Domains.find({})
  },
  trackingCode() {
    return `
      <script>
          (function(s,p,u,t,n,i,k){s['Sputlytics']=n;s[n]=s[n]||function(){(
            s[n].q=s[n].q||[]).push(arguments)},i=p.createElement(u);
            k=p.getElementsByTagName(u)[0];i.async=1;i.src=t;k.parentNode.insertBefore(i,k)
          })(window,document,"script","//cdn.sputlytics.com/agent.js","spa");

          spa("init", {domain: "${Meteor.absoluteUrl().replace(/\/$/, "")}", clientKey: "${this._id}"});
          spa("pageview");
      </script>
    `
  }
})

Template.settings.events({
  "click [data-delete-domain]": (event) => {
    event.preventDefault()
    $(event.currentTarget).attr("disabled", "disabled")
    if (confirm("We'll clear all data from this domain, are you sure?")) {
      const domainId = $(event.currentTarget).data("delete-domain")
      Meteor.call("deleteDomain", domainId, (err) => {
        $(event.currentTarget).removeAttr("disabled")
        if (err) {
          alert(err.reason)
        } else {
          alert("Domain successfully deleted")
        }
      })
    } else {
      $(event.currentTarget).removeAttr("disabled")
    }
  },
  "click [data-check-domain]": (event) => {
    event.preventDefault()
    $(event.currentTarget).attr("disabled", "disabled")
    const domainId = $(event.currentTarget).data("check-domain")
    Meteor.call("checkDomain", domainId, (err) => {
      $(event.currentTarget).removeAttr("disabled")
      if (err) {
        alert(err.reason)
      } else {
        alert("Tracking code working!")
      }
    })
  },
  "submit [data-add-domain]": (event) => {
    event.preventDefault()
    const url = $(event.target).find("#url")
    Meteor.call("addDomain", url.val(), (err) => {
      if (err) {
        alert(err.reason)
      } else {
        alert("Domain successfully registered!")
        url.val("")
      }
    })
  }
})
