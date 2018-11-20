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
            a: "Unity in Sport",
            b: "Inspire the World",
            c: "One World, One Dream",
            d: "Dare to Dream",
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

};

function generateQuiz(questions, quizContainer, resultsContainer, submitButton){

	function showQuestions(myQuestions, quizContainer){

        setUpTimer();

        	// we'll need a place to store the output and the answer choices
        var output = [];
        var answers;

        //put this inside a for loop to loop through questions array to display one question at a time?
        // for each question... 
        for(var i=0; i<myQuestions.length; i++){
            
            // first reset the list of answers
            answers = [];

            // for each available answer to this question...
            for(letter in myQuestions[i].answers){

                // ...add an html radio button
                answers.push(
                    '<label>'
                        + '<input type="radio" name="question'+i+'" value="'+letter+'">'
                        + letter + '. '
                        + myQuestions[i].answers[letter]
                    + '</label>'
                );
		    };

		    // add this question and its answers to the output
            output.push(
                '<div class="question">' + myQuestions[i].question + '</div>'
                + '<div class="answers">' + answers.join('') + '</div>'
            );
        };

        // finally combine our output list into one string of html and put it on the page
	     quizContainer.innerHTML = output.join('');
	};

    showQuestions(questions, quizContainer);

	function showResults(questions, quizContainer, resultsContainer){
        // code will go here
        	// gather answer containers from our quiz
        var answerContainers = quizContainer.querySelectorAll('.answers');
        
        // keep track of user's answers
        var userAnswer = '';
        var numCorrect = 0;
        
        // for each question...
        for(var i=0; i<myQuestions.length; i++){

            // find selected answer
            userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
            
            // if answer is correct
            if(userAnswer===myQuestions[i].correctAnswer){
                // add to the number of correct answers
                numCorrect++;
                
                // color the answers green
                answerContainers[i].style.color = 'lightgreen';
            }
            // if answer is wrong or blank
            else{
                // color the answers red
                answerContainers[i].style.color = 'red';
            }
        }

        // show number of correct answers out of total
        resultsContainer.innerHTML = numCorrect + ' out of ' + myQuestions.length;
    };


	// show the questions
	showQuestions(myQuestions, quizContainer);

	// when user clicks submit, show results
	submitButton.onclick = function(){
		showResults(myQuestions, quizContainer, resultsContainer);
    };

};

generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);