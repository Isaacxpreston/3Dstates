//create normal
const createMesh = (path, name, personality, scene) => {
  console.log("create called")
    let min = getMin(personality)
    let max = getMax(personality) - min
    let percent = (((percentOfState(name, personality) - min) / max) * 100).toFixed()
    let meshMaterial = new THREE.MeshLambertMaterial({
      opacity: percent/100,
      color: "#26A69A",
      wireframe: true
      // color: "rgb("+ percent +"%," + percent + "%, " + percent + "%)"
    })
    let mesh = new THREE.Mesh(path, meshMaterial);
    mesh.scale.z = (percent / 3) + 0.001 	
    mesh.properties = {
      name,
      personality,
      assertive: states[name][personality]['A'],
      turbulent: states[name][personality]['T']
    }
    mesh.hover = {
      original: (percent / 3) + 0.001,
      expanded: (percent / 3) + 25.001
    }
    scene.add(mesh)
}

//create landing
const createDefaultMesh = (path, name, scene) => {
  console.log("called")
    let meshMaterial = new THREE.MeshLambertMaterial({
      // color: "rgb(100%, 100%, 100%)",
      transparent: true,
      opacity: 0.8,
      wireframe: true,
      color: "#26A69A"
    })
    let mesh = new THREE.Mesh(path, meshMaterial);
    mesh.scale.z = 10
    mesh.properties = {
      name,
      personality: "",
      assertive: "",
      turbulent: ""
    }
    mesh.hover = {
      original: 10,
      expanded: 25
    }
    scene.add(mesh)
}