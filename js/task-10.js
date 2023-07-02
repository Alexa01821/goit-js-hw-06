function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const controlsRef = document.querySelector("#controls");
const inputNumberRef = controlsRef.querySelector("input");
const btnCreateRef = controlsRef.querySelector(
  "button[data-create]"
);
const btnDestroyRef = controlsRef.querySelector(
  "button[data-destroy]"
);
const boxesRef = document.querySelector("#boxes");

function createBoxes(amount) {
  const boxArray = [];
  let sizeBoxes = 20;
  for (let i = 0; i <= amount; i += 1) {
    sizeBoxes += 10;
    const boxElement = `
    <div style="width: ${sizeBoxes}px; height: ${sizeBoxes}px; background-color: ${getRandomHexColor()}; margin: 5px;"></div>
    `;
    boxArray.push(boxElement);
  }
  boxesRef.insertAdjacentHTML(
    "beforeend",
    boxArray.join("")
  );
}

btnCreateRef.addEventListener("click", onBtnCreateClick);
function onBtnCreateClick() {
  const minNumber = Number(
    inputNumberRef.getAttribute("min")
  );
  const maxNumber = Number(
    inputNumberRef.getAttribute("max")
  );
  if (
    inputNumberRef.value <= minNumber ||
    inputNumberRef.value >= maxNumber
  ) {
    alert(`${inputNumberRef.value} — не підходить. Введіть число в діапазоні від ${minNumber} до ${maxNumber}.`);
    inputNumberRef.value = "0";
  } else {
    createBoxes(inputNumberRef.value);
    inputNumberRef.value = "0";
  }
}

btnDestroyRef.addEventListener("click", destroyBoxes);
function destroyBoxes() {
  inputNumberRef.value = "0";
  boxesRef.textContent = "";
}
