let canvas = document.querySelector("#canvas");
let context = canvas.getContext("2d");

let poleXID = document.querySelector("#poleXID");
let poleYID = document.querySelector("#poleYID");

let amountOfApple = document.querySelector("#appleAmount");

let directionX = 0;
let directionY = 0;

let snake = {
    x: 0,
    y: 0,
    width: 40,
    height: 40,
    speed: 40,
    length: 3
};

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

let width = 800;
let height = 800;

let coordinatesX;
let coordinatesY;

function checkWorldCollision(x, y, w, h){
    if (x + w > width) {
        snake.x = 0;
    }
    if (x < 0) {
        snake.x = 20 * 40;
    }
    if (y + h > height) {
        snake.y = 0;
    }
    if (y < 0) {
        snake.y = 20 * 40;
    }
}

function updateSnakeTail() {
    tail.push({x: snake.x, y: snake.y});
    if (tail.length > snake.length)
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
    snake.x += directionX * snake.speed;
    snake.y += directionY * snake.speed;
    
    let snakePos = {
        x: snake.x,
        y: snake.y
    };
    updateSnakeTail();

    checkWorldCollision(snake.x, snake.y, snake.width, snake.height);
    if (checkCollisionAndRollPosition(applePos, snakePos)){
        appleAmount++;
        snake.length++;
    }
    updateUI();


    // render / draw
    context.clearRect(0, 0, width, height);
    context.fillStyle="#FF0000";
    context.fillRect(applePos.x, applePos.y, snake.width, snake.height);

    tail.forEach(function (tailPos){
        context.fillStyle="#009900";    
        context.fillRect(tailPos.x, tailPos.y, snake.width, snake.height);
    });
    context.fillStyle="#00FF00";    
    context.fillRect(snake.x, snake.y, snake.width, snake.height);

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
    poleYID.textContent = (snake.y + snake.height)/40;
    poleXID.textContent = (snake.x + snake.width)/40;
    amountOfApple.textContent = appleAmount;
}

initHandleInput();

setInterval(gameLoop, 200);