
  
//   // define how many digit
//   var oneD = [1,9];
//   var twoD = [10,99];
//   var threeD =[100,999];
//   var fourD = [1000,9999];
//   //for init random number end;
  
//   //operation start;
//    var multiplication = function (xD, yD){
//     var x = randomRangeN(xD[0],xD[1]);
//     var y = randomRangeN(yD[0],yD[1]);
//     var z = x * y;
//     var sym = "X";
//     return {
//       x: x,
//       y: y,
//       z: z,
//       sym: sym
//     };
//   };
  
// var addition = function (xD, yD){
//   var x = randomRangeN(xD[0],xD[1]);
//   var y = randomRangeN(yD[0],yD[1]);
//   var z = x + y;
//   var sym = "+";
//   return {
//     x: x,
//     y: y,
//     z: z,
//     sym: sym
//   };
// };
  
//   var divsion = function (zD, yD){
//     var z = randomRangeN(zD[0],zD[1]);
//     var y = randomRangeN(yD[0],yD[1]);
//     var x = z * y;
//     var sym = "/"
//     return {
//       x: x,
//       y: y,
//       z: z,
//       sym: sym
//     };
//   };
  
//   var subtraction = function (zD, yD){
//     var z = randomRangeN(zD[0],zD[1]);
//     var y = randomRangeN(yD[0],yD[1]);
//     var x = z + y;
//     var sym = "-"
//     return {
//       x: x,
//       y: y,
//       z: z,
//       sym: sym
//     };
//   };
  
// var operation = [
//     addition,
//     subtraction,
//     multiplication,
//     divsion
// ];

//   var createNumberObject = function (xDp,yDp,zDp,xDm,yDm,zDm){
//     var randomN = randomRangeN(0,3);
//     switch (randomN){
//       case 0:
//         var numberObject = operation[0](xDp,yDp);
//         break;
//       case 1:
//           var numberObject = operation[1](zDp,yDp);
//           break;
//       case 2:
//           var numberObject = operation[2](xDm,yDm);
//           break;
//       case 3:
//           var numberObject = operation[3](zDm,yDm);
//           break;
//     };
//     return{
//        randomN: randomN,
//        numberObject: numberObject
//     };
//   };
  
//   function initQuestion (){
//     var newNumberObject = createNumberObject(threeD,twoD,twoD,twoD,oneD,twoD);
//     var numberObject = newNumberObject.numberObject;
//     var randomN = newNumberObject.randomN;
//     var firstNum = numberObject.x;
//     var secondNum = numberObject.y;
//     var result = numberObject.z;
  
//    switch (randomN){
//       case 0:
//         var sym = "+";
//         break;
//       case 1:
//         var sym = "-";
//         break;
//       case 2:
//         var sym = "*";
//         break;
//       case 3:
//         var sym = "/";
//         break;
//   }
  
//   }

// for init an random Number;
function randomRangeN(minN, maxN){
    return Math.floor(Math.random() * (maxN - minN + 1)) + minN ;
}
// for init random number end;

// for addition operation
var addition = function (whichLevel){
    var firstNumber;
    var secondNumber;
    
    if(whichLevel == "easy"){
        var firstNumber = randomRangeN(1, 9);
        var secondNumber = randomRangeN(1, 9);
    }

    if(whichLevel == "middle"){
        var firstNumber = randomRangeN(10, 99);
        var secondNumber = randomRangeN(10, 99);
    }

    if(whichLevel == "difficult"){
        var firstNumber = randomRangeN(100, 999);
        var secondNumber = randomRangeN(100, 999);
    }

    return {firstNumber: firstNumber,
            secondNumber: secondNumber,
            result: firstNumber + secondNumber
    }

  };
// for addition operation


$(document).ready(



    function(){
        $("#easy").click(
            function(){
                var easyAddition = addition("easy");
                $("#first_num").text(easyAddition.firstNumber);
                $("#second_num").text(easyAddition.secondNumber);
                $("#opt").text("+");
            }
        )

        $("#middle").click(
            function(){
                var easyAddition = addition("middle");
                $("#first_num").text(easyAddition.firstNumber);
                $("#second_num").text(easyAddition.secondNumber);
                $("#opt").text("+");
            }
        )

        $("#difficult").click(
            function(){
                var easyAddition = addition("difficult");
                $("#first_num").text(easyAddition.firstNumber);
                $("#second_num").text(easyAddition.secondNumber);
                $("#opt").text("+");
            }
        )
    
  
    }
  


    


)