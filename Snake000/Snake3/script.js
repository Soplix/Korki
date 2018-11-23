let canvas = document.querySelector("#canvas");
let context = canvas.getContext("2d");

let poleXID = document.querySelector("#poleXID");
let poleYID = document.querySelector("#poleYID");

let amountOfApple = document.querySelector("#appleAmount")

let directionX = 0;
let directionY = 0;

let snakeX = 0;
let snakeY = 0;
let snakeWidth = 40;
let snakeHeight = 40;

let appleAmount = 0;
let isApplesCaught = 0;

let appleX = (Math.floor((Math.random() * 20) + 1)) * 40;
let appleY = (Math.floor((Math.random() * 20) + 1)) * 40;

// let snake = {
//     x: 0,
//     y: 0,
//     width: 20,
//     height: 20,
//     speed: 10, 
// };

let speed = 40;

let width = 800;
let height = 800;

let coordinatesX;
let coordinatesY;

function checkCollision(x, y, w, h){
    if (x + w > width) {
        snakeX = 0;
    }
    if (x < 0) {
        snakeX = 20 * 40;
    }
    if (y + h > height) {
        snakeY = 0;
    }
    if (y < 0) {
        snakeY = 20 * 40;
    }
}

function checkSecondObject(){
    if (appleX === snakeX && appleY === snakeY) {
        appleAmount = appleAmount + 1

        amountOfApple.textContent = appleAmount;
        
        appleX = (Math.floor((Math.random() * 19) + 1)) * 40;
        appleY = (Math.floor((Math.random() * 19) + 1)) * 40;


        context.clearRect(0, 0, width, height);

        context.fillRect(snakeX, snakeY, snakeWidth, snakeHeight);

        isApplesCaught = 0;


    }
}

function gameLoop(){
    // update 
    snakeX += directionX * speed;
    snakeY += directionY * speed;
    checkCollision(snakeX, snakeY, snakeWidth, snakeHeight);

    // render / draw
    context.clearRect(0, 0, width, height);
    context.fillRect(snakeX, snakeY, snakeWidth, snakeHeight);


}

function initHandleInput(){
    window.addEventListener("keydown", 
        function(e){
            if (e.code === "ArrowUp") {
                directionY = -1;
                directionX = 0;
            }
            if (e.code === "ArrowLeft") {
                directionX = -1;
                directionY = 0;
            }
            if (e.code === "ArrowRight") {
                directionX = 1;
                directionY = 0;
            }
            if (e.code === "ArrowDown") {
                directionY = 1;
                directionX = 0;
            }

        }
    );
}

function xID() {
    poleXID.textContent = (snakeX+snakeWidth)/40;
}

function yID() {
    poleYID.textContent = (snakeY+snakeHeight)/40;
}

initHandleInput();

setInterval(gameLoop, 200);

setInterval(xID, 200);
setInterval(yID, 200);

function appleAdd () {
    if (isApplesCaught === 0) {
        context.fillRect(appleX, appleY, snakeWidth, snakeHeight);
    }
}
setInterval(appleAdd, 200)

setInterval(checkSecondObject, 200);


