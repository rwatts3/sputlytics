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

          spa("init", {domain: "${Meteor.absoluteUrl()}", clientKey: "${this._id}"});
          spa("pageview");
      </script>
    `
  }
})

Template.settings.events({
  "click [data-domain-id]": (event) => {
    event.preventDefault()
    if (confirm("We'll clear all data from this domain, are you sure?")) {
      const domainId = $(event.currentTarget).data("domain-id")
      Meteor.call("deleteDomain", domainId, (err) => {
        if (err) {
          alert(err.reason)
        } else {
          alert("Domain successfully deleted")
        }
      })
    }
  },
  "submit [data-add-domain]": (event) => {
    event.preventDefault()
    const domain = $(event.target).find("#domain")
    Meteor.call("addDomain", domain.val(), (err) => {
      if (err) {
        alert(err.reason)
      } else {
        alert("Domain successfully registered!")
        domain.val("")
      }
    })
  }
})
