 const canvas = document.getElementById("canvas");
 const ctx = canvas.getContext("2d");

 let x = canvas.width/2;
 let y = canvas.height-10;
 let dx = 1;
 let dy = -1;

 let ballRadius = 10
// rect paddle
let paddHeight = 10
let paddWidth = 75
let paddleX = (canvas.width - paddWidth) / 2
// Обработчик собыйтий на нажатие кнопки
let rightPressed = false
let leftPressed = false

document.addEventListener('keydown', keyDownHandler, false);
document.addEventListener('keyup', keyUpHandler, false);

function keyDownHandler(e) {
  if(e.keyCode === 39) {
    rightPressed = true;
  }
  else if (e.keyCode === 37) {
    leftPressed = true;
  }
};
function keyUpHandler(e) {
  if(e.keyCode === 39) {
    rightPressed = false;
  }
  else if(e.keyCode === 37) {
    leftPressed = false;
  }
};

// draw Arc
 function drawArc() {
   ctx.beginPath();
   ctx.arc(x, y, ballRadius, 0, Math.PI*2, false);
   ctx.fillStyle = "red";
   ctx.fill();
   ctx.closePath();
 }
 // draw Paddle
 function drawPaddle() {
   ctx.beginPath()
   ctx.rect(paddleX, canvas.height-paddHeight, paddWidth, paddHeight)
   ctx.fillStyle = "blue"
   ctx.fill()
   ctx.closePath();
 };
// move Arc
 function move() {
   ctx.clearRect(0, 0, canvas.width, canvas.height)
   drawArc()
   drawPaddle()
   // checking walls arc
   if(y + dy < ballRadius) {
        dy = -dy;
    }
    else if(y + dy > canvas.height-ballRadius) {
        if(x > paddleX && x < paddleX + paddWidth) {
            dy = -dy;
        }
        else {
            alert("GAME OVER");
            document.location.reload();
            clearInterval(interval); 
        }
    }
   if (x + dx < 0 + ballRadius || x + dx > canvas.width - ballRadius) {
     dx=-dx
   }

   // checking walls paddle
   if (rightPressed && paddleX < canvas.width - paddWidth) {
    paddleX+=7
   }
   else if (leftPressed && paddleX > 0) {
    paddleX-=7
   }
   x+=dx
   y+=dy
 }
 
 let interval = setInterval(move, 10)

