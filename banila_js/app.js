const loginInput = document.querySelector(".form input");
const loginButton = document.querySelector(".form button");

function onLoginBtnClick() {
  const username = loginInput.value;
  if (username === "") {
    alert("please write your name");
  } else if (username.length > 15) {
    alert("Your name is too long.");
  }
}

loginButton.addEventListener("click", onLoginBtnClick);
