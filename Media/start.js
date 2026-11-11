const input = document.querySelector("#username");
const btnStart = document.getElementById("buttonStart");
const wrap = document.getElementById("startWindow");
let playerName = undefined;
let checked = false;

function checkSymbs(input) {
    if (input.value.length >= 1) {
        return true;
    } else {
        return false;
    }
}

function CheckNStart() {
    btnStart.addEventListener("click", (listner) => {
        checked = checkSymbs(input);
        console.log(checked);
        if (checked == true) {
            playerName = input.value;
            wrap.style.display = "none";
            gameStarted = true;
            document.getElementById("username-block").textContent = playerName;
        }
    });
}

function gameStartedFunc() {
    return checked;
}
