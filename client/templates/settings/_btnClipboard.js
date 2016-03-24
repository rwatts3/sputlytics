Template._btnClipboard.onRendered(function() {
	const selector = `button[data-id='${this.data.id}']`
  const clipboard = new Clipboard(selector)
  clipboard.on('success', (e) => {
  	$(selector).tooltip('show')
	})
})

Template._btnClipboard.events({
  "mouseleave .btn-clipboard": (event) => {
    $(event.currentTarget).tooltip('hide')
  }
})
