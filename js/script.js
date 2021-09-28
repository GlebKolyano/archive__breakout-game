 const canvas = document.getElementById("canvas");
 const ctx = canvas.getContext("2d");

 let x = canvas.width/2;
 let y = canvas.height-10;
 let dx = 1;
 let dy = -1;

 let ballRadius = 10
 // score
 let score = 0;
// rect paddle

let paddHeight = 10
let paddWidth = 75
let paddleX = (canvas.width - paddWidth) / 2

// bricks 
let brickRowCount = 4;
let brickColumnCount = 5;
let brickWidth = 75;
let brickHeight = 20;
let brickPadding = 10;
let brickOffsetTop = 30;
let brickOffsetLeft = 30;


// drawing bricks //
///////////////////
let bricks = [];
for(let c=0; c<brickColumnCount; c++) {
  bricks[c] = [];
  for(let r=0; r<brickRowCount; r++) {
    bricks[c][r] = {x: 0, y: 0, status: 1}
  }
}
function drawBricks() {
    for(let c=0; c<brickColumnCount; c++) {
        for(let r=0; r<brickRowCount; r++) {
            if(bricks[c][r].status == 1) {
              let brickX = (c*(brickWidth+brickPadding)+brickOffsetLeft)
              let brickY = (r*(brickHeight+brickPadding)+brickOffsetTop)
              bricks[c][r].x = brickX;
              bricks[c][r].y = brickY;
              ctx.beginPath();
              ctx.rect(brickX, brickY, brickWidth, brickHeight)
              ctx.fillStyle = "#0095DD";
              ctx.fill();
              ctx.closePath();
            }
          }
  
        }
}

// Обработчик собыйтий на нажатие кнопки //
//////////////////////////////////////////
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




// collision detecter //
///////////////////////
function collisionDetection() {
  for(let c = 0; c < brickColumnCount; c++) {
    for(let r = 0; r < brickRowCount; r++) {
      let b = bricks[c][r]
      if(b.status == 1) {
        if(x+(ballRadius/2) > b.x && x+(ballRadius/2) < b.x + brickWidth && y-(ballRadius/2) > b.y && y-(ballRadius/2) < b.y + brickHeight){
          dy=-dy
          b.status = 0
          score++
          if(score== brickColumnCount*brickRowCount) {
            alert('YOU WIN!')
            document.location.reload()
            
          }
        }
      }
    }
  }
}
// draw score //
///////////////
function drawScore() {
  ctx.font = '22px Arial'
  ctx.fillStyle = "#0095DD";
  ctx.fillText('Score: '+score, 5, 20)
}
// draw Arc //
/////////////
 function drawArc() {
   ctx.beginPath();
   ctx.arc(x, y, ballRadius, 0, Math.PI*2, false);
   ctx.fillStyle = "red";
   ctx.fill();
   ctx.closePath();
 }
 // draw Paddle //
 ////////////////
 function drawPaddle() {
   ctx.beginPath()
   ctx.rect(paddleX, canvas.height-paddHeight, paddWidth, paddHeight)
   ctx.fillStyle = "blue"
   ctx.fill()
   ctx.closePath();
 };

// move Arc //
/////////////
 function move() {
   ctx.clearRect(0, 0, canvas.width, canvas.height)
   drawBricks()
   collisionDetection()
   drawScore()
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
 };
 
 let interval = setInterval(move, 10);

