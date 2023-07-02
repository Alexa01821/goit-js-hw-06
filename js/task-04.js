const counterValue = document.querySelector("#value");
let newCounterValue = 0;

const buttonDecrement = document.querySelector(
  'button[data-action="decrement"]'
);
const buttonIncrement = document.querySelector(
  'button[data-action="increment"]'
);

buttonDecrement.addEventListener(
  "click",
  onClickButtonDecrement
);
function onClickButtonDecrement() {
  newCounterValue -= 1;
  counterValue.textContent = newCounterValue;
}

buttonIncrement.addEventListener(
  "click",
  onClickButtonIncrement
);
function onClickButtonIncrement() {
  newCounterValue += 1;
  counterValue.textContent = newCounterValue;
}
