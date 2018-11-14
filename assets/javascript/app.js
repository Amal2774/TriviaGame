var counter = 0;
var timeLeft = 30;

var triviaQuestions = [
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

function ding() {
    var ding = ("../images/front-desk-bells-daniel_simon.mp3");
    ding.play();
};

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

setUpTimer();

function displayQuestions(){
    var output = [];
    var answers;

    for (var i=0; i<triviaQuestions.length; i++){
        answers = [];
        
        for (letter in questions[i].answers){
            answers.push
            "<label>"
                + '<input type="radio" name="question'+i+'" value="'+letter+'">'
                + letter + ': '
                + questions[i].answers[letter]
            "</label>"
    
        };

        output.push(
			'<div>' + questions[i].question + '</div>'
			+ '<div>' + answers.join('') + '</div>'
        );
        
        quizContainer.innerHTML = output.join('');

    };
};

showQuestions(questions, quizContainer);



