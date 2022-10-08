setInterval(setClock, 1000);
const hourHand = document.querySelector('[data-hour-hand]')
const minuteHand = document.querySelector('[data-minute-hand]')
const secondHand = document.getElementById('[data-second-hand]')

function setClock(){
    const curDate = new Date();
    const secondRatio = curDate.getSeconds() / 60;
    const minuteRatio = (secondRatio + curDate.getMinutes()) / 60;
    const hourRatio = (minuteRatio + curDate.getHours()) / 12;

    setRotation(hourHand, hourRatio);
    setRotation(secondHand, secondRatio);
    setRotation(minuteHand, minuteRatio);
}


function setRotation(element, rotationRatio){
    element.style.setProperty('--rotation', rotationRatio * 360);
}

setClock()