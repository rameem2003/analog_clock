function setClock(){
    let hourHand = document.getElementById("hour");
    let minuteHand = document.getElementById("minute");
    let secondHand = document.getElementById("second");

    const curDate = new Date();
    const secondRatio = curDate.getSeconds() / 60;
    const minuteRatio = curDate.getMinutes() / 60;
    const hourRatio = curDate.getHours() / 12;

    secondHand.style.transform = `rotate(${secondRatio * 360}deg)`;
    minuteHand.style.transform = `rotate(${minuteRatio * 360}deg)`;
    hourHand.style.transform = `rotate(${hourRatio * 360}deg)`;
    setInterval(setClock, 1000);
}

setClock();