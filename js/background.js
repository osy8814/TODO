const backgroundIdx = Math.round(Math.random() * 15) + 1;
url = `../img/${backgroundIdx}.jpg`;

document.body.style.background = `url(${url}) no-repeat`;
document.body.style.backgroundSize = `cover`;