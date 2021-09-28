 const canvas = document.getElementById("canvas");
 const ctx = canvas.getContext("2d");

 ctx.beginPath();
 ctx.rect(50, 50, 55, 55);
 ctx.fillStyle = "#F0000";
 ctx.fill();
 ctx.closePath();

ctx.beginPath();
ctx.arc(240, 160, 20, 0, Math.PI*2, false);
ctx.fillStyle = "red";
ctx.fill();
ctx.closePath();



 ctx.beginPath();
 ctx.rect(200, 10, 100, 40);
 ctx.strokeStyle = "rgba(0, 0, 255, 0.5)";
 ctx.stroke();
 ctx.closePath();


