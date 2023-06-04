<script>

import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'; //import OrbitControls to control the camera with the mouse
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'; //import GLTFLoader to load the gltf model
		
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

//OrbitControls to control the camera with the mouse
const controls = new OrbitControls(camera, renderer.domElement);

//add ambient light
const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(ambientLight);

//add directional light
const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
directionalLight.position.x = 1;
directionalLight.position.z = 1;
scene.add(directionalLight);

//add directionalLight helper
const directionalLightHelper = new THREE.DirectionalLightHelper(
directionalLight, 2);


//load GTLF model

let donut;
const gltfLoader = new GLTFLoader();// liever van boven defineren en dan pas aanroepen
      
gltfLoader.load('models/donut1.glb', (gltf) => {
    donut= gltf.scene;
    console.log(gltf);
    scene.add(gltf.scene);

});

camera.position.z = 1; //move camera back so we can see the cube

function animate() {
	
    requestAnimationFrame( animate );        
	renderer.render( scene, camera );

};
animate();

</script>