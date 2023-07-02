const inputRef = document.querySelector(
  "#validation-input"
);

inputRef.addEventListener("blur", onInputRefBlur);
function onInputRefBlur() {
  const lengthValue = inputRef.value.length;
  const maxLengthValue = inputRef.dataset.length;
  if (lengthValue > maxLengthValue || lengthValue === 0) {
    inputRef.classList.remove("valid");
    inputRef.classList.add("invalid");
  } else {
    inputRef.classList.remove("invalid");
    inputRef.classList.add("valid");
  }
}
