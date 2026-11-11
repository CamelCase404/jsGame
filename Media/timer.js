let min = 0;
let sec = 0;
let charge = 50;
function timer(timerField, gasoline, gasolineWidth) {
    sec += 1;
    charge -= 1;
    if (sec >= 60) {
        sec = 0;
        min += 1;
    }
    minField = "0";
    secField = "0";
    if (min >= 10) {
        minField = min.toString();
    } else {
        minField += min.toString();
    }
    if (sec >= 10) {
        secField = sec.toString();
    } else if (sec < 10) {
        secField += sec.toString();
    }
    timerField.textContent = minField + ":" + secField;
    gasoline.textContent = charge;
    gasolineWidth.style.width = charge + "%";
}

function startTimer(timerField, gasoline, gasolineWidth) {
    setInterval(timer, 1000, timerField, gasoline, gasolineWidth);
}
