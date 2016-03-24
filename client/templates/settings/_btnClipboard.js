Template._btnClipboard.onRendered(() => {
	const id = this.data.id
  const clipboard = new Clipboard(`#${id}`)
  clipboard.on('success', (e) => {
  	$(`#${id}`).tooltip('show')
	})
})

Template._btnClipboard.events({
  "mouseleave .btn-clipboard": (event) => {
    $(event.currentTarget).tooltip('hide')
  }
})
