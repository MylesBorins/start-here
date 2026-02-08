/*
Copyright 2020 Myles Borins

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

import { Particle, drawConnections } from './particle.mjs';

const canvas = document.getElementById('particles');
const ctx = canvas.getContext('2d');

let width = canvas.width = window.innerWidth;
let height = canvas.height = window.innerHeight;

const mouse = { x: width / 2, y: height / 2 };
const particles = [];
const connectionDistance = 150;
const mouseRadius = 200;

const config = {
  width: () => width,
  height: () => height,
  getCenterRadius: () => Math.min(width, height) * 0.25,
  mouse,
  mouseRadius
};

function getParticleCount() {
  const area = width * height;
  return Math.floor(area / 8000);
}

function init() {
  particles.length = 0;
  const count = getParticleCount();
  for (let i = 0; i < count; i++) {
    particles.push(new Particle(config));
  }
}

function animate() {
  ctx.clearRect(0, 0, width, height);

  particles.forEach(p => {
    p.update();
    p.draw(ctx);
  });

  drawConnections(ctx, particles, connectionDistance);
  requestAnimationFrame(animate);
}

window.addEventListener('mousemove', (e) => {
  mouse.x = e.clientX;
  mouse.y = e.clientY;
});

window.addEventListener('resize', () => {
  width = canvas.width = window.innerWidth;
  height = canvas.height = window.innerHeight;
  init();
});

init();
animate();
