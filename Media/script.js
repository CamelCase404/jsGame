timerGame = document.querySelector("#timer-count");
gasoline = document.querySelector(".gasoline-number");
gasolineWidth = document.querySelector(".gasoline-value");
let gameStared = false;
const player = new Player();
function Main() {
    CheckNStart();
    document.getElementById("buttonStart").addEventListener("click", () => {
        gameStared = gameStartedFunc();
        if (gameStared == true) {
            startTimer(timerGame, gasoline, gasolineWidth);
            movePlayer(player);
        }
    });
}

Main();
