function playSound(e) {
  // console.log(e.keyCode);
  // const audio = document.querySelector('audio[data-key=65]') -> ES6 template
  const audio = document.querySelector(`audio[data-key='${e.keyCode}']`);
  const key = document.querySelector(`.key[data-key='${e.keyCode}']`);
  // console.log(audio);
  // console.log(key);
  
  if(!audio)
    return; // si no existe el audio correspondiente al keyCode, se detiene la función

  audio.currentTime = 0;
  audio.play();

  key.classList.add('playing');
}

function removeTransition(e) {
  // console.log(e);
  // si la propiedad es distinta de 'transform', sáltalo
  if(e.propertyName !== 'transform')
    return;
  this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
// cuando la transición del key haya terminado, quítala
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

window.addEventListener('keydown', playSound);
