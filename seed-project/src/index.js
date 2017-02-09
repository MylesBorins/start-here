/* Copyright 2017 Google
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var content = document.getElementById('content');

function img(path, alt, mod) {
  return `<img src="${path}" alt="${alt}" class="${mod}">`;
}

function tux() {
  return img('images/tux.png', 'tux is a penguin');
}

function orb() {
  return img('images/orb.gif', 'space time yo', 'orb');
}

content.innerHTML = `${orb()} ${tux()} ${orb()}`;
