$(document).ready(function() {

 $("#div1, #div2").css('background-color', 'green');
 $("div1, li").css('background-color', 'purple');

 $("p:first").fadeToggle();
 $("li:even").fadeToggle();
 $("li:odd").fadeToggle();
});