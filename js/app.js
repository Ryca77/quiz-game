$(document).ready(function(){

//questions and answers array//
var i = 0;
var allQuestions = [ {
	questionNumber: 1,
	question: 'Who is the most successful manager of Manchester United?',
	options: ['Sir Matt Busby', 'Louis Van Gaal', 'Ryan Giggs', 'Sir Alex Ferguson'],
	optionPics: ['./images/matt-busby.jpeg', './images/louis-van-gaal.jpeg', './images/ryan-giggs1.jpeg', './images/alex-ferguson.jpeg'],
	answer: 'Sir Alex Ferguson',
	info: 'Sir Alex Ferguson was the manager of Manchester United for 26 years between 1986 and 2013. During that time he amassed 38 trophies including 13 Premier League titles, five FA Cups and two UEFA Champions League titles. His win rate was nearly 60 per cent, the highest of any manager in the history of the club.'
	},
			 {
	questionNumber: 2,
	question: 'Where do Manchester United play their home games?',		 	
	options: ['Old Trafford', 'Emirates','Stamford Bridge', 'Anfield'],
	optionPics: ['./images/old-trafford.jpeg', './images/emirates.jpeg', './images/stamford-bridge.jpeg', './images/anfield.jpeg'],
	answer: 'Old Trafford',
	info: 'Manchester United moved to Old Trafford in 1910 and have played there ever since (although from 1941 to 1949 the club shared with local rivals Manchester City as a result of Second World War bomb damage) With a capacity of 75,635 it is the largest club stadium of any club in the UK.'
	}, 
			 {
	questionNumber: 3,
	question: 'Who is the all time top goal scorer at Manchester United?',
	options: ['Cristiano Ronaldo', 'Sir Bobby Charlton', 'Wayne Rooney', 'George Best'],
	optionPics: ['./images/cristiano-ronaldo.jpeg', './images/bobby-charlton.jpeg', './images/wayne-rooney.jpeg', './images/george-best.jpeg'],
	answer: 'Sir Bobby Charlton',
	info: 'Sir Bobby Charlton has held the top goalscorer record since 1973. He scored a total of 249 goals over a 17 year period. Wayne Rooney is currently on 245 goals and is likely to surpass Sir Bobby during the 2016/17 season.'
	},
			 {
	questionNumber: 4,
	question: 'What was the original name of Manchester United?',
	options: ['Newton Heath LYR F.C.', 'Salford City', 'FC United of Manchester', 'Irlam F.C.'],
	optionPics: ['./images/newton-heath.jpeg', './images/salford-city.jpeg', './images/fcunited.jpeg','./images/irlam.jpeg'],
	answer: 'Newton Heath LYR F.C.',
	info: 'Newton Heath LYR Football Club was formed in 1878 by the Carriage and Wagon department of the Lancashire and Yorkshire Railway depot at Newton Heath. The club was rescued from financial problems in 1902 by four local businessmen, and the club renamed Manchester United Football Club by the new owners.'
	},
			 {
	questionNumber: 5,
	question: 'Who has made the most appearances for Manchester United?',
	options: ['Paul Scholes', 'Mark Hughes', 'Ryan Giggs', 'David Beckham'],
	optionPics: ['./images/paul-scholes.jpeg', './images/mark-hughes.jpeg', './images/ryan-giggs2.jpeg', './images/david-beckham.jpeg'],
	answer: 'Ryan Giggs',
	info: 'Ryan Giggs made 963 appearances for Manchester United over a 23 year career at the club. This is over 200 more than any other player and it is thought that this record will never be beaten.'
	},
];

var answerSection = "";
$('.question-container').hide();
$('.submit').hide(); 

//start quiz and generate first question//
$('#go').on('click', function() {
	$('.start').hide();
	generateQuestions();
});

function generateQuestions() {
	$('.question-container').fadeIn(1000);
	var firstQuestion = allQuestions[i].question;
		$('.question').html(firstQuestion);
		console.log(firstQuestion);
	var firstNumber = allQuestions[i].questionNumber;
		$('.question-number').html("Question" + " " + firstNumber);
		console.log(firstNumber);
	var firstOptions = allQuestions[i].options;
	var firstImages = allQuestions[i].optionPics;
    for (k = 0; k < 4; k++)
      	$('.options'+(k+1)).html(firstOptions[k]).css('background-image', 'url(' + firstImages[k] + ')');
    	console.log(firstOptions);
};

//select option, check answer, return result//
function checkAnswer() {
	$('li').click(function() {
		console.log($(this).text());
		$('.submit').fadeIn(1000);
	var userChoice = $(this).text();
	var currentAnswer = allQuestions[i].answer;
	if (userChoice === currentAnswer) {
		console.log('correct');
		$('.result').html("Correct!");
	}
	else {
		console.log('incorrect');
		$('.result').html("Incorrect!");
	}
	});
};
checkAnswer();

//keep score//
function keepScore() {
	var currentScore = 0;
	$('li').click(function() {
		console.log($(this).text());
	var userChoice = $(this).text();
	var currentAnswer = allQuestions[i].answer;
	if (userChoice === currentAnswer) {
		console.log('score');
		currentScore++
	}
	$('.score').html("Score: " + currentScore + " " + "out of 5");
	});
}
keepScore();

//submit answer and show answer modal//
$('.submit').on('click', function() {
	$(window).scrollTop(0);
	$('.answer-overlay').fadeIn(1000);
	$('.question-container').hide();
	$('.submit').hide();
	submitAnswer();
	sessionStorage.clear();
});

function submitAnswer() {
	$('.answer-overlay').show();
	var currentAnswer = allQuestions[i].answer;
		$('.answer').html("The answer is" + " " + currentAnswer);
		console.log(currentAnswer);
	var currentInfo = allQuestions[i].info;
		$('.answer-info').html(currentInfo);
		console.log(currentInfo);
};

//hide answer modal and show next question//
$('.next-question').on('click', function() {
	$(window).scrollTop(0);
	$('#pic1, #pic2, #pic3, #pic4').css({"webkit-filter" : "opacity(1)", "moz-box-shadow" : "inset 0 0 0px #DA020E", "webkit-box-shadow" : "inset 0 0 0px #DA020E", "box-shadow" : "inset 0 0 0px #DA020E"});
	nextQuestion();
});

function nextQuestion() {
	$('.answer-overlay').hide();
	if(i>allQuestions.length -1) {
		i=0
	}
	generateQuestions(i);
	i++

	var nextQuestion = allQuestions[i].question;
		$('.question').html(nextQuestion);
		console.log(nextQuestion);
	var nextNumber = allQuestions[i].questionNumber;
		$('.question-number').html("Question" + " " + nextNumber);
		console.log(nextNumber);

	//last question change answer overlay//
	if(nextNumber >= 5) {
		console.log('last question');
			$('.next-question').hide();
			$('.start-again').show();
			$('.start-again').css('display', 'block');
	}
	
	var nextOptions = allQuestions[i].options;
    var nextImages = allQuestions[i].optionPics;
    for (k = 0; k < 4; k++)
		$('.options'+(k+1)).html(nextOptions[k]).css('background-image', 'url(' + nextImages[k] + ')');
  		console.log(nextOptions);
};

//each question has 4 pics to choose from - fade out the ones which aren't selected by the user and highlight selected//
$('#pic1').click(function() {
	$('#pic1').css({"webkit-filter" : "opacity(1)", "moz-box-shadow" : "inset 0 0 30px #DA020E", "webkit-box-shadow" : "inset 0 0 30px #DA020E", "box-shadow" : "inset 0 0 20px #DA020E"})
	$('#pic2, #pic3, #pic4').css({"webkit-filter" : "opacity(0.5)", "moz-box-shadow" : "inset 0 0 0px #DA020E", "webkit-box-shadow" : "inset 0 0 0px #DA020E", "box-shadow" : "inset 0 0 0px #DA020E"})
});

$('#pic2').click(function() {
	$('#pic2').css({"webkit-filter" : "opacity(1)", "moz-box-shadow" : "inset 0 0 30px #DA020E", "webkit-box-shadow" : "inset 0 0 30px #DA020E", "box-shadow" : "inset 0 0 20px #DA020E"})
	$('#pic1, #pic3, #pic4').css({"webkit-filter" : "opacity(0.5)", "moz-box-shadow" : "inset 0 0 0px #DA020E", "webkit-box-shadow" : "inset 0 0 0px #DA020E", "box-shadow" : "inset 0 0 0px #DA020E"})
});

$('#pic3').click(function() {
	$('#pic3').css({"webkit-filter" : "opacity(1)", "moz-box-shadow" : "inset 0 0 30px #DA020E", "webkit-box-shadow" : "inset 0 0 30px #DA020E", "box-shadow" : "inset 0 0 20px #DA020E"})
	$('#pic1, #pic2, #pic4').css({"webkit-filter" : "opacity(0.5)", "moz-box-shadow" : "inset 0 0 0px #DA020E", "webkit-box-shadow" : "inset 0 0 0px #DA020E", "box-shadow" : "inset 0 0 0px #DA020E"})
});

$('#pic4').click(function() {
	$('#pic4').css({"webkit-filter" : "opacity(1)", "moz-box-shadow" : "inset 0 0 30px #DA020E", "webkit-box-shadow" : "inset 0 0 30px #DA020E", "box-shadow" : "inset 0 0 20px #DA020E"})
	$('#pic1, #pic2, #pic3').css({"webkit-filter" : "opacity(0.5)", "moz-box-shadow" : "inset 0 0 0px #DA020E", "webkit-box-shadow" : "inset 0 0 0px #DA020E", "box-shadow" : "inset 0 0 0px #DA020E"})
});

});
