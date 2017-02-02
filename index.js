var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );

//LIGHT
var ambient = new THREE.AmbientLight( 0x444444 );
scene.add( ambient );
var directionalLight = new THREE.DirectionalLight( 0xffeedd );
directionalLight.position.set( 0.1, 0.4, 0.1 ).normalize();
scene.add( directionalLight );

//RENDERER
var renderer = new THREE.WebGLRenderer({alpha: true});
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

//SVG LOADER
function createMesh(geom) {
    var meshMaterial = new THREE.MeshStandardMaterial({color: 0x00FF00});
    var mesh = new THREE.Mesh(geom, meshMaterial);
    return mesh;
}

var options = {
  amount: 1,
  bevelThickness: 2,
};

const tex2Path = "M282.8,425.6l37,3.6l29.3,1.9l7.4-97.7l54.4,2.4l-1.7,23.3l-1,18l0.2,2l4.4,4.1l2,1.1h1.8 l0.5-1.2l0.7,0.9l2.4,0.2l1.1-0.6v-0.2l1,0.5l-0.4,3.7l4.5,0.7l2.4,0.9l4.2,0.7l2.6,1.8l2.8-1.9l2.7,0.6l2.2,3.1l0.8,0.1v2.1 l3.3,1.1l2.5-2.1l1.5,0.5l2.1,0.1l0.6,2.1l5.2,2l2.3-0.5l1.9-4h0.1l1.1,1.9l4.6,0.9l3.4,1.3l3.2,1l2.4-1.2l0.7-2.3h3.6l2.1,1l3-2 h0.4l0.5,1.4h4.7l1.9-1.8l1.3,0.4l1.7,2.1l3.3,1.9l3.4,1l2.5,1.4l2.7,2l3.1-1.2l2.1,0.8l0.7,20l0.7,9.5l0.6,4.1l2.6,4.4l0.9,4.5 l4.2,5.9l0.3,3.1l0.6,0.8l-0.7,7.7l-2.9,4.8l1.3,2.6l-0.5,2.4l-0.8,7.2l-1.3,3l0.3,4.2l-5.6,1.6l-9.9,4.5l-1,1.9l-2.6,1.9l-2.1,1.5 l-1.3,0.8l-5.7,5.3l-2.7,2.1l-5.3,3.2l-5.7,2.4l-6.3,3.4l-1.8,1.5l-5.8,3.6l-3.4,0.6l-3.9,5.5l-4,0.3l-1,1.9l2.3,1.9l-1.5,5.5 l-1.3,4.5l-1.1,3.9l-0.8,4.5l0.8,2.4l1.8,7l1,6.1l1.8,2.7l-1,1.5l-3.1,1.9l-5.7-3.9l-5.5-1.1l-1.3,0.5l-3.2-0.6l-4.2-3.1l-5.2-1.1 l-7.6-3.4l-2.1-3.9l-1.3-6.5l-3.2-1.9l-0.6-2.3l0.6-0.6l0.3-3.4l-1.3-0.6l-0.6-1l1.3-4.4l-1.6-2.3l-3.2-1.3l-3.4-4.4l-3.6-6.6 l-4.2-2.6l0.2-1.9l-5.3-12.3l-0.8-4.2l-1.8-1.9l-0.2-1.5l-6-5.3l-2.6-3.1v-1.1l-2.6-2.1l-6.8-1.1l-7.4-0.6l-3.1-2.3l-4.5,1.8 L352,483l-2.3,3.2l-1,3.7l-4.4,6.1l-2.4,2.4l-2.6-1l-1.8-1.1l-1.9-0.6l-3.9-2.3v-0.6l-1.8-1.9l-5.2-2.1l-7.4-7.8l-2.3-4.7v-8.1 l-3.2-6.5l-0.5-2.7l-1.6-1l-1.1-2.1l-5-2.1l-1.3-1.6l-7.1-7.9l-1.3-3.2l-4.7-2.3l-1.5-4.4l-2.6-2.9l-1.7-0.5L282.8,425.6z M457.2,567.3l-0.6-7.1l-2.7-7.2l-0.6-7l1.5-8.2l3.3-6.9l3.5-5.4l3.2-3.6l0.6,0.2l-4.8,6.6l-4.4,6.5l-2,6.6l-0.3,5.2l0.9,6.1 l2.6,7.2l0.5,5.2l0.2,1.5L457.2,567.3z"
const ok2Path = "M411.9,334.9l-1.8,24.3l-0.9,18l0.2,1.6l4,3.6l1.7,0.9h0.9l0.9-2.1l1.5,1.9l1.6,0.1l0.3-0.2 l0.2-1.1l2.8,1.4l-0.4,3.5l3.8,0.5l2.5,1l4.2,0.6l2.3,1.6l2.5-1.7l3.5,0.7l2.2,3.1l1.2,0.1v2.3l2.1,0.7l2.5-2.1l1.8,0.6l2.7,0.1 l0.7,2.3l4.4,1.8l1.7-0.3l1.9-4.2h1.3l1.1,2.1l4.2,0.8l3.4,1.3l3,0.8l1.6-0.7l0.7-2.7h4.5l1.9,0.9l2.7-1.9h1.4l0.6,1.4h3.6l2-1.8 l2.3,0.6l1.7,2.2l3,1.7l3.4,0.9l1.9,1.2l-0.3-37.6l-1.4-10.9l-0.1-8.6l-1.5-6.6l-0.6-6.8l0.1-4.3l-12.6,0.3l-46.3-0.5l-44.7-2.1 l-41.5-1.8l-0.4,10.7L411.9,334.9z"
const KSPath = "M485.9,259.5l-43.8-0.6l-40.6-1.2l-21.7-0.9l-4.3,64.8l24.3,1l44.7,2.1l46.3,0.6l12.6-0.3 l0.7-35l-1.2-11.1l-2.5-2l-2.4-3l-2.3-3.6l0.6-3l1.7-1.4v-2.1l-0.8-0.7l-2.6-0.2l-3.5-3.4L485.9,259.5z"
const NEPath = "M470.3,204.3l-1-2.3l-0.5-1.6l-2.9-1.6l-4.8-1.5l-2.2-1.2l-2.6,0.1l-3.7,0.4l-4.2,1.2 l-6-4.1l-2.2-2l-10.7,0.6l-41.5-2.4l-35.6-2.2l-4.3,43.7l33.1,3.3l-1.4,21.1l21.7,1l40.6,1.2l43.8,0.6h4.5l-2.2-3l-2.6-3.9l0.1-2.3 l-1.4-2.7l-1.9-5.2l-0.4-6.7l-1.4-4.1l-0.5-5l-2.3-3.7l-1-4.7l-2.8-7.9l-1-5.3L470.3,204.3z"
const SDPath = "M471,181.1l-0.9,3.2l0.4,3l2.6,2l-1.2,5.4l-1.8,4.1l1.5,3.3l0.7,1.1l-1.3,0.1l-0.7-1.6 l-0.6-2l-3.3-1.8l-4.8-1.5l-2.5-1.3l-2.9,0.1l-3.9,0.4l-3.8,1.2l-5.3-3.8l-2.7-2.4l-10.9,0.8l-41.5-2.4l-35.6-2.2L354,162l2.8-34 l0.4-5l56.9,3.9l56.9,1.7v2.7l-1.3,1.5l-2,1.5l-0.1,2.2l1.1,2.2l4.1,3.4l0.5,2.7v35.9L471,181.1z"
const NDPath = "M471,126.4l-0.4-6.2l-1.8-7.3L467,99.3l-0.5-9.7l-1.9-3.2l-1.6-5.3V70.7l0.6-3.8l-1.8-5.5 l-28.6-0.6l-18.6-0.6l-26.5-1.3l-25.2-2.2L362,71.1l-4.7,50.9l56.8,3.9l56.9,1.7V126.4z"

var TX = createMesh(new THREE.ExtrudeGeometry(transformSVGPathExposed(tex2Path), options))
var OK = createMesh(new THREE.ExtrudeGeometry(transformSVGPathExposed(ok2Path), options))
var KS = createMesh(new THREE.ExtrudeGeometry(transformSVGPathExposed(KSPath), options))
var NE = createMesh(new THREE.ExtrudeGeometry(transformSVGPathExposed(NEPath), options))
var SD = createMesh(new THREE.ExtrudeGeometry(transformSVGPathExposed(SDPath), options))
var ND = createMesh(new THREE.ExtrudeGeometry(transformSVGPathExposed(NDPath), options))

scene.add(TX)
scene.add(OK)
scene.add(KS)
scene.add(NE)
scene.add(SD)
scene.add(ND)

//CAMERA
scene.scale.set(0.1, 0.1, 0.1)
scene.rotation.x = 1
camera.position.set(0,100,0); camera.lookAt(scene.position);

//ANIMATE
var render = function () {
  requestAnimationFrame( render );
  //TX.scale.set(TX.scale.x, TX.scale.y, TX.scale.z + 0.1)
  renderer.render(scene, camera);
};

render();