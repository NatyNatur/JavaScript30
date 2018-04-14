const segundero = document.querySelector('.second-hand');
const minutero = document.querySelector('.min-hand');
const horario = document.querySelector('.hour-hand');

function setDate() {
  const now = new Date();

  const seconds = now.getSeconds();
  const secondsDegrees = ((seconds / 60) * 360) + 90; // se le suman los 90deg dejados por default en el css
  segundero.style.transform =`rotate(${secondsDegrees}deg)`;
  // muestra los segundos del minuto que está avanzando
  // console.log(seconds);

  const mins = now.getMinutes();
  const minsDegrees = ((mins / 60) * 360) + 90;
  minutero.style.transform = `rotate(${minsDegrees}deg)`;

  const hour = now.getHours();
  const hourDegrees = ((hour / 12) * 360) + 90;
  horario.style.transform = `rotate(${hourDegrees}deg)`;
}

setInterval(setDate, 1000);

setDate();