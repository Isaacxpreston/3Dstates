let container;
let camera, scene, raycaster, renderer;
let mouse = new THREE.Vector2(), INTERSECTED;
let zooming = false;
let disabled = false
let mouseClicked = false;
let landingTween1, landingTween2;

const onDocumentMouseDown = (e) => {
  mouseClicked = true
  if(zooming) {
    toggleZoom()
  }
}

const onDocumentMouseUp = (e) => {
  mouseClicked = false
}

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

  const options = {
    amount: 1,
    bevelThickness: 2,
  };

  const renderStates = (personality) => {
    if(personality) {
      //render personality meshes
      statePaths.forEach((state) => {
        let path = new THREE.ExtrudeGeometry(transformSVGPathExposed(state.path), options)
        createMesh(path, state.name, personality, scene)
      })
      setNavbar(personality)
    } else {
      //render landing meshes
      statePaths.forEach((state) => {
        let path = new THREE.ExtrudeGeometry(transformSVGPathExposed(state.path), options)
        createDefaultMesh(path, state.name, scene)
      })
    }
  }

  if(personality) {
    //personality
    renderStates(personality)
    disabled = false
  } else {
    //landing
    renderStates()
    disabled = true
    landingTween1 = new TWEEN.Tween( scene.position ).to( { y: 300 }, 60000 );
    landingTween2 = new TWEEN.Tween( scene.position ).to( { y: 0 }, 60000 );
    landingTween1.onComplete( function () {
        landingTween2.start();
    } );
    landingTween2.onComplete( function () {
        landingTween1.start();
    } );
    landingTween1.start();
  }

  raycaster = new THREE.Raycaster();
  renderer = new THREE.WebGLRenderer({alpha: true});
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

function animate() {
  requestAnimationFrame( animate );
  render();
}