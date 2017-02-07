const reRender = (e) => {
  history.pushState(null, null, document.getElementsByClassName("inputPersonality")[0].value.toUpperCase());
  document.getElementsByClassName("inputPersonality")[0].value = ""
  renderFromUrl()
}

const renderFromUrl = () => {
  let url = window.location.href.slice(22).toUpperCase()
  if(types.indexOf(url) !== -1) {
    init(url)
  }
}

renderFromUrl()