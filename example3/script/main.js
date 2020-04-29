
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

    function() {

        var result;
        var scorePositive = 0;
        var scoreNegative = 0;

        $("#easy").click(
            function(){
                $("#userResult").val("");
                var easyAddition = addition("easy");
                result = easyAddition.result;
                $("#first_num").text(easyAddition.firstNumber);
                $("#second_num").text(easyAddition.secondNumber);
                $("#opt").text("+");
            }
        )

        $("#middle").click(
            function(){
                $("#userResult").val("");
                var middleAddition = addition("middle");
                result = middleAddition.result;
                $("#first_num").text(middleAddition.firstNumber);
                $("#second_num").text(middleAddition.secondNumber);
                $("#opt").text("+");
            }
        )

        $("#difficult").click(
            function(){
                $("#userResult").val("");
                var difficultAddition = addition("difficult");
                result = difficultAddition.result;
                $("#first_num").text(difficultAddition.firstNumber);
                $("#second_num").text(difficultAddition.secondNumber);
                $("#opt").text("+");
            }
        )

        $("#submit").click(
            function(){ 
                if($("#userResult").val() == result){
                    scorePositive += 1;
                    console.log(scorePositive);
                    $("#scorePositive").text(scorePositive);
                    $("#alert").addClass("alert alert-success").text("Correct");
                    setTimeout(function(){
                    $("#alert").removeClass("alert alert-success").text("");
                    }, 3000);
                }else{
                    scoreNegative += 1;
                    $("#scoreNegative").text(scoreNegative);
                    $("#alert").addClass("alert alert-danger").text("Wrong Answer");
                    setTimeout(function(){
                        $("#alert").removeClass("alert alert-danger").text("");
                        }, 3000);
                }

            }
        )
    
  
    }
  
)