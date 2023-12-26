import './style.css'
import TWEEN from '@tweenjs/tween.js'
import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';


// Create a new scene
const scene = new THREE.Scene();

// Add a camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 5000);
camera.position.z = 2.5;
camera.position.y = 3;
camera.position.x = 2.5;


// Create a renderer
const renderer= new THREE.WebGLRenderer({
    canvas: document.querySelector('#bg'),
});
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);

// Resize window
window.addEventListener('resize', () => {
  const newWidth = window.innerWidth;
  const newHeight = window.innerHeight;

  camera.aspect = newWidth / newHeight;
  camera.updateProjectionMatrix();

  renderer.setSize(newWidth, newHeight);
});

// Set the background color
const skyColor = new THREE.Color(0x77C9EC);
scene.background = skyColor;

// Add ambient light to the scene
var ambientLight = new THREE.AmbientLight(0xffffff, 1);
scene.add(ambientLight);

// Add directional light to the scene
var directionalLight = new THREE.DirectionalLight(0xEEE8AA, 7);
directionalLight.position.set(-5, 6,10).normalize();
directionalLight.castShadow = true;
scene.add(directionalLight);

// add orbit control
const controls = new OrbitControls(camera, renderer.domElement);

//add gltf models
const loader1 = new GLTFLoader();
let model1;
loader1.load('./low_poly_animals/scene.gltf', (gltf) => {
  model1 = gltf.scene;
  model1.traverse((node) => {
    if (node.isMesh) {
        node.castShadow = true;
        node.receiveShadow = true;
    }
  });
  model1.scale.set(0.015, 0.015, 0.015);
  var m2 = model1.clone();
  m2.position.set(0,0.6,0);

  var m3 = model1.clone();
  m3.rotation.x = Math.PI / 1;
  m3.position.set(0,-0.6,0);

  var m4 = model1.clone();
  m4.rotation.z = Math.PI / 2;
  m4.position.set(-0.6,0,0);

  var m5 = model1.clone();
  m5.rotation.z = Math.PI / -2;
  m5.position.set(0.6,0,0);

  var m6 = model1.clone();
  m6.rotation.x = Math.PI / 2;
  m6.position.set(0,0,0.6);

  var m7 = model1.clone();
  m7.rotation.x = Math.PI / -2;
  m7.position.set(0,0,-0.6);

  cube1.add(m7);
  cube1.add(m6);
  cube1.add(m5);
  cube1.add(m4);
  cube1.add(m3);
  cube1.add(m2);

  cube26.add(m2.clone());
  cube26.add(m3.clone());
  cube26.add(m4.clone());
  cube26.add(m5.clone());
  cube26.add(m6.clone());
  cube26.add(m7.clone());

  cube21.add(m2.clone())
  cube21.add(m3.clone())
  cube21.add(m4.clone())
  cube21.add(m5.clone())
  cube21.add(m6.clone())
  cube21.add(m7.clone())
  
});

const loader2 = new GLTFLoader();
let model2;
loader2.load('./low_poly_beach_assets/scene.gltf', (gltf) => {
  model2 = gltf.scene;
  model2.traverse((node) => {
    if (node.isMesh) {
        node.castShadow = true;
        node.receiveShadow = true;
    }
  });
  model2.receiveShadow = true;
  model2.scale.set(0.009, 0.009, 0.009);

  var m2= model2.clone();
  m2.position.set(-1,-0.1,-0.7);

  var m3= model2.clone();
  m3.rotation.x = Math.PI / 2;
  m3.position.set(-1,0.7,-0.1);

  var m4= model2.clone();
  m4.rotation.x = Math.PI / -2;
  m4.position.set(-1,-0.7,0.1);

  var m5= model2.clone();
  m5.rotation.x = Math.PI / 1;
  m5.position.set(-1,0.1,0.7);

  var m6= model2.clone();
  m6.rotation.z = Math.PI / 2;
  m6.position.set(0.1,-0.9,-0.7);

  var m7= model2.clone();
  m7.rotation.z = Math.PI / -2;
  m7.position.set(-0.2,0.9,-0.7);

  cube2.add(m5);
  cube2.add(m4);
  cube2.add(m3);
  cube2.add(m2);

  cube24.add(m7);
  cube24.add(m6);
  cube24.add(m2.clone());
  cube24.add(m3.clone());
  cube24.add(m4.clone());
  cube24.add(m5.clone());

  cube6.add(m2.clone())
  cube6.add(m3.clone())
  cube6.add(m4.clone())
  cube6.add(m5.clone())
  cube6.add(m6.clone())
  cube6.add(m7.clone())

  cube8.add(m2.clone())
  cube8.add(m3.clone())
  cube8.add(m4.clone())
  cube8.add(m5.clone())
  cube8.add(m6.clone())
  cube8.add(m7.clone())
});

const loader3 = new GLTFLoader();
let model3;
loader3.load('./low_poly_farm_v2/scene.gltf', (gltf) => {
  model3 = gltf.scene;
  model3.traverse((node) => {
    if (node.isMesh) {
        node.castShadow = true;
        node.receiveShadow = true;
    }
  });
  model3.receiveShadow = true;
  model3.scale.set(0.025, 0.025, 0.025);

  var m2= model3.clone();
  m2.position.set(-0.1,0.55,0.2);

  var m3= model3.clone();
  m3.rotation.x = Math.PI / 2;
  m3.position.set(-0.1,-0.2,0.55);

  var m4= model3.clone();
  m4.rotation.x = Math.PI / -2;
  m4.position.set(-0.1,0.25,-0.55);

  var m5= model3.clone();
  m5.rotation.x = Math.PI / 1;
  m5.position.set(-0.1,-0.55,-0.25);

  var m6= model3.clone();
  m6.rotation.z = Math.PI / -2;
  m6.position.set(0.55,0.1,0.2);

  var m7= model3.clone();
  m7.rotation.z = Math.PI / 2;
  m7.position.set(-0.55,-0.05,0.2);

  cube3.add(m7);
  cube3.add(m6);
  cube3.add(m5);
  cube3.add(m4);
  cube3.add(m3);
  cube3.add(m2);

  cube18.add(m2.clone())
  cube18.add(m3.clone())
  cube18.add(m4.clone())
  cube18.add(m5.clone())
  cube18.add(m6.clone())
  cube18.add(m7.clone())

  cube16.add(m2.clone())
  cube16.add(m3.clone())
  cube16.add(m4.clone())
  cube16.add(m5.clone())
  cube16.add(m6.clone())
  cube16.add(m7.clone())

  cube23.add(m2.clone())
  cube23.add(m3.clone())
  cube23.add(m4.clone())
  cube23.add(m5.clone())
  cube23.add(m6.clone())
  cube23.add(m7.clone())

  cube15.add(m2.clone())
  cube15.add(m3.clone())
  cube15.add(m4.clone())
  cube15.add(m5.clone())
  cube15.add(m6.clone())
  cube15.add(m7.clone())

  cube13.add(m2.clone())
  cube13.add(m3.clone())
  cube13.add(m4.clone())
  cube13.add(m5.clone())
  cube13.add(m6.clone())
  cube13.add(m7.clone())
});

const loader4 = new GLTFLoader();
let model4;
loader4.load('./low_poly_island/scene.gltf', (gltf) => {
  model4 = gltf.scene;
  model4.traverse((node) => {
    if (node.isMesh) {
        node.castShadow = true;
        node.receiveShadow = true;
    }
  });
  model4.scale.set(0.14, 0.14, 0.14);

  var m2= model4.clone();
  m2.position.set(-0.05,0.55,0);

  var m3= model4.clone();
  m3.rotation.z = Math.PI / 2;
  m3.position.set(-0.55,0,0);

  var m4= model4.clone();
  m4.rotation.z = Math.PI / -2;
  m4.position.set(0.55,0,0);

  var m5= model4.clone();
  m5.rotation.x = Math.PI / 2;
  m5.position.set(0,0,0.55);

  var m6= model4.clone();
  m6.rotation.x = Math.PI / -2;
  m6.position.set(0,0,-0.55);

  var m7= model4.clone();
  m7.rotation.x = Math.PI / -1;
  m7.position.set(-0.05,-0.55,0);

  cube10.add(m7);
  cube10.add(m6);
  cube10.add(m5);
  cube10.add(m4);
  cube10.add(m3);
  cube10.add(m2);

  cube9.add(m2.clone());
  cube9.add(m3.clone());
  cube9.add(m4.clone());
  cube9.add(m5.clone());
  cube9.add(m6.clone());
  cube9.add(m7.clone());

  cube22.add(m2.clone());
  cube22.add(m3.clone());
  cube22.add(m4.clone());
  cube22.add(m5.clone());
  cube22.add(m6.clone());
  cube22.add(m7.clone());

  cube12.add(m2.clone())
  cube12.add(m3.clone())
  cube12.add(m4.clone())
  cube12.add(m5.clone())
  cube12.add(m6.clone())
  cube12.add(m7.clone())

  cube25.add(m2.clone())
  cube25.add(m3.clone())
  cube25.add(m4.clone())
  cube25.add(m5.clone())
  cube25.add(m6.clone())
  cube25.add(m7.clone())

});

const loader5 = new GLTFLoader();
let model5;
loader5.load('./low_poly_nature/scene.gltf', (gltf) => {
  model5 = gltf.scene;
  model5.traverse((node) => {
    if (node.isMesh) {
        node.castShadow = true;
        node.receiveShadow = true;
    }
  });
  model5.scale.set(0.05, 0.05, 0.05);

  var m2 = model5.clone();
  m2.rotation.x = Math.PI / 2;
  m2.position.set(-0.2,-0.4,-0.6);

  var m3 = model5.clone();
  m3.rotation.x = Math.PI / -2;
  m3.position.set(-0.2,0.4,0.6);

  var m4 = model5.clone();
  m4.position.set(-0.2,-0.6,0.4);

  var m5 = model5.clone();
  m5.rotation.x = Math.PI / 1;
  m5.position.set(-0.2,0.6,-0.4);

  var m6 = model5.clone();
  m6.rotation.z = Math.PI / 2;
  m6.position.set(0.6,-0.15,0.4);

  var m7 = model5.clone();
  m7.rotation.z = Math.PI / -2;
  m7.position.set(-0.6,0.2,0.4);

  cube11.add(m7);
  cube11.add(m6);
  cube11.add(m5);
  cube11.add(m4);
  cube11.add(m3);
  cube11.add(m2);

  cube20.add(m2.clone());
  cube20.add(m3.clone());
  cube20.add(m4.clone());
  cube20.add(m5.clone());
  cube20.add(m6.clone());
  cube20.add(m7.clone());

  cube17.add(m2.clone());
  cube17.add(m3.clone());
  cube17.add(m4.clone());
  cube17.add(m5.clone());
  cube17.add(m6.clone());
  cube17.add(m7.clone());

  cube4.add(m2.clone());
  cube4.add(m3.clone());
  cube4.add(m4.clone());
  cube4.add(m5.clone());
  cube4.add(m6.clone());
  cube4.add(m7.clone());

  cube5.add(m2.clone())
  cube5.add(m3.clone())
  cube5.add(m4.clone())
  cube5.add(m5.clone())
  cube5.add(m6.clone())
  cube5.add(m7.clone())
});

const loader6 =new GLTFLoader();
let model6;
loader6.load('./low_poly_winter_scene/scene.gltf', (gltf) => {
  model6 = gltf.scene;
  model6.traverse((node) => {
    if (node.isMesh) {
        node.castShadow = true;
        node.receiveShadow = true;
    }
  });
  model6.scale.set(0.06, 0.06, 0.06);

  var m2 = model6.clone();
  m2.position.set(0,0.55,0);

  var m3 = model6.clone();
  m3.rotation.z = Math.PI / 1;
  m3.position.set(0,-0.55,0);

  var m4 = model6.clone();
  m4.rotation.x = Math.PI / 2;
  m4.position.set(0,0,0.55);

  var m5 = model6.clone();
  m5.rotation.x = Math.PI / -2;
  m5.position.set(0,0,-0.55);

  var m6 = model6.clone();
  m6.rotation.z = Math.PI / 2;
  m6.position.set(-0.55,0,0);

  var m7 = model6.clone();
  m7.rotation.z = Math.PI / -2;
  m7.position.set(0.55,0,0);

  cube7.add(m7);
  cube7.add(m6);
  cube7.add(m5);
  cube7.add(m4);
  cube7.add(m3);
  cube7.add(m2);

  cube19.add(m2.clone());
  cube19.add(m3.clone());
  cube19.add(m4.clone());
  cube19.add(m5.clone());
  cube19.add(m6.clone());
  cube19.add(m7.clone());


  cube14.add(m2.clone());
  cube14.add(m3.clone());
  cube14.add(m4.clone());
  cube14.add(m5.clone());
  cube14.add(m6.clone());
  cube14.add(m7.clone());
});

// Create Cubes
var geometry = new THREE.BoxGeometry();
var material1 = new THREE.MeshStandardMaterial({
  color: 'grey',
});
var cube1 = new THREE.Mesh(geometry, material1);
cube1.position.x= -1;
cube1.position.y= -1;
scene.add(cube1);

var material2 = new THREE.MeshStandardMaterial({
  color: 'grey',
});
var cube2 = new THREE.Mesh(geometry, material2);
cube2.position.x = 0;
cube2.position.y= -1;
scene.add(cube2);

var material3 = new THREE.MeshStandardMaterial({
  color:'grey',
});
var cube3 = new THREE.Mesh(geometry, material3);
cube3.position.x = 1;
cube3.position.y= -1;
scene.add(cube3);

var material4 = new THREE.MeshStandardMaterial({
  color: 'grey',
});
var cube4 = new THREE.Mesh(geometry, material4);
cube4.position.x= -1;
cube4.position.y= -1;
cube4.position.z= -1;
scene.add(cube4);

var material5 = new THREE.MeshStandardMaterial({
  color: 'grey',
});
var cube5 = new THREE.Mesh(geometry, material5);
cube5.position.x = 0;
cube5.position.y= -1;
cube5.position.z= -1;
scene.add(cube5);

var material6 = new THREE.MeshStandardMaterial({
  color: 'grey',
});
var cube6 = new THREE.Mesh(geometry, material6);
cube6.position.x = 1;
cube6.position.y= -1;
cube6.position.z= -1;
scene.add(cube6);

var material7 = new THREE.MeshStandardMaterial({
  color: 'grey',
});
var cube7 = new THREE.Mesh(geometry, material7);
cube7.position.x= -1;
cube7.position.y= -1;
cube7.position.z= -2;
scene.add(cube7);

var material8 = new THREE.MeshStandardMaterial({
  color: 'grey',
});
var cube8 = new THREE.Mesh(geometry, material8);
cube8.position.x = 0;
cube8.position.y= -1;
cube8.position.z= -2;
scene.add(cube8);

var material9 = new THREE.MeshStandardMaterial({
  color: 'grey',
});
var cube9 = new THREE.Mesh(geometry, material9);
cube9.position.x = 1;
cube9.position.y= -1;
cube9.position.z= -2;
scene.add(cube9);

var material10 = new THREE.MeshStandardMaterial({
  color: 'grey',
});
var cube10 = new THREE.Mesh(geometry, material10);
cube10.position.x= -1;
cube10.position.y= 0;
scene.add(cube10);

var material11 = new THREE.MeshStandardMaterial({
  color: 'grey',
});
var cube11 = new THREE.Mesh(geometry, material11);
cube11.position.x = 0;
cube11.position.y= 0;
scene.add(cube11);

var material12 = new THREE.MeshStandardMaterial({
  color: 'grey',
});
var cube12 = new THREE.Mesh(geometry, material12);
cube12.position.x = 1;
cube12.position.y= 0;
scene.add(cube12);

var material13 = new THREE.MeshStandardMaterial({
  color: 'grey',
});
var cube13 = new THREE.Mesh(geometry, material13);
cube13.position.x= -1;
cube13.position.y= 0;
cube13.position.z= -1;
scene.add(cube13);

var material14 = new THREE.MeshStandardMaterial({
  color: 'grey',
});
var cube14 = new THREE.Mesh(geometry, material14);
cube14.position.x = 1;
cube14.position.y= 0;
cube14.position.z= -1;
scene.add(cube14);

var material15 = new THREE.MeshStandardMaterial({
  color: 'grey',
});
var cube15 = new THREE.Mesh(geometry, material15);
cube15.position.x= -1;
cube15.position.y= 0;
cube15.position.z= -2;
scene.add(cube15);

var material16 = new THREE.MeshStandardMaterial({
  color: 'grey',
});
var cube16 = new THREE.Mesh(geometry, material16);
cube16.position.x = 0;
cube16.position.y= 0;
cube16.position.z= -2;
scene.add(cube16);

var material17 = new THREE.MeshStandardMaterial({
  color: 'grey',
});
var cube17 = new THREE.Mesh(geometry, material17);
cube17.position.x = 1;
cube17.position.y= 0;
cube17.position.z= -2;
scene.add(cube17);

var material18 = new THREE.MeshStandardMaterial({
  color: 'grey',
});
var cube18 = new THREE.Mesh(geometry, material18);
cube18.position.x= -1;
cube18.position.y= 1;
scene.add(cube18);

var material19 = new THREE.MeshStandardMaterial({
  color: 'grey',
});
var cube19 = new THREE.Mesh(geometry, material19);
cube19.position.x = 0;
cube19.position.y= 1;
scene.add(cube19);

var material20 = new THREE.MeshStandardMaterial({
  color: 'grey',
});
var cube20 = new THREE.Mesh(geometry, material20);
cube20.position.x = 1;
cube20.position.y= 1;
scene.add(cube20);

var material21 = new THREE.MeshStandardMaterial({
  color: 'grey',
});
var cube21 = new THREE.Mesh(geometry, material21);
cube21.position.x= -1;
cube21.position.y= 1;
cube21.position.z= -1;
scene.add(cube21);

var material22 = new THREE.MeshStandardMaterial({
  color: 'grey',
});
var cube22 = new THREE.Mesh(geometry, material22);
cube22.position.x = 0;
cube22.position.y= 1;
cube22.position.z= -1;
scene.add(cube22);

var material23 = new THREE.MeshStandardMaterial({
  color: 'grey',
});
var cube23 = new THREE.Mesh(geometry, material23);
cube23.position.x = 1;
cube23.position.y= 1;
cube23.position.z= -1;
scene.add(cube23);

var material24 = new THREE.MeshStandardMaterial({
  color: 'grey',
});
var cube24 = new THREE.Mesh(geometry, material24);
cube24.position.x= -1;
cube24.position.y= 1;
cube24.position.z= -2;
scene.add(cube24);

var material25 = new THREE.MeshStandardMaterial({
  color: 'grey',
});
var cube25 = new THREE.Mesh(geometry, material25);
cube25.position.x = 0;
cube25.position.y= 1;
cube25.position.z= -2;
scene.add(cube25);

var material26 = new THREE.MeshStandardMaterial({
  color: 'grey',
});
var cube26 = new THREE.Mesh(geometry, material26);
cube26.position.x = 1;
cube26.position.y= 1;
cube26.position.z= -2;
scene.add(cube26);

var cubes = new THREE.Group();

cubes.add(cube1,cube2,cube3,cube4,cube5,cube6,cube7,cube8,cube9,cube10,cube11,cube12,cube13,cube14,cube15,cube16,cube17,cube18,cube19,cube20,cube21,cube22,cube23,cube24,cube25,cube26);
scene.add(cubes);

document.addEventListener("keydown", (event) => {
  switch (event.key) {
    case "5":
      moveRowl3();
      break;
    case "6":
      moveRow3();
      break;
    case "3":
      moveRowl2();
      break;
    case "4":
      moveRow2();
      break;
    case "1":
      moveRowl1();
      break;
    case "2":
      moveRow1();
      break;
    case "7":
      moveColumnD1();
      break;
    case "8":
      moveColumn1();
      break;
    case "9":
      moveColumnD2();
      break;
    case "0":
      moveColumn2();
      break;
    case "ArrowUp":
      moveColumnD3();
      break;
    case "ArrowDown":
      moveColumn3();
      break;
    case "ArrowLeft":
        moveLngD1();
        break;
    case "ArrowRight":
        moveLng1();
        break;
    case "KeyQ":
      moveLngD2();
      break;
    case "KeyW":
      moveLng2();
      break;
    case "KeyS":
        moveLng3();
        break;
    case "KeyA":
        moveLngD3();
        break;
  }
});

cubes.children.forEach((cube) => {
  cube.userData.positionChanged = false;
  if(cube.material.color == 'black'){
    cube.add(model1.clone());
  }
});

// Move the row based on direction

function moveRow3() {
  const duration = 1000; // Animation duration in milliseconds

  cubes.children.forEach((cube) => {
      if (cube.position.y == 1 && !cube.userData.positionChanged) {
          let targetPosition = new THREE.Vector3(cube.position.x, cube.position.y, cube.position.z);

          if (cube.position.x == -1 && cube.position.z == 0) {
              targetPosition.x += 2;
          } else if (cube.position.x == 0 && cube.position.z == 0) {
              targetPosition.x += 1;
              targetPosition.z -= 1;
          } else if (cube.position.x == 1 && cube.position.z == 0) {
              targetPosition.z -= 2;
          } else if (cube.position.z == -1 && cube.position.x == -1) {
              targetPosition.z += 1;
              targetPosition.x += 1;
          } else if (cube.position.z == -1 && cube.position.x == 1) {
              targetPosition.z -= 1;
              targetPosition.x -= 1;
          } else if (cube.position.z == -2 && cube.position.x == -1) {
              targetPosition.z += 2;
          } else if (cube.position.z == -2 && cube.position.x == 0) {
              targetPosition.z += 1;
              targetPosition.x -= 1;
          } else if (cube.position.z == -2 && cube.position.x == 1) {
              targetPosition.x -= 2;
          }

          // Use Tween.js to create an animation
          new TWEEN.Tween(cube.position)
              .to(targetPosition, duration)
              .easing(TWEEN.Easing.Quadratic.InOut)
              .start();

          cube.userData.positionChanged = true;
      }
      cube.userData.positionChanged=false;
  });

  // Start the animation loop
  animate();
}


function moveRow2() {
  const duration = 1000; // Animation duration in milliseconds

  cubes.children.forEach((cube) => {
      if (cube.position.y == 0 && !cube.userData.positionChanged) {
          let targetPosition = new THREE.Vector3(cube.position.x, cube.position.y, cube.position.z);

          if (cube.position.x == -1 && cube.position.z == 0) {
              targetPosition.x += 2;
          } else if (cube.position.x == 0 && cube.position.z == 0) {
              targetPosition.x += 1;
              targetPosition.z -= 1;
          } else if (cube.position.x == 1 && cube.position.z == 0) {
              targetPosition.z -= 2;
          } else if (cube.position.z == -1 && cube.position.x == -1) {
              targetPosition.z += 1;
              targetPosition.x += 1;
          } else if (cube.position.z == -1 && cube.position.x == 1) {
              targetPosition.z -= 1;
              targetPosition.x -= 1;
          } else if (cube.position.z == -2 && cube.position.x == -1) {
              targetPosition.z += 2;
          } else if (cube.position.z == -2 && cube.position.x == 0) {
              targetPosition.z += 1;
              targetPosition.x -= 1;
          } else if (cube.position.z == -2 && cube.position.x == 1) {
              targetPosition.x -= 2;
          }

          // Use Tween.js to create an animation
          new TWEEN.Tween(cube.position)
              .to(targetPosition, duration)
              .easing(TWEEN.Easing.Quadratic.InOut)
              .start();

          cube.userData.positionChanged = true;
      }
      cube.userData.positionChanged=false;
  });

  // Start the animation loop
  animate();
}

function moveRow1() {
  const duration = 1000; // Animation duration in milliseconds

  cubes.children.forEach((cube) => {
      if (cube.position.y == -1 && !cube.userData.positionChanged) {
          let targetPosition = new THREE.Vector3(cube.position.x, cube.position.y, cube.position.z);

          if (cube.position.x == -1 && cube.position.z == 0) {
              targetPosition.x += 2;
          } else if (cube.position.x == 0 && cube.position.z == 0) {
              targetPosition.x += 1;
              targetPosition.z -= 1;
          } else if (cube.position.x == 1 && cube.position.z == 0) {
              targetPosition.z -= 2;
          } else if (cube.position.z == -1 && cube.position.x == -1) {
              targetPosition.z += 1;
              targetPosition.x += 1;
          } else if (cube.position.z == -1 && cube.position.x == 1) {
              targetPosition.z -= 1;
              targetPosition.x -= 1;
          } else if (cube.position.z == -2 && cube.position.x == -1) {
              targetPosition.z += 2;
          } else if (cube.position.z == -2 && cube.position.x == 0) {
              targetPosition.z += 1;
              targetPosition.x -= 1;
          } else if (cube.position.z == -2 && cube.position.x == 1) {
              targetPosition.x -= 2;
          }

          // Use Tween.js to create an animation
          new TWEEN.Tween(cube.position)
              .to(targetPosition, duration)
              .easing(TWEEN.Easing.Quadratic.InOut)
              .start();

          cube.userData.positionChanged = true;
      }
      cube.userData.positionChanged=false;
  });

  // Start the animation loop
  animate();
}

function moveRowl3() {
  const duration = 1000; // Animation duration in milliseconds

  cubes.children.forEach((cube) => {
      if (cube.position.y == 1 && !cube.userData.positionChanged) {
          let targetPosition = new THREE.Vector3(cube.position.x, cube.position.y, cube.position.z);

          if (cube.position.x == 1 && cube.position.z == 0) {
              targetPosition.x -= 2;
          } else if (cube.position.x == 0 && cube.position.z == 0) {
              targetPosition.x -= 1;
              targetPosition.z -= 1;
          } else if (cube.position.x == -1 && cube.position.z == 0) {
              targetPosition.z -= 2;
          } else if (cube.position.x == -1 && cube.position.z == -1) {
              targetPosition.x += 1;
              targetPosition.z -= 1;
          } else if (cube.position.x == 1 && cube.position.z == -1) {
              targetPosition.x -= 1;
              targetPosition.z += 1;
          } else if (cube.position.x == -1 && cube.position.z == -2) {
              targetPosition.x += 2;
          } else if (cube.position.x == 0 && cube.position.z == -2) {
              targetPosition.x += 1;
              targetPosition.z += 1;
          } else if (cube.position.x == 1 && cube.position.z == -2) {
              targetPosition.z += 2;
          }

          // Use Tween.js to create an animation
          new TWEEN.Tween(cube.position)
              .to(targetPosition, duration)
              .easing(TWEEN.Easing.Quadratic.InOut)
              .start();

          cube.userData.positionChanged = true;
      }
      cube.userData.positionChanged=false;
  });

  // Start the animation loop
  animate();
}

function moveRowl2() {
  const duration = 1000; // Animation duration in milliseconds

  cubes.children.forEach((cube) => {
      if (cube.position.y == 0 && !cube.userData.positionChanged) {
          let targetPosition = new THREE.Vector3(cube.position.x, cube.position.y, cube.position.z);

          if (cube.position.x == 1 && cube.position.z == 0) {
              targetPosition.x -= 2;
          } else if (cube.position.x == 0 && cube.position.z == 0) {
              targetPosition.x -= 1;
              targetPosition.z -= 1;
          } else if (cube.position.x == -1 && cube.position.z == 0) {
              targetPosition.z -= 2;
          } else if (cube.position.x == -1 && cube.position.z == -1) {
              targetPosition.x += 1;
              targetPosition.z -= 1;
          } else if (cube.position.x == 1 && cube.position.z == -1) {
              targetPosition.x -= 1;
              targetPosition.z += 1;
          } else if (cube.position.x == -1 && cube.position.z == -2) {
              targetPosition.x += 2;
          } else if (cube.position.x == 0 && cube.position.z == -2) {
              targetPosition.x += 1;
              targetPosition.z += 1;
          } else if (cube.position.x == 1 && cube.position.z == -2) {
              targetPosition.z += 2;
          }

          // Use Tween.js to create an animation
          new TWEEN.Tween(cube.position)
              .to(targetPosition, duration)
              .easing(TWEEN.Easing.Quadratic.InOut)
              .start();

          cube.userData.positionChanged = true;
      }
      cube.userData.positionChanged=false;
  });

  // Start the animation loop
  animate();
}

function moveRowl1() {
  const duration = 1000; // Animation duration in milliseconds

  cubes.children.forEach((cube) => {
      if (cube.position.y == -1 && !cube.userData.positionChanged) {
          let targetPosition = new THREE.Vector3(cube.position.x, cube.position.y, cube.position.z);

          if (cube.position.x == 1 && cube.position.z == 0) {
              targetPosition.x -= 2;
          } else if (cube.position.x == 0 && cube.position.z == 0) {
              targetPosition.x -= 1;
              targetPosition.z -= 1;
          } else if (cube.position.x == -1 && cube.position.z == 0) {
              targetPosition.z -= 2;
          } else if (cube.position.x == -1 && cube.position.z == -1) {
              targetPosition.x += 1;
              targetPosition.z -= 1;
          } else if (cube.position.x == 1 && cube.position.z == -1) {
              targetPosition.x -= 1;
              targetPosition.z += 1;
          } else if (cube.position.x == -1 && cube.position.z == -2) {
              targetPosition.x += 2;
          } else if (cube.position.x == 0 && cube.position.z == -2) {
              targetPosition.x += 1;
              targetPosition.z += 1;
          } else if (cube.position.x == 1 && cube.position.z == -2) {
              targetPosition.z += 2;
          }

          // Use Tween.js to create an animation
          new TWEEN.Tween(cube.position)
              .to(targetPosition, duration)
              .easing(TWEEN.Easing.Quadratic.InOut)
              .start();

          cube.userData.positionChanged = true;
      }
      cube.userData.positionChanged=false;
  });

  // Start the animation loop
  animate();
}

// Move the column based on direction
function moveColumn3() {
  const duration = 1000; // Animation duration in milliseconds

  cubes.children.forEach((cube) => {
      if (!cube.userData.positionChanged) {
          let targetPosition = new THREE.Vector3(cube.position.x, cube.position.y, cube.position.z);

          if (cube.position.x == 1 && cube.position.z == 0 && cube.position.y == -1) {
              targetPosition.y += 2;
          } else if (cube.position.x == 1 && cube.position.z == 0 && cube.position.y == 0) {
              targetPosition.y += 1;
              targetPosition.z -= 1;
          } else if (cube.position.x == 1 && cube.position.z == 0 && cube.position.y == 1) {
              targetPosition.z -= 2;
          } else if (cube.position.x == 1 && cube.position.z == -1 && cube.position.y == 1) {
              targetPosition.y -= 1;
              targetPosition.z -= 1;
          } else if (cube.position.x == 1 && cube.position.z == -2 && cube.position.y == 1) {
              targetPosition.y -= 2;
          } else if (cube.position.x == 1 && cube.position.z == -2 && cube.position.y == 0) {
              targetPosition.y -= 1;
              targetPosition.z += 1;
          } else if (cube.position.x == 1 && cube.position.z == -2 && cube.position.y == -1) {
              targetPosition.z += 2;
          } else if (cube.position.x == 1 && cube.position.z == -1 && cube.position.y == -1) {
              targetPosition.y += 1;
              targetPosition.z += 1;
          }

          // Use Tween.js to create an animation
          new TWEEN.Tween(cube.position)
              .to(targetPosition, duration)
              .easing(TWEEN.Easing.Quadratic.InOut)
              .start();

          cube.userData.positionChanged = true;
      }
      cube.userData.positionChanged=false;
  });

  // Start the animation loop
  animate();
}

function moveColumn2() {
  const duration = 1000; // Animation duration in milliseconds

  cubes.children.forEach((cube) => {
      if (!cube.userData.positionChanged) {
          let targetPosition = new THREE.Vector3(cube.position.x, cube.position.y, cube.position.z);

          if (cube.position.x == 0 && cube.position.z == 0 && cube.position.y == -1) {
              targetPosition.y += 2;
          } else if (cube.position.x == 0 && cube.position.z == 0 && cube.position.y == 0) {
              targetPosition.y += 1;
              targetPosition.z -= 1;
          } else if (cube.position.x == 0 && cube.position.z == 0 && cube.position.y == 1) {
              targetPosition.z -= 2;
          } else if (cube.position.x == 0 && cube.position.z == -1 && cube.position.y == 1) {
              targetPosition.y -= 1;
              targetPosition.z -= 1;
          } else if (cube.position.x == 0 && cube.position.z == -2 && cube.position.y == 1) {
              targetPosition.y -= 2;
          } else if (cube.position.x == 0 && cube.position.z == -2 && cube.position.y == 0) {
              targetPosition.y -= 1;
              targetPosition.z += 1;
          } else if (cube.position.x == 0 && cube.position.z == -2 && cube.position.y == -1) {
              targetPosition.z += 2;
          } else if (cube.position.x == 0 && cube.position.z == -1 && cube.position.y == -1) {
              targetPosition.y += 1;
              targetPosition.z += 1;
          }

          // Use Tween.js to create an animation
          new TWEEN.Tween(cube.position)
              .to(targetPosition, duration)
              .easing(TWEEN.Easing.Quadratic.InOut)
              .start();

          cube.userData.positionChanged = true;
      }
      cube.userData.positionChanged=false;
  });

  // Start the animation loop
  animate();
}

function moveColumn1() {
  const duration = 1000; // Animation duration in milliseconds

  cubes.children.forEach((cube) => {
      if (!cube.userData.positionChanged) {
          let targetPosition = new THREE.Vector3(cube.position.x, cube.position.y, cube.position.z);

          if (cube.position.x == -1 && cube.position.z == 0 && cube.position.y == -1) {
              targetPosition.y += 2;
          } else if (cube.position.x == -1 && cube.position.z == 0 && cube.position.y == 0) {
              targetPosition.y += 1;
              targetPosition.z -= 1;
          } else if (cube.position.x == -1 && cube.position.z == 0 && cube.position.y == 1) {
              targetPosition.z -= 2;
          } else if (cube.position.x == -1 && cube.position.z == -1 && cube.position.y == 1) {
              targetPosition.y -= 1;
              targetPosition.z -= 1;
          } else if (cube.position.x == -1 && cube.position.z == -2 && cube.position.y == 1) {
              targetPosition.y -= 2;
          } else if (cube.position.x == -1 && cube.position.z == -2 && cube.position.y == 0) {
              targetPosition.y -= 1;
              targetPosition.z += 1;
          } else if (cube.position.x == -1 && cube.position.z == -2 && cube.position.y == -1) {
              targetPosition.z += 2;
          } else if (cube.position.x == -1 && cube.position.z == -1 && cube.position.y == -1) {
              targetPosition.y += 1;
              targetPosition.z += 1;
          }

          // Use Tween.js to create an animation
          new TWEEN.Tween(cube.position)
              .to(targetPosition, duration)
              .easing(TWEEN.Easing.Quadratic.InOut)
              .start();

          cube.userData.positionChanged = true;
      }
      cube.userData.positionChanged=false;
  });

  // Start the animation loop
  animate();
}

function moveColumnD3() {
  const duration = 1000; // Animation duration in milliseconds

  cubes.children.forEach((cube) => {
      if (!cube.userData.positionChanged) {
          let targetPosition = new THREE.Vector3(cube.position.x, cube.position.y, cube.position.z);

          if (cube.position.x == 1 && cube.position.z == 0 && cube.position.y == -1) {
              targetPosition.z -= 2;
          } else if (cube.position.x == 1 && cube.position.z == 0 && cube.position.y == 0) {
              targetPosition.y -= 1;
              targetPosition.z -= 1;
          } else if (cube.position.x == 1 && cube.position.z == 0 && cube.position.y == 1) {
              targetPosition.y -= 2;
          } else if (cube.position.x == 1 && cube.position.z == -1 && cube.position.y == 1) {
              targetPosition.y -= 1;
              targetPosition.z += 1;
          } else if (cube.position.x == 1 && cube.position.z == -2 && cube.position.y == 1) {
              targetPosition.z += 2;
          } else if (cube.position.x == 1 && cube.position.z == -2 && cube.position.y == 0) {
              targetPosition.y += 1;
              targetPosition.z += 1;
          } else if (cube.position.x == 1 && cube.position.z == -2 && cube.position.y == -1) {
              targetPosition.y += 2;
          } else if (cube.position.x == 1 && cube.position.z == -1 && cube.position.y == -1) {
              targetPosition.y += 1;
              targetPosition.z -= 1;
          }

          // Use Tween.js to create an animation
          new TWEEN.Tween(cube.position)
              .to(targetPosition, duration)
              .easing(TWEEN.Easing.Quadratic.InOut)
              .start();

          cube.userData.positionChanged = true;
      }
      cube.userData.positionChanged=false;
  });

  // Start the animation loop
  animate();
}

function moveColumnD2() {
  const duration = 1000; // Animation duration in milliseconds

  cubes.children.forEach((cube) => {
      if (!cube.userData.positionChanged) {
          let targetPosition = new THREE.Vector3(cube.position.x, cube.position.y, cube.position.z);

          if (cube.position.x == 0 && cube.position.z == 0 && cube.position.y == -1) {
              targetPosition.z -= 2;
          } else if (cube.position.x == 0 && cube.position.z == 0 && cube.position.y == 0) {
              targetPosition.y -= 1;
              targetPosition.z -= 1;
          } else if (cube.position.x == 0 && cube.position.z == 0 && cube.position.y == 1) {
              targetPosition.y -= 2;
          } else if (cube.position.x == 0 && cube.position.z == -1 && cube.position.y == 1) {
              targetPosition.y -= 1;
              targetPosition.z += 1;
          } else if (cube.position.x == 0 && cube.position.z == -2 && cube.position.y == 1) {
              targetPosition.z += 2;
          } else if (cube.position.x == 0 && cube.position.z == -2 && cube.position.y == 0) {
              targetPosition.y += 1;
              targetPosition.z += 1;
          } else if (cube.position.x == 0 && cube.position.z == -2 && cube.position.y == -1) {
              targetPosition.y += 2;
          } else if (cube.position.x == 0 && cube.position.z == -1 && cube.position.y == -1) {
              targetPosition.y += 1;
              targetPosition.z -= 1;
          }

          // Use Tween.js to create an animation
          new TWEEN.Tween(cube.position)
              .to(targetPosition, duration)
              .easing(TWEEN.Easing.Quadratic.InOut)
              .start();

          cube.userData.positionChanged = true;
      }
      cube.userData.positionChanged=false;
  });

  // Start the animation loop
  animate();
}

function moveColumnD1() {
  const duration = 1000; // Animation duration in milliseconds

  cubes.children.forEach((cube) => {
      if (!cube.userData.positionChanged) {
          let targetPosition = new THREE.Vector3(cube.position.x, cube.position.y, cube.position.z);

          if (cube.position.x == -1 && cube.position.z == 0 && cube.position.y == -1) {
              targetPosition.z -= 2;
          } else if (cube.position.x == -1 && cube.position.z == 0 && cube.position.y == 0) {
              targetPosition.y -= 1;
              targetPosition.z -= 1;
          } else if (cube.position.x == -1 && cube.position.z == 0 && cube.position.y == 1) {
              targetPosition.y -= 2;
          } else if (cube.position.x == -1 && cube.position.z == -1 && cube.position.y == 1) {
              targetPosition.y -= 1;
              targetPosition.z += 1;
          } else if (cube.position.x == -1 && cube.position.z == -2 && cube.position.y == 1) {
              targetPosition.z += 2;
          } else if (cube.position.x == -1 && cube.position.z == -2 && cube.position.y == 0) {
              targetPosition.y += 1;
              targetPosition.z += 1;
          } else if (cube.position.x == -1 && cube.position.z == -2 && cube.position.y == -1) {
              targetPosition.y += 2;
          } else if (cube.position.x == -1 && cube.position.z == -1 && cube.position.y == -1) {
              targetPosition.y += 1;
              targetPosition.z -= 1;
          }

          // Use Tween.js to create an animation
          new TWEEN.Tween(cube.position)
              .to(targetPosition, duration)
              .easing(TWEEN.Easing.Quadratic.InOut)
              .start();

          cube.userData.positionChanged = true;
      }
      cube.userData.positionChanged=false;
  });

  // Start the animation loop
  animate();
}

//Move the length based on direction
function moveLng1() {
  const duration = 1000; // Animation duration in milliseconds

  cubes.children.forEach((cube) => {
      if (cube.position.z == 0 && !cube.userData.positionChanged) {
          let targetPosition = new THREE.Vector3(cube.position.x, cube.position.y, cube.position.z);

          if (cube.position.x == -1 && cube.position.y == -1) {
              targetPosition.x += 2;
          } else if (cube.position.x == 0 && cube.position.y == -1) {
              targetPosition.x += 1;
              targetPosition.y += 1;
          } else if (cube.position.x == 1 && cube.position.y == -1) {
              targetPosition.y += 2;
          } else if (cube.position.x == -1 && cube.position.y == 0) {
              targetPosition.y -= 1;
              targetPosition.x += 1;
          } else if (cube.position.x == 1 && cube.position.y == 0) {
              targetPosition.y += 1;
              targetPosition.x -= 1;
          } else if (cube.position.x == -1 && cube.position.y == 1) {
              targetPosition.y -= 2;
          } else if (cube.position.x == 0 && cube.position.y == 1) {
              targetPosition.y -= 1;
              targetPosition.x -= 1;
          } else if (cube.position.x == 1 && cube.position.y == 1) {
              targetPosition.x -= 2;
          }

          // Use Tween.js to create an animation
          new TWEEN.Tween(cube.position)
              .to(targetPosition, duration)
              .easing(TWEEN.Easing.Quadratic.InOut)
              .start();

          cube.userData.positionChanged = true;
      }
      cube.userData.positionChanged=false;
  });

  // Start the animation loop
  animate();
}

function moveLng2() {
  const duration = 1000; // Animation duration in milliseconds

  cubes.children.forEach((cube) => {
      if (cube.position.z == -1 && !cube.userData.positionChanged) {
          let targetPosition = new THREE.Vector3(cube.position.x, cube.position.y, cube.position.z);

          if (cube.position.x == -1 && cube.position.y == -1) {
              targetPosition.x += 2;
          } else if (cube.position.x == 0 && cube.position.y == -1) {
              targetPosition.x += 1;
              targetPosition.y += 1;
          } else if (cube.position.x == 1 && cube.position.y == -1) {
              targetPosition.y += 2;
          } else if (cube.position.x == -1 && cube.position.y == 0) {
              targetPosition.y -= 1;
              targetPosition.x += 1;
          } else if (cube.position.x == 1 && cube.position.y == 0) {
              targetPosition.y += 1;
              targetPosition.x -= 1;
          } else if (cube.position.x == -1 && cube.position.y == 1) {
              targetPosition.y -= 2;
          } else if (cube.position.x == 0 && cube.position.y == 1) {
              targetPosition.y -= 1;
              targetPosition.x -= 1;
          } else if (cube.position.x == 1 && cube.position.y == 1) {
              targetPosition.x -= 2;
          }

          // Use Tween.js to create an animation
          new TWEEN.Tween(cube.position)
              .to(targetPosition, duration)
              .easing(TWEEN.Easing.Quadratic.InOut)
              .start();

          cube.userData.positionChanged = true;
      }
      cube.userData.positionChanged=false;
  });

  // Start the animation loop
  animate();
}

function moveLng3() {
  const duration = 1000; // Animation duration in milliseconds

  cubes.children.forEach((cube) => {
      if (cube.position.z == -2 && !cube.userData.positionChanged) {
          let targetPosition = new THREE.Vector3(cube.position.x, cube.position.y, cube.position.z);

          if (cube.position.x == -1 && cube.position.y == -1) {
              targetPosition.x += 2;
          } else if (cube.position.x == 0 && cube.position.y == -1) {
              targetPosition.x += 1;
              targetPosition.y += 1;
          } else if (cube.position.x == 1 && cube.position.y == -1) {
              targetPosition.y += 2;
          } else if (cube.position.x == -1 && cube.position.y == 0) {
              targetPosition.y -= 1;
              targetPosition.x += 1;
          } else if (cube.position.x == 1 && cube.position.y == 0) {
              targetPosition.y += 1;
              targetPosition.x -= 1;
          } else if (cube.position.x == -1 && cube.position.y == 1) {
              targetPosition.y -= 2;
          } else if (cube.position.x == 0 && cube.position.y == 1) {
              targetPosition.y -= 1;
              targetPosition.x -= 1;
          } else if (cube.position.x == 1 && cube.position.y == 1) {
              targetPosition.x -= 2;
          }

          // Use Tween.js to create an animation
          new TWEEN.Tween(cube.position)
              .to(targetPosition, duration)
              .easing(TWEEN.Easing.Quadratic.InOut)
              .start();

          cube.userData.positionChanged = true;
      }
      cube.userData.positionChanged=false;
  });

  // Start the animation loop
  animate();
}


function moveLngD1() {
  const duration = 1000; // Animation duration in milliseconds

  cubes.children.forEach((cube) => {
      if (cube.position.z == 0 && !cube.userData.positionChanged) {
          let targetPosition = new THREE.Vector3(cube.position.x, cube.position.y, cube.position.z);

          if (cube.position.x == -1 && cube.position.y == -1) {
              targetPosition.y += 2;
          } else if (cube.position.x == 0 && cube.position.y == -1) {
              targetPosition.x -= 1;
              targetPosition.y += 1;
          } else if (cube.position.x == 1 && cube.position.y == -1) {
              targetPosition.x -= 2;
          } else if (cube.position.x == -1 && cube.position.y == 0) {
              targetPosition.y += 1;
              targetPosition.x += 1;
          } else if (cube.position.x == 1 && cube.position.y == 0) {
              targetPosition.y -= 1;
              targetPosition.x -= 1;
          } else if (cube.position.x == -1 && cube.position.y == 1) {
              targetPosition.x += 2;
          } else if (cube.position.x == 0 && cube.position.y == 1) {
              targetPosition.y -= 1;
              targetPosition.x += 1;
          } else if (cube.position.x == 1 && cube.position.y == 1) {
              targetPosition.y -= 2;
          }

          // Use Tween.js to create an animation
          new TWEEN.Tween(cube.position)
              .to(targetPosition, duration)
              .easing(TWEEN.Easing.Quadratic.InOut)
              .start();

          cube.userData.positionChanged = true;
      }
      cube.userData.positionChanged=false;
  });

  // Start the animation loop
  animate();
}

function moveLngD2() {
  const duration = 1000; // Animation duration in milliseconds

  cubes.children.forEach((cube) => {
      if (cube.position.z == -1 && !cube.userData.positionChanged) {
          let targetPosition = new THREE.Vector3(cube.position.x, cube.position.y, cube.position.z);

          if (cube.position.x == -1 && cube.position.y == -1) {
              targetPosition.y += 2;
          } else if (cube.position.x == 0 && cube.position.y == -1) {
              targetPosition.x -= 1;
              targetPosition.y += 1;
          } else if (cube.position.x == 1 && cube.position.y == -1) {
              targetPosition.x -= 2;
          } else if (cube.position.x == -1 && cube.position.y == 0) {
              targetPosition.y += 1;
              targetPosition.x += 1;
          } else if (cube.position.x == 1 && cube.position.y == 0) {
              targetPosition.y -= 1;
              targetPosition.x -= 1;
          } else if (cube.position.x == -1 && cube.position.y == 1) {
              targetPosition.x += 2;
          } else if (cube.position.x == 0 && cube.position.y == 1) {
              targetPosition.y -= 1;
              targetPosition.x += 1;
          } else if (cube.position.x == 1 && cube.position.y == 1) {
              targetPosition.y -= 2;
          }

          // Use Tween.js to create an animation
          new TWEEN.Tween(cube.position)
              .to(targetPosition, duration)
              .easing(TWEEN.Easing.Quadratic.InOut)
              .start();

          cube.userData.positionChanged = true;
      }
      cube.userData.positionChanged=false;
  });

  // Start the animation loop
  animate();
}

function moveLngD3() {
  const duration = 1000; // Animation duration in milliseconds

  cubes.children.forEach((cube) => {
      if (cube.position.z == -2 && !cube.userData.positionChanged) {
          let targetPosition = new THREE.Vector3(cube.position.x, cube.position.y, cube.position.z);

          if (cube.position.x == -1 && cube.position.y == -1) {
              targetPosition.y += 2;
          } else if (cube.position.x == 0 && cube.position.y == -1) {
              targetPosition.x -= 1;
              targetPosition.y += 1;
          } else if (cube.position.x == 1 && cube.position.y == -1) {
              targetPosition.x -= 2;
          } else if (cube.position.x == -1 && cube.position.y == 0) {
              targetPosition.y += 1;
              targetPosition.x += 1;
          } else if (cube.position.x == 1 && cube.position.y == 0) {
              targetPosition.y -= 1;
              targetPosition.x -= 1;
          } else if (cube.position.x == -1 && cube.position.y == 1) {
              targetPosition.x += 2;
          } else if (cube.position.x == 0 && cube.position.y == 1) {
              targetPosition.y -= 1;
              targetPosition.x += 1;
          } else if (cube.position.x == 1 && cube.position.y == 1) {
              targetPosition.y -= 2;
          }

          // Use Tween.js to create an animation
          new TWEEN.Tween(cube.position)
              .to(targetPosition, duration)
              .easing(TWEEN.Easing.Quadratic.InOut)
              .start();

          cube.userData.positionChanged = true;
      }
      cube.userData.positionChanged=false;
  });

  // Start the animation loop
  animate();
}



// Animation loop
const animate = () => {
  requestAnimationFrame(animate);
  
  controls.update();
  TWEEN.update();
  renderer.render(scene, camera);
};

animate();