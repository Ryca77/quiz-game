$(document).ready(function(){

//questions & answers array//
var i = 0;
var allQuestions = [ {
	questionNumber: 1,
	question: 'Who is the most successful manager of Manchester United?',
	options: ['Sir Matt Busby', 'Louis Van Gaal', 'Ryan Giggs', 'Sir Alex Ferguson'],
	answer: 3,
	info: 'Sir Alex Ferguson was the manager of Manchester United for 26 years between 1986 and 2013. During that time he amassed 38 trophies including 13 Premier League titles, five FA Cups and two UEFA Champions League titles. His win rate was nearly 60 per cent, the highest of any manager in the history of the club.'
	},
			 {
	questionNumber: 2,
	question: 'Where do Manchester United play their home games?',		 	
	options: ['Old Trafford', 'Emirates', 'Stamford Bridge', 'Anfield'],
	answer: 0,
	info: 'Manchester United moved to Old Trafford in 1910 and have played there ever since (although from 1941 to 1949 the club shared with local rivals Manchester City as a result of Second World War bomb damage) With a capacity of 75,635 it is the largest club stadium of any club in the UK.'
	}, 
			 {
	questionNumber: 3,
	question: 'Who is the all time top goal scorer at Machester United?',
	options: ['Cristiano Ronaldo', 'Sir Bobby Charlton', 'Wayne Rooney', 'George Best'],
	answer: 1,
	info: 'Sir Bobby Charlton has held the top goalscorer record since 1973. He scored a total of 249 goals over a 17 year period. Wayne Rooney is currently on 245 goals and is likely to surpass Sir Bobby during the 2016/17 season.'
	},
			 {
	questionNumber: 4,
	question: 'What was the original name of Manchester United when it was first formed in 1878?',
	options: ['Newton Heath LYR F.C.', 'Salford City', 'FC United of Manchester', 'Irlam F.C.'],
	answer: 0,
	info: 'Newton Heath LYR Football Club was formed in 1878 by the Carriage and Wagon department of the Lancashire and Yorkshire Railway depot at Newton Heath. The club was rescued from financial problems in 1902 by four local businessmen, and the club renamed Manchester United Football Club by the new owners.'
	},
			 {
	questionNumber: 5,
	question: 'Who has made the most appearances for Manchester United?',
	options: ['Paul Scholes', 'Mark Hughes', 'Ryan Giggs', 'David Beckham'],
	answer: 2,
	info: 'Ryan Giggs made 963 appearances for Manchester United over a 23 year career at the club. This is over 200 more than any other player and it is thought that this record will never be beaten.'
	},
];

//image variables//
/*var img = Image();
img.url = '../images/matt-busby.jpeg';
var img = Image();
img.url = '../images/louis-van-gaal.jpeg';
var img = Image();
img.url = '../images/ryan-giggs1.jpeg';
var img = Image();
img.url = '../images/alex-ferguson.jpeg';
var img = Image();
img.url = '../images/old-trafford.jpeg';
var img = Image();
img.url = '../images/emirates.jpeg';
var img = Image();
img.url = '../images/stamford-bridge.jpeg';
var img = Image();
img.url = '../images/anfield.jpeg';
var img = Image();
img.url = '../images/cristiano-ronaldo.jpeg';
var img = Image();
img.url = '../images/bobby-charlton.jpeg';
var img = Image();
img.url = '../images/wayne-rooney.jpeg';
var img = Image();
img.url = '../images/george-best.jpeg';
var img = Image();
img.url = '../images/newton-heath.jpeg';
var img = Image();
img.url = '../images/salford-city.jpeg';
var img = Image();
img.url = '../images/fcunited.jpeg';
var img = Image();
img.url = '../images/irlam.jpeg';
var img = Image();
img.url = '../images/paul-scholes.jpeg';
var img = Image();
img.url = '../images/mark-hughes.jpeg';
var img = Image();
img.url = '../images/ryan-giggs2.jpeg';
var img = Image();
img.url = '../images/david-beckham.jpeg';*/


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
	$('.submit').fadeIn(1000);
	var firstQuestion = allQuestions[i].question;
		$('.question').html(firstQuestion);
		console.log(firstQuestion);
	var firstNumber = allQuestions[i].questionNumber;
		$('.question-number').html("Question" + " " + firstNumber);
		console.log(firstNumber);
	/*var firstOptions = allQuestions[i].options;
		$('.options').html(firstOptions);
		console.log(firstOptions);*/
	var firstOptions = allQuestions[i].options;
    for (k = 0; k < 4; k++)
      $('.options'+(k+1)).html(firstOptions[k]);
    console.log(firstOptions);
};

//select and check answer//
function checkAnswer(user, answer) {
	var userChoice = $('li').on('click', function() {
		console.log(userChoice);
	if (userChoice === currentAnswer) {
		return "Correct!"
	}
	else if (userChoice !== currentAnswer) {
		return "Incorrect!"
	}
	$('.answer').html(checkAnswer(userChoice, currentAnswer));
	console.log(checkAnswer);
});
};

//submit answer and show answer modal//
$('.submit').on('click', function() {
	$('.answer-overlay').show();
	submitAnswer();
});

function submitAnswer() {
	$('.answer-overlay').show();
	var currentAnswer = allQuestions[i].answer;
		$('.answer').html(currentAnswer);
		console.log(currentAnswer);
	var currentInfo = allQuestions[i].info;
		$('.answer-info').html(currentInfo);
		console.log(currentInfo);
};

//hide answer modal and show next question//
$('.next-question').on('click', function() {
	nextQuestion();
});

function nextQuestion() {
	$('.answer-overlay').fadeOut(1000);
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
	/*var nextOptions = allQuestions[i].options;
		$('.option1').html(nextOptions);
		console.log(nextOptions);*/
	var nextOptions = allQuestions[i].options;
    for (k = 0; k < 4; k++)
      $('.options'+(k+1)).html(nextOptions[k]);
  	console.log(nextOptions);
};


	//each question has 4 pics to choose from - the following will eventually fade out the ones which aren't selected by the user//
	$('#pic1').click(function() {
		$('#pic1').css({"webkit-filter" : "opacity(1)"})
		$('#pic2, #pic3, #pic4').css({"webkit-filter" : "opacity(0.5)"})
	});

	$('#pic2').click(function() {
		$('#pic2').css({"webkit-filter" : "opacity(1)"})
		$('#pic1, #pic3, #pic4').css({"webkit-filter" : "opacity(0.5)"})
	});

	$('#pic3').click(function() {
		$('#pic3').css({"webkit-filter" : "opacity(1)"})
		$('#pic1, #pic2, #pic4').css({"webkit-filter" : "opacity(0.5)"})
	});

	$('#pic4').click(function() {
		$('#pic4').css({"webkit-filter" : "opacity(1)"})
		$('#pic1, #pic2, #pic3').css({"webkit-filter" : "opacity(0.5)"})
	});


//return result to the user//
/*$('.answer').html(checkAnswer(userChoice,answer));
	var result = checkAnswer + " " + "The answer is" + " " + answer;

};*/

//these are the beginnings of the triggers that show answer and next question//
/*var currentQuestion = allQuestions[currentQuestion];
$('.question-container').on('click', '.submit', function () {
	$('.answer-overlay').fadeIn(1000);
	result;
	info;
	updateScore();
});

var currentGame = allQuestions[currentQuestion];
$('.answer-overlay').on('click', '.next-question', function() {
	$('.answer-overlay').fadeOut(1000);
	currentQuestion++;
	nextQuestion();
});*/


/*$('.question-number').html([questionNumber]);
		var result = "Question" + " " + questionNumber;
	$('.question').html("question");
	$('.answers-container').html("options");*/

//Display Answer Modal//
/*$('.submit').click(function() {
	$('.answer-overlay').show();
});*/

//Hide Answer Model//
/*$('.next-question').click(function() {
	$('.answer-overlay').fadeOut(1000);
});*/

});
