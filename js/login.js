const loginForm = document.querySelector(".login")
const login = document.querySelector(".login-label");
const Sayhello = document.querySelector(".Sayhello");
const con = document.querySelector(".con");

const CLASSNAME_HIDE = "hide";
const KEY_USERNAME = "Username";

function logIn(event) {
    event.preventDefault();
    const User = document.querySelector(".userName");
    let UserName = User.value;
    localStorage.setItem(KEY_USERNAME, UserName);


    login.style.animation = "fadeOut 2s";
    setInterval(() => { login.classList.add(CLASSNAME_HIDE); }, 1900);
    setInterval(greeting, 2000);
}

function greeting() {
    UserName = localStorage.getItem(KEY_USERNAME);

    Sayhello.style.animation = "fadeIn 2s";
    Sayhello.innerHTML = `Hello,${UserName}!`;
    setInterval(hideForm, 2000);
}
function hideForm() {
    loginForm.style.animation = "fadeOut 2s";
    setInterval(() => {
        loginForm.classList.add(CLASSNAME_HIDE);
        popUpCon();
    }, 1900);

}
function popUpCon() {
    con.classList.remove(CLASSNAME_HIDE);
    con.style.animation = "fadeIn 2s";
}


loginForm.addEventListener("submit", logIn);

const loadLocalStorage = localStorage.getItem(KEY_USERNAME);
if (loadLocalStorage !== null) {
    login.classList.add(CLASSNAME_HIDE);
    greeting();
}