function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const body = document.querySelector('body');
const nameColorRef = body.querySelector('.color');
const btnChangeColor = body.querySelector('.change-color');

btnChangeColor.addEventListener('click', onBtnChangeColorClick);
function onBtnChangeColorClick(){
  const randColor = getRandomHexColor();
  body.style.backgroundColor = randColor;
  nameColorRef.textContent = randColor;
}
