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
// key buttons
let rightPressed = false
let leftPressed = false

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
 function moveArc() {
   ctx.clearRect(0, 0, canvas.width, canvas.height)
   drawArc()
   drawPaddle()
   if (y + dy < 0 + ballRadius || y + dy > canvas.height - ballRadius) {
     dy=-dy
   }
   if (x + dx < 0 + ballRadius || x + dx > canvas.width - ballRadius) {
     dx=-dx
   }
   x+=dx
   y+=dy
 }
// key Event Listener 
document.addEventListener('keydown', keyDownHandler(), false)
document.addEventListener('keyup', keyUpHandler(), false)

function keyDownHandler(e) {
  if(e.keyCode === 39) {
    rightPressed = true;
  }
  else if (e.keyCode === 37) {
    leftPressed = true;
  }
}
function keyUpHandler(e) {
  if(e.keyCode === 39) {
    rightPressed = false;
  }
  else if(e.keyCode === 37) {
    leftPressed = false;
  }
}

 
 setInterval(moveArc, 10)

