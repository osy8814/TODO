const Time = document.querySelector(`.clock`);
const date = document.querySelector(`.date`);

function genTime() {
    const currTime = new Date();
    const weeks = ["SUN", "MON", "TUE", "WED", "TRU", "FRI", "SAT"];

    const year = currTime.getFullYear();
    const month = currTime.getMonth() + 1;
    const day = currTime.getDate();
    const week = currTime.getDay();

    const hour = String(currTime.getHours()).padStart(2, "0");
    const min = String(currTime.getMinutes()).padStart(2, "0");
    const sec = String(currTime.getSeconds()).padStart(2, "0");

    date.innerHTML = `${month} / ${day}/ ${year} ${weeks[week]}`
    Time.innerHTML = `${hour}:${min}:${sec}`
}

setInterval(genTime, 1000);