const render = () => {
  TWEEN.update();

  document.getElementById("mouseFollow").style.top = mouse.originaly - 45 + "px"
  document.getElementById("mouseFollow").style.left = mouse.originalx - 12 + "px"

  if(!zooming) {
    camera.lookAt(new THREE.Vector3(0, 0, 0));
    camera.position.set(0, 400, 0)
    if(!disabled) {
      camera.rotation.y = mouse.x * 0.85
      scene.position.x = -window.innerWidth/3 - mouse.x * 1000
      scene.position.z = -window.innerHeight/2.25 + mouse.y * 250
    }
  }

  // find intersections
  raycaster.setFromCamera( mouse, camera );
  let intersects = raycaster.intersectObjects( scene.children );

  if ( intersects.length > 0  && !disabled) {

    //update mouseFollow
    let props = intersects[0].object.properties
    let objectColor = intersects[0].object.material.color
    let mouseFollowHex = {
      r: ((1 - objectColor.r) * 255).toFixed(),
      g: ((1 - objectColor.g) * 255).toFixed(),
      b: ((1 - objectColor.b) * 255).toFixed()
    }
    document.getElementById("mouseFollow").innerHTML = props.name 
    document.getElementById("mouseFollow").style.color = "rgb(" + mouseFollowHex.r + "," + mouseFollowHex.g + "," + mouseFollowHex.b + ")"
    
    //if state is clicked, display its properties
    if (mouseClicked) {
      if(!zooming) {
        intersects[0].object.material.wireframe = false
        // intersects[0].object.material.opacity += 0.25
      }
      toggleZoom(props)

      mouseClicked = false
    }
    
    if ( INTERSECTED != intersects[ 0 ].object ) {
      if ( INTERSECTED ) {
        INTERSECTED.material.emissive.setHex( INTERSECTED.currentHex )
        new TWEEN.Tween(INTERSECTED.scale).to({
          z: INTERSECTED.hover.original
        }, 150 )
        .start();
      };
      INTERSECTED = intersects[ 0 ].object;
      INTERSECTED.currentHex = INTERSECTED.material.emissive.getHex();
      INTERSECTED.material.emissive.set( 0x020a7a );
      new TWEEN.Tween(INTERSECTED.scale).to({
        z: INTERSECTED.hover.expanded
      }, 150 )
      .start();
    }
  } else {
    if ( INTERSECTED ) {
      INTERSECTED.material.emissive.setHex( INTERSECTED.currentHex )
      new TWEEN.Tween(INTERSECTED.scale).to({
        z: INTERSECTED.hover.original
      }, 150 )
      .start();
    };
    document.getElementById("mouseFollow").innerHTML = "" 
    INTERSECTED = null;
  }

  renderer.render( scene, camera );
}