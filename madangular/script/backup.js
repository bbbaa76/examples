
//for init an random Number;
function randomRangeN(minN, maxN){
  return Math.floor(Math.random() * (maxN - minN + 1)) + minN ;
}
//digit
var oneD = [1,9];
var twoD = [10,99];
var threeD =[100,999];
var fourD = [1000,9999];
//for init random number end;

//operation start;
function multiplication(xD,yD){
  var x = randomRangeN(xD[0],xD[1]);
  var y = randomRangeN(yD[0],yD[1]);
  var z = x * y;
  return {
    x: x,
    y: y,
    z: z
  };
}

function addition(xD,yD){
  var x = randomRangeN(xD[0],xD[1]);
  var y = randomRangeN(yD[0],yD[1]);
  var z = x + y;
  return {
    x: x,
    y: y,
    z: z,
  };
}

function divsion(zD,yD){
  var z = randomRangeN(zD[0],zD[1]);
  var y = randomRangeN(yD[0],yD[1]);
  var x = z * y;
  return {
    x: x,
    y: y,
    z: z,
  };
}

function subtraction(zD,yD){
  var z = randomRangeN(zD[0],zD[1]);
  var y = randomRangeN(yD[0],yD[1]);
  var x = z + y;
  return {
    x: x,
    y: y,
    z: z,
  };
}

var operation = [
  addition,
  subtraction,
  multiplication,
  divsion
];
//operation end;

//add questions start;
function addCtx(firstNum, secondNum, randomN,result){
    $("#firstX").text(firstNum);
    $("#secondY").text(secondNum);
    $("#temAns").text(result);
    switch (randomN){
      case 0:
        $("#operator").text("+");
        break;
      case 1:
          $("#operator").text("-");
          break;
      case 2:
          $("#operator").text("X");
          break;
      case 3:
          $("#operator").text("/");
          break;
    }
}
//add questions end;

//collect the drop field answer start;
function collectAnswer(){
   var onesD = Number($("td#onesD > span").text());
   var tensD = Number($("td#tensD > span").text()) *10;
   var hndsD = Number($("td#hndsD > span").text()) *100;
   var thdsD = Number($("td#thdsD > span").text()) *1000;
   var tthdsD = Number($("td#tthdsD > span").text()) *10000;
   var hthdsD = Number($("td#hthdsD > span").text()) *100000;
   var totalD = onesD+tensD+hndsD+thdsD+tthdsD+hthdsD;
   return{
     totalD: totalD
   };
}
//collect the drop field answer ending;

function createNumberObject(xDp,yDp,zDp,xDm,yDm,zDm){
  var randomN = randomRangeN(0,3);
  switch (randomN){
    case 0:
      var numberObject = operation[0](xDp,yDp);
      break;
    case 1:
        var numberObject = operation[1](zDp,yDp);
        break;
    case 2:
        var numberObject = operation[2](xDm,yDm);
        break;
    case 3:
        var numberObject = operation[3](zDm,yDm);
        break;
  };
  return{
     randomN: randomN,
     numberObject: numberObject
  };
}

function preForStart(){
  $("td.droppable >span").remove();
  $("#imgFace").removeAttr("src");
  cleanForReDraw();
}

//click button field;
$("button#easy").click(function (){
    preForStart();
    var newNumberObject = createNumberObject(twoD,twoD,twoD,twoD,oneD,twoD);
    var numberObject = newNumberObject.numberObject;
    var randomN = newNumberObject.randomN;
    var firstNum = numberObject.x;
    var secondNum = numberObject.y;
    var result = numberObject.z;
    addCtx(firstNum, secondNum, randomN, result);
    $("#lev").text("easyC");
})

$("button#middle").click(function(){
  preForStart();
  var newNumberObject = createNumberObject(threeD,threeD,threeD,twoD,twoD,threeD);
  var numberObject = newNumberObject.numberObject;
  var randomN = newNumberObject.randomN;
  var firstNum = numberObject.x;
  var secondNum = numberObject.y;
  var result = numberObject.z;
  addCtx(firstNum, secondNum, randomN, result);
  $("#lev").text("middleC");
})

$("button#high").click(function (){
  preForStart();
  var newNumberObject = createNumberObject(fourD,fourD,fourD,threeD,twoD,threeD);
  var numberObject = newNumberObject.numberObject;
  var randomN = newNumberObject.randomN;
  var firstNum = numberObject.x;
  var secondNum = numberObject.y;
  var result = numberObject.z;
  addCtx(firstNum, secondNum, randomN, result);
  $("#lev").text("highC");

})

$("#reset").click(function(){
   $("td.droppable >span").remove();
})

$("#submit").click(function(){
   var totalD = collectAnswer().totalD;
   var result = $("#temAns").text();
   if (totalD == result){
     $("#imgFace").attr({
       src:'img/happyFace.png'
     });
     var lev = $("#lev").text();
     var gId = Number($('#' +lev).text());
     gId += 1;
     $("#" +lev).text(gId);
     var totalS = Number($("#totalS").text());
     totalS += 1;
     $("#totalS").text(totalS);
   }
   else {
     $("#imgFace").attr({
       src:'img/sadFace.png'
     })
   }
})
//end of click button field;


//for drag and drop start;
$(document).ready(function(){
$(".draggable").draggable({
	helper: 'clone'
});

$(".droppable").droppable({
    accept: ".draggable",
	drop: function (event, ui) {
    var box= $(this).attr('id');
		ui.helper.clone().appendTo('#'+box);
    }
});
});
//for drag and drop end;
//

//


//
