const resetStates = (personality) => {
  let min = getMin(personality)
  let max = getMax(personality) - min

  scene.children.forEach((mesh) => {
    if(mesh.type === "Mesh") {
      let name = mesh.properties.name
      let percent = (((percentOfState(name, personality) - min) / max))
      let scaleTween = new TWEEN.Tween(mesh.scale).to({
        z: ((percent*100).toFixed() / 3) + 0.001 	
      }, 500 )
      // let colorTween = new TWEEN.Tween(mesh.material.color).to({
      //   r: percent,
      //   g: percent,
      //   b: percent,
      // }
      // , 2000 )
      let opacityTween = new TWEEN.Tween(mesh.material).to({
        opacity: percent
      }, 2000)
      scaleTween.start()
      // colorTween.start()
      opacityTween.start()
      mesh.properties = {
        name,
        personality,
        assertive: states[name][personality]['A'],
        turbulent: states[name][personality]['T']
      }
      mesh.hover = {
        original: ((percent*100).toFixed() / 3) + 0.001,
        expanded: ((percent*100).toFixed() / 3) + 25.001
      }
    }
  })
  setNavbar(personality)
}