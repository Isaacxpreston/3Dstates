document.getElementById('myForm').addEventListener( 'submit', prevent, false );

function prevent(e) {
  e.preventDefault();
}

const reRender = (e) => {
  let personality = document.getElementsByClassName("inputPersonality")[0].value.toUpperCase()
  if(types.indexOf(personality) !== -1) {
    history.pushState(null, null, personality);
    renderFromUrl()
  }
  document.getElementsByClassName("inputPersonality")[0].value = ""
}

const renderFromUrl = () => {
  let url = window.location.href.slice(22).toUpperCase()
  if(types.indexOf(url) !== -1) {
    init(url)
  }
}

renderFromUrl()