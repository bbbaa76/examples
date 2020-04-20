//for drawing app use!
var canvas = document.getElementById("appD");
var ctx = canvas.getContext("2d");
var width=canvas.width;
var height=canvas.height;

function cleanForReDraw(){
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

$("#red").click(function (){
   penColor= $("#red").attr("bgcolor");
})

$("#blue").click(function (){
   penColor= $("#blue").attr("bgcolor");
})

$("#green").click(function (){
   penColor= $("#green").attr("bgcolor");
})

$("#white").click(function (){
   penColor= $("#white").attr("bgcolor");
})

$("#clean").click(function(){
   cleanForReDraw();
})

$("#pen").click(function(){
  penColor = "black";
})

var penRadius = 2;
var dragging = false;
var penColor = "white";



var engage = function(e){
  dragging = true;
  putPoint(e);
}

var disengage = function(){
  dragging = false;
  ctx.beginPath();
}

var putPoint = function(e){
  ctx.lineWidth = penRadius * 2;
  ctx.fillStyle = penColor;
    if(dragging){
      ctx.lineTo(e.offsetX, e.offsetY);
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(e.offsetX, e.offsetY, penRadius, 0, Math.PI*2);
      ctx.strokeStyle= penColor;
      ctx.fill();
      ctx.beginPath();
      ctx.lineTo(e.offsetX, e.offsetY);
  }
}

canvas.addEventListener("mousedown", engage);
canvas.addEventListener("mousemove", putPoint);
canvas.addEventListener("mouseup", disengage);
//the end of drawing app use;
