
function getTime() {

    const seconds = 1000;
    const minutes = seconds * 60;
    const hours = minutes * 60;
    const days = hours * 24;
    const currenTime = new Date();
    const etDate = new Date("2023/04/05");

    const divisor = etDate - currenTime;
    console.log(divisor);

    const setDay =   Math.floor(divisor / days);
    const setMin = Math.floor((divisor%days)/hours)
    const setHour = Math.floor((divisor%hours)/minutes)
    const setSec = Math.floor((divisor%minutes)/seconds)
    console.log(setMin)
    console.log(setDay)
    console.log(setSec)



    console.log(setDay)


    console.log(etDate)
    console.log(currenTime);


    let dayD = document.querySelector("#day-D");
    let hrD = document.querySelector("#hr-D");
    let minD = document.querySelector("#min-D");
    let secD = document.querySelector("#sec-D");

    dayD.innerHTML=setDay;
    hrD.innerHTML = setHour;
    minD.innerHTML = setMin;
    secD.innerHTML = setSec
    // setTimeout(setSec, 1000)


}

setInterval(getTime, 1000)
// getTime()