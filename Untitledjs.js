var myQuestions = [
    {
        question: "When was the last time that tug of war was an official Olympic sport?",

        answers: {
            a: "1920",
            b: "1936",
            c: "1948",
            d: "1972",
        },

        correctAnswer: "a",
    },

    {
        question: "Where were the first modern Olympics held?",

        answers: {
            a: "Paris",
            b: "London",
            c: "Madrid",
            d: "Athens",
        },

        correctAnswer: "d",
    },

    {
        question: "Which color is not one of the Olympic rings?",

        answers: {
            a: "Green",
            b: "Brown",
            c: "Yellow",
            d: "Red",
        },

        correctAnswer: "b",
    },

    {
        question: "What was the motto of the Beijing games?",

        answers: {
            a: "Unity in Sport ",
            b: "Inspire the World ",
            c: "One World, One Dream ",
            d: "Dare to Dream ",
        },

        correctAnswer: "c",
    },

    {
        question: "Who holds the record for the most Olympic gold medals?",

        answers: {
            a: "Michael Phelps",
            b: "Usain Bolt",
            c: "Dominique Dawes",
            d: "Larisa Latynina",
        },

        correctAnswer: "a",
    },

    {
        question: "How many games has the USA hosted?",

        answers: {
            a: "5",
            b: "8",
            c: "7",
            d: "10",
        },

        correctAnswer: "b",
    },

    {
        question: "Which city has never hosted an Olympic Games?",

        answers: {
            a: "Salt Lake City",
            b: "Oslo",
            c: "Sapporo",
            d: "Nairobi",
        },

        correctAnswer: "d",
    },
];

var questionContainer = document.getElementById('question');
var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');
var counter = 0;
var timeLeft = 30;
var numCorrect = 0;

<<<<<<< HEAD
=======

function ding() {
var ding = ("../images/front-desk-bells-daniel_simon.mp3");
ding.play();
};

>>>>>>> 2e5b367efe59ca82b0d17b94bbf12afc98029442
function setUpTimer() {

    var timer = $("#timer");
    timer.html(timeLeft - counter);

    var interval = setInterval(timeIt, 1000);

    function timeIt() {
        counter++;
        timer.html(timeLeft - counter);

        if (counter == timeLeft) {
            ding();
            clearInterval(interval);
            counter = 0;
        };

    };
<<<<<<< HEAD

};
=======
    setUpTimer();
};


>>>>>>> 2e5b367efe59ca82b0d17b94bbf12afc98029442

function generateQuiz(questions, quizContainer, resultsContainer, submitButton){

	function showQuestions(myQuestions, quizContainer){

<<<<<<< HEAD
        setUpTimer();

        	// we'll need a place to store the output and the answer choices
=======

>>>>>>> 2e5b367efe59ca82b0d17b94bbf12afc98029442
        var output = [];
        var answers;


        for(var i=0; i<myQuestions.length; i++){
            
            answers = [];

            for(letter in myQuestions[i].answers){

                answers.push(
                    '<label>'
                        + '<input type="radio" name="question'+i+'" value="'+letter+'">'
                        + letter + '. '
                        + myQuestions[i].answers[letter]
                    + '</label>'
                );
		    };

            output.push(
                '<div class="question">' + myQuestions[i].question + '</div>'
                + '<div class="answers">' + answers.join('') + '</div>'
            );
        };

	     quizContainer.innerHTML = output.join('');
	};

    showQuestions(questions, quizContainer);

	function showResults(questions, quizContainer, resultsContainer){

        var answerContainers = quizContainer.querySelectorAll('.answers');
        
        var userAnswer = '';
        var numCorrect = 0;
        
        for(var i=0; i<myQuestions.length; i++){

            userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
            
            if(userAnswer===myQuestions[i].correctAnswer){

                numCorrect++;
                

                answerContainers[i].style.color = 'lightgreen';
            }

            else{

                answerContainers[i].style.color = 'red';
            }
        }

        resultsContainer.innerHTML = numCorrect + ' out of ' + myQuestions.length;
    };



	showQuestions(myQuestions, quizContainer);

	submitButton.onclick = function(){
		showResults(myQuestions, quizContainer, resultsContainer);
    };

};

generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);