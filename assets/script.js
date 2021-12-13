var startButton = document.getElementById("start-btn");
var questionContainerElement = document.getElementById('question-container');
var questionElement = document.getElementById('question');
var answerButtonsElement = document.getElementById('answer-buttons');


var question = [
    {
        question:'What is stand for HTML?',
        anwsers: ['HyperText Markup Language', 'HyperText Making Language', 'HyperText Maden Language', 'High Text Markup Language'],
        correct: 'HyperText Markup Language'
    },
    {
        question:'What is stand for HTML?',
        anwsers: ['HyperText Markup Language', 'HyperText Making Language', 'HyperText Maden Language', 'High Text Markup Language'],
        correct: 'HyperText Markup Language'
    },
    {
        question:'What is stand for HTML?',
        anwsers: ['HyperText Markup Language', 'HyperText Making Language', 'HyperText Maden Language', 'High Text Markup Language'],
        correct: 'HyperText Markup Language'
    },
    {
        question:'What is stand for HTML?',
        anwsers: ['HyperText Markup Language', 'HyperText Making Language', 'HyperText Maden Language', 'High Text Markup Language'],
        correct: 'HyperText Markup Language'
    }
];

var questionNum = questions.length;

resetElement.classList.add('hide');
startButton.addEventListener('click', startGame);

function startGame() {
    console.log('Start');
    startButton.classList.add('hide');
    questionContainerElement.classList.remove('hide');
    
    var questionCount = 0;
    generateQuestion(questionCount);

    Timer();
}

function showQuestion(question) {
    questionElement.innerText = question.question
}