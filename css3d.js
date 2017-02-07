
			var camera, scene, renderer;

			init();
			animate();

			function init() {

				var container = document.getElementById( 'container' );

				camera = new THREE.PerspectiveCamera( 50, window.innerWidth / window.innerHeight, 1, 5000 );
				camera.position.set( 0, 1000, 0 );

				scene = new THREE.Scene();

				renderer = new THREE.CSS3DRenderer();
				renderer.setSize( 500, 500 );
				renderer.domElement.style.position = 'absolute';
				renderer.domElement.style.top = 0;
				container.appendChild( renderer.domElement );

        var element = document.createElement( 'div' );
        element.style.width = '50px';
        element.style.height = '50px';
        element.style.background = new THREE.Color( Math.random() * 0xffffff ).getStyle();
        var object = new THREE.CSS3DObject( element );
        object.rotation.x = 1;
        object.scale.x = 10
        object.scale.y = 10
        scene.add( object );

				controls = new THREE.TrackballControls( camera );
				controls.rotateSpeed = 4;

				window.addEventListener( 'resize', onWindowResize, false );
			}

			function onWindowResize() {
				camera.aspect = window.innerWidth / window.innerHeight;
				camera.updateProjectionMatrix();
				renderer.setSize( window.innerWidth, window.innerHeight );
			}

			function animate() {
				requestAnimationFrame( animate );
				renderer.render( scene, camera );
			}