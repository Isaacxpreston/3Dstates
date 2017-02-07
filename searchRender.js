document.getElementById('myForm').addEventListener( 'submit', prevent, false );
document.getElementById('myForm2').addEventListener( 'submit', prevent, false );

function prevent(e) {
  e.preventDefault();
}

const reRender = () => {
  let personality = document.getElementsByClassName("inputPersonality")[0].value.toUpperCase()
  if(types.indexOf(personality) !== -1) {
    history.pushState(null, null, personality);
    renderFromUrl()
  }
  document.getElementsByClassName("inputPersonality")[0].value = ""
}

const initRender = () => {
  let personality = document.getElementsByClassName("inputPersonality2")[0].value.toUpperCase()
  if(types.indexOf(personality) !== -1) {
    history.pushState(null, null, personality);
    renderFromUrl()
  }
  document.getElementsByClassName("inputPersonality2")[0].value = ""
}

const renderFromUrl = () => {
  let url = window.location.href.slice(22).toUpperCase()
  if(types.indexOf(url) !== -1) {
    init(url)
    document.getElementById("landingBg").className = "display-hidden-none"
    document.getElementById("landingContent").className = "display-hidden-none"
    document.getElementById("searchBarLanding").className = "display-hidden-none"
  }
}

renderFromUrl()