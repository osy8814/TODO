const API_KEY = "a542f08d3d9838315f9f932ae507639e";

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
    fetch(url)
        .then(response => response.json())
        .then((data) => {
            const city = document.querySelector(".weather span:first-child");
            const weather = document.querySelector(".weather span:last-child");
            city.innerText = `${data.name}`;
            weather.innerText = `${data.weather[0].main} / ${data.main.temp}℃`;


        });
}
function onGeoError() {
    alert("Location not found.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);