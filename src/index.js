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
