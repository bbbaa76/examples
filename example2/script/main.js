
// for init an random Number;
function randomRangeN(minN, maxN){
    return Math.floor(Math.random() * (maxN - minN + 1)) + minN ;
}

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