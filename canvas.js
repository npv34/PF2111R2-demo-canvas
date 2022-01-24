// ve hinh tron - arc();
let xCicrle = 100;
let yCircle = 100;
let xRect = 150;
let radiusCicrle = 20;
let direction = 'down';


let canvas = document.getElementById('my-canvas');
let ctx = canvas.getContext('2d');

function drawCicle(x, y) {
    ctx.beginPath(); // bat dau ve
    ctx.arc(x, y, radiusCicrle, 0, Math.PI * 2);
    ctx.fillStyle = 'red'; // fillStyle 
    ctx.fill();
}

// ve hinh chu nhat su dungj ham rect()

function drawRect(x, y, w, h, color) {
    ctx.beginPath(); // bat dau ve
    ctx.rect(x, y, w, h);
    ctx.fillStyle = color; // fillStyle 
    ctx.fill();
}
drawCicle(xCicrle, yCircle);
drawRect(xRect, 350, 100, 20, 'blue');

arrBrick = [];

function setUpBrick() {
    for (let i = 0; i < 10; i++) {
        // drawRect(50 * i, 50, 45, 20, 'yellow');
        arrBrick.push([50 * i, 50, true])

    }
}
setUpBrick();

function drawBrick() {
    for (let i = 0; i < arrBrick.length; i++) {
        if (arrBrick[i][2]) {
            drawRect(arrBrick[i][0], arrBrick[i][1], 45, 20, 'yellow');
        }
    }
}

// arrBrick[1][2] = false;



function autoMoveCicrle() {
    // xoa het canvas di
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawRect(xRect, 350, 100, 20, 'blue');
    drawBrick();
    // xu ly va cham voi bien ben phai
    if (yCircle + radiusCicrle >= canvas.height) {
        direction = 'up'
    } else if (yCircle == radiusCicrle) {
        direction = 'down'
    }

    switch (direction) {
        case 'down':
            yCircle += 5;
            break;
        case 'up':
            yCircle -= 5;
            break;
    }

    drawCicle(xCicrle, yCircle);
}

setInterval(autoMoveCicrle, 100);
window.addEventListener('keyup', function(e) {
    switch (e.keyCode) {
        case 37:
            xRect -= 10;
            break;
        case 39:
            xRect += 10;
            break;
    }
})