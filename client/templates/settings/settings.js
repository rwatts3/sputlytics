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
    console.log($(event.currentTarget).data("domain-id"))
  }
})
