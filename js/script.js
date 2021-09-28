 const canvas = document.getElementById("canvas");
 const ctx = canvas.getContext("2d");

 let x = canvas.width/2;
 let y = canvas.height-10;
 let dx = 1;
 let dy = -1;

 let ballRadius = 10




 function drawArc() {
   ctx.beginPath();
   ctx.arc(x, y, ballRadius, 0, Math.PI*2, false);
   ctx.fillStyle = "red";
   ctx.fill();
   ctx.closePath();
 }

 function moveArc() {
   ctx.clearRect(0, 0, canvas.width, canvas.height)
   drawArc()
   if (y + dy < 0 + ballRadius || y + dy > canvas.height - ballRadius) {
     dy=-dy
   }
   if (x + dx < 0 + ballRadius || x + dx > canvas.width - ballRadius) {
     dx=-dx
   }
   x+=dx
   y+=dy
 }
 setInterval(moveArc, 10)

