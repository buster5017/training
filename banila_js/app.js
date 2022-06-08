const loginForm = document.querySelector(".login-form");
const loginInput = document.querySelector(".login-form input");
const link = document.querySelector("a");
const greeting = document.querySelector(".greeting");
const HIDDEN_CLASSNAME = "hidden";

function onLoginSubmit(event) {
  event.preventDefault();
  const username = loginInput.value;
  loginForm.classList.add(HIDDEN_CLASSNAME);
  console.log(username);
  greeting.innerText = `Hello ${username}. Welcome to the Hello World!!`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

function handleLinkClick(event) {
  event.preventDefault();
  console.log(event);
  alert("clicked");
}

loginForm.addEventListener("submit", onLoginSubmit);
link.addEventListener("click", handleLinkClick);
