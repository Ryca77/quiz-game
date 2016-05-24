$(document).ready(function(){

//Select Answer//
$('.pic4').click(function() {
	$('.pic1, .pic2, .pic3').css({"webkit-filter" : "opacity(0.5)"})
});

//Display Answer Modal//
$('.submit').click(function() {
	$('.answer-overlay').fadeIn(1000);
});

//Hide Answer Model & Launch Next Question//
$('.next-question').click(function() {
	$('.answer-overlay').fadeOut(1000);
});

});