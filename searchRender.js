const renderFromUrl = () => {
  let url = window.location.href.slice(22).toUpperCase()
  if(types.indexOf(url) !== -1) {
    init(url)
  }
}

renderFromUrl()