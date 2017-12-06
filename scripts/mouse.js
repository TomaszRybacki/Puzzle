let activePuzzel;
let puzzelIsActive;
let clickedDiv;

const sound = document.createElement('audio');
sound.setAttribute('src', 'sounds/click.mp3');

document.addEventListener('mousedown', (event) => {
  if (event.target.className === 'puzzle') {
    activePuzzel = event.target;
    activePuzzel.style.zIndex = '15';
    puzzelIsActive = true;
  }
}, false);

document.addEventListener('mouseup', (event) => {
  puzzelIsActive = false;
  activePuzzel.style.zIndex = '10';
  clickedDiv = event.target;

  if (activePuzzel.alt === clickedDiv.id) {
    if (clickedDiv.className === 'shape-1 top' || clickedDiv.className === 'shape-3 top') {
      activePuzzel.style.left = clickedDiv.offsetLeft + 'px';
      activePuzzel.style.top = clickedDiv.offsetTop - 36 + 'px';
      sound.play();
    } else {
      activePuzzel.style.left = clickedDiv.offsetLeft + 'px';
      activePuzzel.style.top = clickedDiv.offsetTop + 'px';
      sound.play();
    }
  }
}, false);

document.addEventListener('mousemove', (event) => {
  if (puzzelIsActive) {
    activePuzzel.style.left = event.clientX - (activePuzzel.offsetWidth / 2) + 'px';
    activePuzzel.style.top = event.clientY - (activePuzzel.offsetHeight / 2) + 'px';
  }
}, false);

