setInterval(setClock, 1000);
const hourHand = document.querySelector('[data-hour-hand]')
const minuteHand = document.querySelector('[data-minute-hand]')
const secondHand = document.getElementById('[data-second-hand]')

function setClock(){
    const curDate = new Date();
    const secondTime = curDate.getSeconds() / 60;
    const minuteTime = (secondTime + curDate.getMinutes()) / 60;
    const hourTime = (minuteTime + curDate.getHours()) / 12;

    setRotation(secondHand, secondTime);
    setRotation(minuteHand, minuteTime)
    setRotation(hourHand, hourTime);
}


function setRotation(document, rotationRatio){
    document.style.setProperty("--rotation", rotationRatio * 360);
}

setClock()