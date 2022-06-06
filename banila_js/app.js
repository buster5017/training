const loginInput = document.querySelector(".form input");
const loginButton = document.querySelector(".form button");

function onLoginBtnClick() {
  console.log(loginInput.value);
}

loginButton.addEventListener("click", onLoginBtnClick);
