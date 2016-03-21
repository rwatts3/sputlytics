Template._btnClipboard.onRendered(() => {
  const clipboard = new Clipboard('.btn-clipboard')

  clipboard.on('success', (e) => {
    $('[data-toggle="tooltip"]').tooltip('show')
  })
})

Template._btnClipboard.events({
  "mouseleave .btn-clipboard": (event) => {
    $('[data-toggle="tooltip"]').tooltip('hide')
  }
})
