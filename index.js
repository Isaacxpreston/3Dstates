      var THREE = require("./node_modules/three/build/three.js")
			var scene = new THREE.Scene();
			var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );

			var renderer = new THREE.WebGLRenderer();
			renderer.setSize( window.innerWidth, window.innerHeight );
			document.body.appendChild( renderer.domElement );

      // instantiate a loader
      var loader = new THREE.JSONLoader();

      // load a resource
      loader.load(
        // resource URL
        'models/texas.json',
        // Function when resource is loaded
        function ( geometry, materials ) {
          //var material = new THREE.MultiMaterial( materials );
          var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
          var object = new THREE.Mesh( geometry, material );
          scene.add( object );
        }
      );

			var geometry = new THREE.BoxGeometry( 1, 1, 1 );
			var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
			var cube = new THREE.Mesh( geometry, material );
			scene.add( cube );

			camera.position.z = 5;

			var render = function () {
				requestAnimationFrame( render );

				cube.rotation.x += 0.1;
				cube.rotation.y += 0.1;

				renderer.render(scene, camera);
			};

			render();