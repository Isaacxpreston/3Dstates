let container;
let camera, scene, raycaster, renderer;

let mouse = new THREE.Vector2(), INTERSECTED;
let radius = 100, theta = 0;
let zooming = false;
let disabled = false

//mouse events
let mouseClicked = false;

const onDocumentMouseDown = (e) => {
  mouseClicked = true
  if(zooming) {
    toggleZoom()
  }
}

const onDocumentMouseUp = (e) => {
  mouseClicked = false
}

///////////////////

init();
animate();

function init(personality) {
  container = document.createElement( 'div' );
  container.className = "container"
  function removeElementsByClass(className){
      let elements = document.getElementsByClassName(className);
      while(elements.length > 0){
          elements[0].parentNode.removeChild(elements[0]);
      }
  }

  removeElementsByClass("container")
  document.body.appendChild( container );

  camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 1, 10000 );
  scene = new THREE.Scene();
  scene.rotation.x = 1.5
  scene.position.set(-window.innerWidth/3, 0, -window.innerHeight/2.25)

  let light = new THREE.AmbientLight(0xffffff, 1)
  scene.add( light );

  //SVG LOADER////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  /////ADDING MESHES
  const createMesh = (path, name, personality) => {
      let min = getMin(personality)
      let max = getMax(personality) - min
      let percent = (((percentOfState(name, personality) - min) / max) * 100).toFixed()
      let meshMaterial = new THREE.MeshLambertMaterial( { color: "rgb("+ percent +"%," + percent + "%, " + percent + "%)" } )
      let mesh = new THREE.Mesh(path, meshMaterial);
      mesh.scale.z = (percent / 5) + 0.001 	
      mesh.properties = {
        name,
        personality,
        assertive: states[name][personality]['A'],
        turbulent: states[name][personality]['T']
      }
      mesh.hover = {
        original: (percent / 5) + 0.001,
        expanded: (percent / 5) + 25.001
      }
      scene.add(mesh)
  }

    const createDefaultMesh = (path, name) => {
      let meshMaterial = new THREE.MeshLambertMaterial( { color: "rgb(100%, 100%, 100%)", transparent: true, opacity: 0.8 } )
      let mesh = new THREE.Mesh(path, meshMaterial);
      mesh.scale.z = 10
      mesh.properties = {
        name: "",
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

  /////////////////

  const options = {
    amount: 1,
    bevelThickness: 2,
  };

  const renderStates = (personality) => {
    if(personality) {
      statePaths.forEach((state) => {
        let path = new THREE.ExtrudeGeometry(transformSVGPathExposed(state.path), options)
        createMesh(path, state.name, personality)
      })
      document.getElementById("currentSearch").innerHTML = personality
      document.getElementById("currentPercentages").innerHTML = eval(percentages[personality]["A"] + percentages[personality]["T"]).toFixed(1)
    } else {
      statePaths.forEach((state) => {
        let path = new THREE.ExtrudeGeometry(transformSVGPathExposed(state.path), options)
        createDefaultMesh(path, state.name)
      })
    }
  }

  if(personality) {
    renderStates(personality)
    disabled = false
  } else {
    renderStates()
    disabled = true
    let tween1 = new TWEEN.Tween( scene.position ).to( { y: 300 }, 60000 );
    let tween2 = new TWEEN.Tween( scene.position ).to( { y: 0 }, 60000 );
    tween1.onComplete( function () {

        tween2.start();
    } );
    tween2.onComplete( function () {

        tween1.start();
    } );
    tween1.start();
  }

  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  raycaster = new THREE.Raycaster();

  renderer = new THREE.WebGLRenderer({alpha: true});
  //renderer.setClearColor( 0xf0f0f0 );
  renderer.setPixelRatio( window.devicePixelRatio );
  renderer.setSize( window.innerWidth, window.innerHeight );
  renderer.sortObjects = false;
  container.appendChild(renderer.domElement);

  document.addEventListener( 'mousemove', onDocumentMouseMove, false );
  document.addEventListener( 'mousedown', onDocumentMouseDown, false );
  document.addEventListener( 'mouseup', onDocumentMouseUp, false );

  window.addEventListener( 'resize', onWindowResize, false );
}

function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize( window.innerWidth, window.innerHeight );
}

function onDocumentMouseMove( event ) {
  event.preventDefault();
  mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
  mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;
  mouse.originalx = event.clientX
  mouse.originaly = event.clientY
}


////TOGGLE ZOOM////////////////////
const toggleZoom = (props) => {

  if(zooming === true) {
    new TWEEN.Tween(scene.position).to({
      x: -window.innerWidth/3 - mouse.x * 1000,
      y: 0,
      z: -window.innerHeight/2.25 + mouse.y * 250
    }, 100 )
    .start();
    setTimeout(() => {
      zooming = false
      document.getElementById("display").className = "display-hidden"
      document.getElementById("assertiveBarLoader").className = "display-hidden-none"
      document.getElementById("turbulentBarLoader").className = "display-hidden-none"
    }, 100)
  } else {
    //stats
    // document.getElementById("personality").innerHTML = props.personality
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
    document.getElementById("display").className = "display"
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

///////////////////

function animate() {
  requestAnimationFrame( animate );
  render();
}

function render() {
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
    if (mouseClicked === true) {
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