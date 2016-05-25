$(document).ready(function(){

//Select Answer//
$('.pic1').click(function() {
	$('.pic2, .pic3, .pic4').css({"webkit-filter" : "opacity(0.5)"})
});

$('.pic2').click(function() {
	$('.pic1, .pic3, .pic4').css({"webkit-filter" : "opacity(0.5)"})
});

$('.pic3').click(function() {
	$('.pic1, .pic2, .pic4').css({"webkit-filter" : "opacity(0.5)"})
});

$('.pic4').click(function() {
	$('.pic1, .pic2, .pic3').css({"webkit-filter" : "opacity(0.5)"})
});

var questionNumber
var question
var options
var answer
var info
var score

//Questions & Answers Array//

var quiz = [ {
	question: 'Who is the most successful manager of Manchester United?',
	answers: ['Sir Matt Busby', 'Louis Van Gaal', 'Ryan Giggs', 'Sir Alex Ferguson', 3],
	info: 'Sir Alex Ferguson was the manager of Manchester United for 26 years between 1986 and 2013. During that time he amassed 38 trophies including 13 Premier League titles, five FA Cups and two UEFA Champions League titles. His win rate was nearly 60 per cent, the higest of any manager in the history of the club.'
	},
			 {
	question: 'Where do Manchester United play their home games?',		 	
	answers: ['Old Trafford', 'Emirates', 'Stamford Bridge', 'Anfield' 0],
	info: 'Manchester United moved to Old Trafford in 1910 and have played there ever since (although from 1941 to 1949 the club shared with local rivals Manchester City as a result of Second World War bomb damage) With a capacity of 75,635 it is the largest club stadium of any club in the UK.'
	} 
			 {
	question: 'Who is the all time top goal scorer at Machester United?',
	answers: ['Cristiano Ronaldo', 'Sir Bobby Charlton', 'Wayne Rooney', 'George Best', 1],
	info: 'Sir Bobby Charlton has held the top goalscorer record since 1973. He scored a total of 249 goals over a 17 year period. Wayne Rooney is currently on 245 goals and is likely to surpass Sir Bobby during the 2016/17 season'
	},
			 {
	question: 'What was the original name of Manchester United when it was first formed in 1878?',
	answers: ['Newton Heath LYR F.C.', 'Salford City', 'FC United of Manchester', 'Irlam F.C.', 0],
	info: 'Newton Heath LYR Football Club was formed in 1878 by the Carriage and Wagon department of the Lancashire and Yorkshire Railway depot at Newton Heath. The club was rescued from financial problems in 1902 by four local businessmen, and the club renamed Manchester United Football Club by the new owners.'
	},
			 {
	question: 'Who has made the most appearances for Manchester United?',
	answers: ['Paul Scholes', 'Mark Hughes', 'Ryan Giggs', 'David Beckham' 2],
	info: 'Ryan Giggs made 963 appearances for Manchester United over a 23 year career at the club. This is over 200 more than any other player and it is thought that this record will never be beaten'
	},
];

//Display Answer Modal//
$('.submit').click(function() {
	$('.answer-overlay').fadeIn(1000);
});

//Hide Answer Model & Launch Next Question//
$('.next-question').click(function() {
	$('.answer-overlay').fadeOut(1000);
});

});