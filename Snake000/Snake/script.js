let canvas = document.querySelector("#canvas");
let context = canvas.getContext("2d");

let directionX = 0;
let directionY = 0;

let snakeX = 0;
let snakeY = 0;
let snakeWidth = 20;
let snakeHeight = 20;

// let snake = {
//     x: 0,
//     y: 0,
//     width: 20,
//     height: 20,
//     speed: 10, 
// };

let speed = 10;

let width = 800;
let height = 600;

function checkCollision(x, y, w, h){
    if (x + w > width) {
        directionX = 0;
        snakeX -= speed;
    }
    if (x <= 0) {
        directionX = 0;
    }
    if (y + h > height) {
        directionY = 0;
        snakeY -= speed;
    }
    if (y <= 0) {
        directionY = 0;
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
initHandleInput();
setInterval(gameLoop, 1000/60);