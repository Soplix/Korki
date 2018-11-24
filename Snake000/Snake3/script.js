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

let snakeLength = 3;

let appleAmount = 0;

let tail = [];

let applePos = {
    x: (Math.floor((Math.random() * 20) + 1)) * 40, 
    y: (Math.floor((Math.random() * 20) + 1)) * 40
};


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

function checkWorldCollision(x, y, w, h){
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

function updateSnakeTail() {
    tail.push({x: snakeX, y: snakeY});
    if (tail.length > snakeLength)
    {
        tail.shift();
    }
}

function checkCollisionAndRollPosition (objA, objB) {
    if (objA.x === objB.x && objA.y === objB.y) {
        objA.x = (Math.floor((Math.random() * 19) + 1)) * 40;
        objA.y = (Math.floor((Math.random() * 19) + 1)) * 40;
        return true;
    }
    return false;
}

function gameLoop(){
    // update 
    snakeX += directionX * speed;
    snakeY += directionY * speed;
    let snakePos = {
        x: snakeX,
        y: snakeY
    };
    updateSnakeTail();

    checkWorldCollision(snakeX, snakeY, snakeWidth, snakeHeight);
    if (checkCollisionAndRollPosition(applePos, snakePos)){
        appleAmount++;
        snakeLength++;
    }
    updateUI();


    // render / draw
    context.clearRect(0, 0, width, height);
    context.fillStyle="#FF0000";
    context.fillRect(applePos.x, applePos.y, snakeWidth, snakeHeight);

    tail.forEach(function (tailPos){
        context.fillStyle="#009900";    
        context.fillRect(tailPos.x, tailPos.y, snakeWidth, snakeHeight);
    });
    context.fillStyle="#00FF00";    
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

function updateUI() {
    poleYID.textContent = (snakeY+snakeHeight)/40;
    poleXID.textContent = (snakeX+snakeWidth)/40;
    amountOfApple.textContent = appleAmount;
}

initHandleInput();

setInterval(gameLoop, 200);