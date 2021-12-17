const startButton = document.getElementById("start-btn");
const questionContainerElement = document.getElementById("question-container");
const questionElement = document.getElementById("question");
const answerButtonsElement = document.getElementById("answer-buttons");
const resetElement = document.getElementById("reset");
const timeElement = document.getElementById("time");
const endQuiz = document.getElementById("end-quiz");
const restartButton = document.getElementById("restart");
let highScore = [];
const initial = document.getElementById("initial"); 
const saveButton = document.getElementById("save-btn");
const highScoreList = document.getElementById("highScoreList");
const list = document.getElementById("list");
const score = document.getElementById("final-score")
// const score = timeRemaining;
// const questionNum = question.length;


if (localStorage.getItem("highScore")){
    highScore = JSON.parse(localStorage.getItem("highScore"))
}

let timerId;

let index = 0;

resetElement.classList.add("hide");
startButton.addEventListener("click", startGame);


//function for showing score during quiz
function showScores() {
    for (let i = 0; i < highScore.length; i++) {
            list.innerHTML = list.innerHTML+`<li>${highScore[i].initial + "-" + highScore[i].score}</li>`
        
    }
}

//Quiz start function /timer start
function startGame() {
    console.log("Start");
    startButton.classList.add("hide");
    questionContainerElement.classList.remove("hide");
    
    var questionCount = 0;
    generateQuestion(questionCount);

    timerId = setInterval (timer, 1000);
};

//Question list
const question = [
    {
        question:'HTML Stands for?',
        anwsers: ['HyperText Markup Language', 'HyperText Making Language', 'HyperText Maden Language', 'High Text Markup Language'],
        correct: 'HyperText Markup Language'
    },
    {
        question:'CSS Stands for?',
        anwsers: ['Costco Super Sale', 'Cascade Sheet Style', 'Casual Style Sheet', 'Cascading Style Sheet'],
        correct: 'Cascading Style Sheet'
    },
    {
        question:'Which of the following tags is used to insert a blank line?',
        anwsers: ['h1', 'br', 'hr', 'a'],
        correct: 'br'
    },
    {
        question:'The # symbol specifies that the selector is?',
        anwsers: ['id', 'tag', 'first', 'class'],
        correct: 'id'
    }
];

let timeRemaining = question.length * 15

function timer() {
    time.innerHTML = timeRemaining--
};

//function for question generate
function generateQuestion () {
    questionContainerElement.innerHTML = `<div id="question">${question[index].question}</div>
    <div id="answer-buttons">
      <button class="btn">${question[index].anwsers[0]}</button>
      <button class="btn">${question[index].anwsers[1]}</button>
      <button class="btn">${question[index].anwsers[2]}</button>
      <button class="btn">${question[index].anwsers[3]}</button>
    </div>`

    let btnElement = document.querySelectorAll(".btn");

    //eventListnener to select correct or wrong answer
    for (let i = 0; i < btnElement.length; i++) {
        btnElement[i].addEventListener("click", function(){
            console.log('What they chose!!', this.innerHTML)
            console.log('Whats the correct answer', question[index].correct)

                if (this.innerHTML === question[index].correct) {
                    setTimeout(function(){
                    console.log('correct!!')
                    ,1000
                    })
                } 
                else  {
                    console.log('wrong')
                    timeRemaining -= 10;
                };
                index++;
                if(index < question.length){
                    generateQuestion()
                } else {
                    time.innerHTML = timeRemaining
                    clearInterval(timerId)
                    endQuiz.classList.remove("hide")
                    questionContainerElement.classList.add("hide")
                    
                } 
        })
    }
};

//function for Highscore list
saveButton.addEventListener("click", function(){
    highScore.push({
        initial: initial.value,
        score: timeRemaining
    })
    localStorage.setItem("highScore", JSON.stringify(highScore))
    highScoreList.classList.remove("hide")
    endQuiz.classList.add("hide")
    showScores()
});


//function for End Game
// function endQuiz() {
//     clearInterval(timerInterval);
//     questionContainerElement.classList.add("hide");
//     resetElement.classList.remove("hide");
//     restartButton.addEventListener("click");

// };