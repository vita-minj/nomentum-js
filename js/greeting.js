const loginInput = document.querySelector("#login-form input");
const loginForm = document.querySelector("#login-form");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
    event.preventDefault(); 
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    paintGreeing(username);
}
function paintGreeing(username) {
    greeting.innerText = `Hello ${username}!`
    clock.classList.remove(HIDDEN_CLASSNAME);
    greeting.classList.remove(HIDDEN_CLASSNAME);

}

const saveUsername = localStorage.getItem(USERNAME_KEY);
if(saveUsername ===null ) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    clock.classList.add(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    paintGreeing(saveUsername);
}
