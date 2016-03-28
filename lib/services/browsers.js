BrowserService = {
  filter(visits) {
    return _
      .chain(visits)
      .map((value) => {
        return {name: value.ua.browser.name || "(not set)" }
      })
      .countBy("name")
      .map((value, key) => {
        return {name: key, total: value}
      })
      .sortBy("total")
      .value()
  }
}
