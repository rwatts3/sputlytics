Template._btnClipboard.onRendered(function() {
	const id = this.data.id
  const clipboard = new Clipboard(`#${id}`)

  clipboard.on('success', (e) => {
  	this.$(`#${id}`).tooltip('show')
	})
})

Template._btnClipboard.events({
  "mouseleave .btn-clipboard": (event, templateInstance) => {
    this.$(`#${templateInstance.data.id}`).tooltip('hide')
  }
})
