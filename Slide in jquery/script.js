$(document).ready(function(){
    $("#btn7").click(function(){
        $("#img1").slideUp()(2000);
    });
    $("#btn8").click(function(){
        $("#img1").slideDown(2000);
    });
    $("#btn9").click(function(){
        $("#img1").slideToggle(2000);
    });
    $("#btn10").click(function(){
        $("#img1").stop();
    });
});