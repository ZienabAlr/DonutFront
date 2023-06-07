import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
//import GLTFLoader 
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const controls = new OrbitControls(camera, renderer.domElement);
//make the background transparent
renderer.setClearColor(0x000000, 0);

//add light
const light = new THREE.AmbientLight(0xffffff, 1);
scene.add(light);

//add gltf model
let donut;
const gltfLoader = new GLTFLoader();
      
gltfLoader.load('models/donut1.glb', (gltf) => {
    donut= gltf.scene;
    console.log(gltf);
    scene.add(gltf.scene);

});


camera.position.z = 5;

function animate() {
	requestAnimationFrame( animate );
	renderer.render( scene, camera );
}
animate();