const inputRef = document.querySelector(
  "#validation-input"
);

inputRef.addEventListener("blur", onInputRefBlur);
function onInputRefBlur() {
  const lengthValue = inputRef.value.length;
  const maxLengthValue = inputRef.dataset.length;
  if (lengthValue > maxLengthValue) {
    inputRef.classList.remove("valid");
    inputRef.classList.add("invalid");
  } else {
    inputRef.classList.remove("invalid");
    inputRef.classList.add("valid");
  }
}
