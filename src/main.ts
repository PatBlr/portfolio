import * as THREE from 'three';
import { Player } from './entities/Player';

document.body.addEventListener('click', () => {
  document.body.requestPointerLock();
});

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
const grid = new THREE.GridHelper(10000, 10000);
scene.add(grid);

const renderer = new THREE.WebGLRenderer({antialias: true});
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.setAnimationLoop( animate );
document.body.appendChild( renderer.domElement );

const player = new Player();

scene.add(player.getMesh());

camera.position.z = 5;
camera.position.y = 2;


function animate(timeDelta: number) {
    renderer.render(scene, camera);
}

