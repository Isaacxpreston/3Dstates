var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );

//LIGHT
var ambient = new THREE.AmbientLight( 0x444444 );
scene.add( ambient );
var directionalLight = new THREE.DirectionalLight( 0xffeedd );
directionalLight.position.set( 0, 0, 1 ).normalize();
scene.add( directionalLight );

//RENDERER
var renderer = new THREE.WebGLRenderer({alpha: true});
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

// //OBJ LOADER
// var loader = new THREE.OBJLoader();
// loader.load( 'ND.obj', function ( object ) {
//   object.scale.set(10, 10, 10)
//   scene.add( object );
// });


// //SVG LOADER
function createMesh(geom) {
    geom.applyMatrix(new THREE.Matrix4().makeTranslation(-390, -74, 0));
    // assign two materials
    var meshMaterial = new THREE.MeshStandardMaterial({color: 0x333333});
    var mesh = new THREE.Mesh(geom, meshMaterial);
    mesh.scale.x = 0.1;
    mesh.scale.y = 0.1;
    mesh.rotation.z = Math.PI;
    mesh.rotation.x = -1.1;
    return mesh;
}

function drawShape() {
  var svgString = "M0,92l37,4,29,2L74,0l54,2-2,23V46l4,4h10v4h11l3,2,3-2h3l2,3h1v2h3l3-2h4v2l5,2h2l2-4h0v2h14V63h6l3-2h6l2-2h1l2,2,3,2h6l3,2h5v34l3,4v5l4,6v3h1v8l-3,5v19l-6,2-10,5v2l-3,2-2,2h-1l-6,5-3,2-5,3-6,2-6,3-2,2-6,4h-3l-4,6h-4v2l2,2v21l2,7v6l2,3v2l-3,2-6-4H154l-4-3h-5l-8-3-2-4v-6l-3-2v-2h1v-3h-2v-4l-2-2h-3l-3-4-4-7-4-3v-2l-5-12v-4l-2-2h0l-6-5-3-3h0l-3-2H80l-3-2-4,2-4,2-2,3v4l-4,6-2,2H53l-4-2h0l-2-2-5-2-7-8-2-5v-8l-3-6v-3H27v-2l-5-2v-2l-7-8v-3l-5-2v-4L2,98H1ZM174,234v-7l-3-7v-7l2-8,3-7,4-5,3-4h1l-5,7-4,7-2,7v11l3,7v7Z" 
  var shape = transformSVGPathExposed(svgString);
  return shape;
}
var options = {
  amount: 10,
  bevelThickness: 2,
  bevelSize: 1,
  bevelSegments: 3,
  bevelEnabled: true,
  curveSegments: 12,
  steps: 1
};

console.log(drawShape())

var shape = createMesh(new THREE.ExtrudeGeometry(drawShape(), options));
scene.add(shape)

//CAMERA
camera.position.set(0,100,0); camera.lookAt(scene.position);

//ANIMATE
var render = function () {
  requestAnimationFrame( render );
  shape.rotation.y += 0.01
  shape.rotation.x += 0.01
  renderer.render(scene, camera);
};

render();