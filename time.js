
function getTime() {

    const seconds = 1000;
    const minutes = seconds * 60;
    const hours = minutes * 60;
    const days = hours * 24;
    const currenTime = new Date();
    const etDate = new Date("2023/04/05");

    const divisor = etDate - currenTime;
    console.log(divisor);

    let setDay = Math.floor(divisor / days);
    let setMin = Math.floor((divisor % days) / hours);
    let setHour = Math.floor((divisor % hours) / minutes);
    let setSec = Math.floor((divisor % minutes) / seconds);
    // testing
    // console.log(setMin)
    // console.log(setDay)
    // console.log(setSec)
    // console.log(setDay)
    // console.log(etDate)
    // console.log(currenTime);


    let dayD = document.querySelector("#day-D");
    let hrD = document.querySelector("#hr-D");
    let minD = document.querySelector("#min-D");
    let secD = document.querySelector("#sec-D");


    setDay = setDay < 10 ? "0" + setDay : setDay;
    setHour = setHour < 10 ? "0" + setHour : setHour;
    setMin = setMin < 10 ? "0" + setMin : setMin;
    setSec = setSec < 10 ? "0" + setSec : setSec;

    dayD.innerHTML = setDay;
    hrD.innerHTML = setHour;
    minD.innerHTML = setMin;
    secD.innerHTML = setSec



}

setInterval(getTime, 1000)
// getTime()    