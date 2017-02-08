const toggleZoom = (props) => {

  if(zooming === true) {
    new TWEEN.Tween(scene.position).to({
      x: -window.innerWidth/3 - mouse.x * 1000,
      y: 0,
      z: -window.innerHeight/2.25 + mouse.y * 250
    }, 100 )
    .start();
    setTimeout(() => {
      //reset classes
      zooming = false
      document.body.className = "normalBg"
      document.getElementById("display").className = "display-hidden"
      document.getElementById("assertiveBarLoader").className = "display-hidden-none"
      document.getElementById("turbulentBarLoader").className = "display-hidden-none"
    }, 100)
  } else {

    //display
    document.body.className = "zoomBg"
    document.getElementById("display").className = "display"

    //stats
    document.getElementById("name").innerHTML = props.name
    document.getElementById("assertive").innerHTML = props.assertive
    document.getElementById("turbulent").innerHTML = props.turbulent 
    document.getElementById("total").innerHTML = eval(props.assertive + props.turbulent).toFixed(2)
    //loader bars
    document.getElementById("assertiveBarLoader").className = "assertive-bar"
    document.getElementById("turbulentBarLoader").className = "turbulent-bar"
    document.getElementById("assertiveBar").style.width = props.assertive * 7.5 + "%" // (100/getMax(props.personality))
    document.getElementById("turbulentBar").style.width = props.turbulent * 7.5 + "%"

    new TWEEN.Tween(scene.position).to({
      x: -window.innerWidth/3 - mouse.x * 1500, 
      y: 150,
      z: -window.innerHeight/2.25 + mouse.y * 500
    }, 250 )
    .start();
    zooming = true
    let posx = ((100 * (mouse.originalx/window.innerWidth)).toFixed())
    let posy = ((100 * (mouse.originaly/window.innerHeight)).toFixed())

    

    if(posy > 49) {
      document.getElementById("display").style.top = mouse.originaly - 200 + "px"
    } else {
      document.getElementById("display").style.top = mouse.originaly + "px"
    }
    if(posx > 49) {
      if(posx > 64) {
        document.getElementById("display").style.left = mouse.originalx + "px"
      } else {
        document.getElementById("display").style.left = mouse.originalx + 100 + "px"
      }
    } else {
      document.getElementById("display").style.left = mouse.originalx - 250 + "px"
    }
    
  }
}
