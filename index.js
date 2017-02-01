// const texas = require("./texas.json")
// const THREE = require('three');
//import * as THREE from 'three'
//import * as OBJLoader from 'three-obj-loader'
// const OBJLoader = require('three-obj-loader');
// OBJLoader(THREE);
  //const texasObj = require("./texas.obj")
// console.log("here", texas, texasObj)
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );

var renderer = new THREE.WebGLRenderer({alpha: true});
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

var loader = new THREE.OBJLoader();
  loader.load( 'texas.obj', function ( object ) {
  scene.add( object );
});

camera.position.z = 10;
camera.position.y = 5;

var render = function () {
  requestAnimationFrame( render );

  // cube.rotation.x += 0.1;
  // cube.rotation.y += 0.1;

  renderer.render(scene, camera);
};

render();