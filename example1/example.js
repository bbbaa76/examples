$(document).ready(
    function(){

        // input change in real time
        $("#input1").keyup(function () {
            $("#text1").text($(this).val());
          });

        $("#hide-text").click(
            function(){
                $("#text1").hide();
            }
        )
        $("#show-text").click(
            function(){
                $("#text1").show();
            }
        )
        $("#clear").click(
            function(){
                $("#text1").text(" ");
                $("#input1").val(" ");
            }
        )

        $("#navy").click(
            function(){
                $("#text1").css("color", "navy");
            }
        )
        
        $("#blue").click(
            function(){
                $("#text1").css("color", "blue");
            }
        )
        $("#reset-color").click(
            function(){
                $("#text1").css("color", "black");
            }
        )
    }
)