import './style.css';
import * as THREE from 'three';
import javascriptLogo from './javascript.svg';

/*********
 * Nav
 **********/
const hamburgerIcon = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.mobile-menu');
hamburgerIcon.addEventListener('click', () => {
  hamburgerIcon.classList.toggle('active');
  mobileMenu.classList.toggle('active');
});

/*********
 * ThreeJS Hero
 **********/

// Canvas
const canvas = document.querySelector('canvas.webgl');

// Scene
const scene = new THREE.Scene();

/*
 * Lights
 */

/*
 * Objects
 */

const geometry = new THREE.SphereGeometry(2.5, 24, 16);

const material = new THREE.MeshBasicMaterial({
  color: 0xfe3233,
  wireframe: true,
});

const mesh = new THREE.Mesh(geometry, material);
mesh.position.x = 2;

scene.add(mesh);

// Sizes
const sizes = {
  width: window.innerWidth,

  height: window.innerHeight / 1.5,
};

window.addEventListener('resize', () => {
  // Update sizes
  sizes.width = window.innerWidth;
  sizes.height = window.innerHeight;

  // Update camera
  camera.aspect = sizes.width / sizes.height;
  camera.updateProjectionMatrix();

  // Update renderer
  renderer.setSize(sizes.width, sizes.height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
});

// Camera
const camera = new THREE.PerspectiveCamera(
  75,
  sizes.width / sizes.height,
  0.1,
  100
);

camera.position.z = 3;

scene.add(camera);

// Renderer
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});

renderer.setSize(sizes.width, sizes.height);

renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

renderer.setClearColor(0x010101);

// Animate
const clock = new THREE.Clock();

const tick = () => {
  const elapsedTime = clock.getElapsedTime();

  mesh.rotation.y = elapsedTime / 20;

  // Render
  renderer.render(scene, camera);

  // Call tick again on the next frame
  window.requestAnimationFrame(tick);
};

tick();

/*********************
 * References section
 *******************/

const slider = document.querySelectorAll('.reference-card');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let currItem = 1;

function sliderShow() {
  slider[currItem].style.transform = `translate(-10%,-50%)`;
  slider[currItem].style.zIndex = 1;
  slider[currItem].style.filter = 'none';
  slider[currItem].style.opacity = 1;

  let counter = 0;

  for (let i = currItem + 1; i < slider.length; i++) {
    counter++;
    slider[i].style.transform = `translate(${160 * counter}px,-50%) scale(${
      1 - 0.2 * counter
    }) perspective(20px) rotateY(-1deg)`;
    slider[i].style.zIndex = `${-counter}`;
    slider[i].style.filter = 'brightness(50%)';
  }
  counter = 0;
  for (let i = currItem - 1; i >= 0; i--) {
    counter++;
    slider[i].style.transform = `translate(${-160 * counter}px,-50%) scale(${
      1 - 0.2 * counter
    }) perspective(20px) rotateY(1deg)`;
    slider[i].style.zIndex = `${-counter}`;
    slider[i].style.filter = 'brightness(50%)';
  }
}

sliderShow();

nextBtn.addEventListener('click', () => {
  if (currItem != slider.length) {
    currItem++;
    sliderShow();
  }
});

prevBtn.addEventListener('click', () => {
  if (currItem != 0) {
    currItem--;
    sliderShow();
  }
});

const fades = document.querySelectorAll('.reference-fade');
fades.forEach((fadeEl) => {
  fadeEl.addEventListener('click', (e) => {
    console.log('I have been scrolled');
  });
});
