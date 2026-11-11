class Player {
    playerObj = document.querySelector("#player");
    posX = 0;
    posY = 0;
    speed = 40;
    translatePlayer(velocity) {
        this.posX += velocity.x * this.speed;
        this.posY += velocity.y * this.speed;
        this.playerObj.style.transform = `translate(${this.posX}%,${this.posY}%)`;
        console.log("current pos:", this.posX, this.posY);
    }
}

let velocity = {
    x: 0,
    y: 0,
};
function movePlayer(player) {
    moveVector = "00";
    document.addEventListener("keydown", (event) => {
        if (event.key == "ArrowUp") {
            velocity.y -= 1;
        } else if (event.key == "ArrowDown") {
            velocity.y += 1;
        } else if (event.key == "ArrowRight") {
            velocity.x += 1;
        } else if (event.key == "ArrowLeft") {
            velocity.x -= 1;
        }
        player.translatePlayer(velocity);
        lastPressed = event.key;
        velocity.y = 0;
        velocity.x = 0;
    });
}
