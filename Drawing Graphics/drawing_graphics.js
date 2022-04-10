//find html canvas 
var canv = document.getElementById("myCanvas");

//declar 2D context
var ctx=canv.getContext("2d");
//line width border 
ctx.lineWidth=3;
//stroke style or color 
ctx.strokeStyle="black";
//stock or border assign 
ctx.strokeRect(10,10,380,280);
//context color declaration
ctx.fillStyle = "green";
//declar rectangle 
ctx.fillRect(12,12,376,276);

//rectungular center calculate 
 var centerX=canv.width/2;
 var centerY=canv.height/2;

 //circle start point 
 ctx.beginPath();
 //circile intialized 
 ctx.arc(centerX,centerY,80,0,2*Math.PI,false);
 //circle color
 ctx.fillStyle="red";
 //circle fill
 ctx.fill();
 //circle storke 
 ctx.stroke();
 
