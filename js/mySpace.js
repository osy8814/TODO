const viewUserName = document.querySelector(`.viewUser`);
const logoutIcon = document.createElement(`i`);
const changeBackgroundBtn = document.querySelector(`.mySpace button`);
let UserName = localStorage.getItem(`Username`);

logoutIcon.classList.add("fas");
logoutIcon.classList.add("fa-door-open");
logoutIcon.setAttribute("title", "log Out");
setInterval(() => {
    viewUserName.innerHTML = `${UserName}'s Space`;
    viewUserName.appendChild(logoutIcon);
}, 3000);

function logOut() {
    localStorage.removeItem("Username");
    window.location.reload();
}

logoutIcon.addEventListener("click", logOut);

function changebackground() {
    let Idx = Math.round(Math.random() * 15) + 1;
    url = `../img/${Idx}.jpg`;

    document.body.style.background = `url(${url}) no-repeat`;
    document.body.style.backgroundSize = `cover`;
}
changeBackgroundBtn.addEventListener("click", changebackground);
