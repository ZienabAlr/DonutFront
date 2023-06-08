// Description: This file contains the code to load the 3D model and render it on the screen.
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

//add directional light
const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
directionalLight.position.x = 1;
directionalLight.position.z = 1;
scene.add(directionalLight);

//add gltf model
let donut;
const gltfLoader = new GLTFLoader();
      
gltfLoader.load('models/donut1.glb', (gltf) => {
    donut= gltf.scene;
    console.log(gltf);
    scene.add(gltf.scene);

});


camera.position.z = 1;

function animate() {
	requestAnimationFrame( animate );
	renderer.render( scene, camera );

  //rotate the donut
  if(donut){
    donut.rotation.y += 0.01;
  }
}
animate();

const glaze = document.querySelector('.glaze');
glaze.addEventListener('change', function(){
    console.log(glaze.value);
    if(donut && glaze.value==='Chocolade'){
        //change the color of the donut to chocolade
        donut.children[1].material.color.set(0x7b3e00);
    }else if(donut && glaze.value==='Aardbei'){
        //change the color of the donut to aardbei
        donut.children[1].material.color.set(0xff0000);
    }else if(donut && glaze.value==='Melkchocolade'){
        //change the color of the donut to melkchocolade
        donut.children[1].material.color.set(0x8b4513);
    }else if(donut && glaze.value==='Witte Chocolade'){
        donut.children[1].material.color.set(0xf5deb3);
    }
});
