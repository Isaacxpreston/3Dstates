const THREE = require('three');

//NOTES
//extrudepath combined with a three shape object can draw 3d from lines
//this method doesn't provde correct syntax for shape parameters (?)

//try again with JSONloader, because that was closer.
//work with scale, fix webpack bugs.

var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );

var ambient = new THREE.AmbientLight( 0x444444 );
scene.add( ambient );
var directionalLight = new THREE.DirectionalLight( 0xffeedd );
directionalLight.position.set( 0, 0, 1 ).normalize();
scene.add( directionalLight );

var renderer = new THREE.WebGLRenderer({alpha: false});
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

// our utility functions
var createGeometry = require('three-simplicial-complex')(THREE);
var svgMesh3d = require('svg-mesh-3d');
// our SVG <path> data
var svgPath = 'M113.7,69.76l-.4-6.2-1.8-7.3-1.8-13.61-.5-9.7-1.9-3.18-1.6-5.32V14l.6-3.85-1.8-5.54L75.9,4.06l-18.6-.6L30.8,2.16,5.6,0,4.7,14.42,0,65.36l56.8,3.9L113.7,71Z';
// triangulate to generic mesh data
var meshData = svgMesh3d(svgPath);
// convert the mesh data to THREE.Geometry
var geometry = createGeometry(meshData);


var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
var mesh = new THREE.Mesh(geometry, material);

mesh.scale.set(50, 50, 1)
mesh.scale.z += 100
// add to scene
scene.add(mesh);

camera.position.set(0,100,0); camera.lookAt(scene.position);

var render = function () {
  requestAnimationFrame( render );
				mesh.rotation.x += 0.1;
				mesh.rotation.y += 0.1;
  renderer.render(scene, camera);
};

render();