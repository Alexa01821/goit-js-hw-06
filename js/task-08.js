const formRef = document.querySelector(".login-form");

formRef.addEventListener(
  "submit",
  onFormRefBtnClick
);
function onFormRefBtnClick(event) {
  event.preventDefault();
  const { email, password } = event.currentTarget.elements;
  if (!email.value || !password.value) {
    return alert("All fields must be filled!");
  } else {
    const userElementsForm = {
      email: email.value,
      password: password.value,
    };
    event.currentTarget.reset();
    console.log (userElementsForm);
  }
}
