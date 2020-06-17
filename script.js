// GLOBAL VARIABLES FOR DOM MANIPULATION
var quizBody = document.getElementById("quizBody")
var h2El = document.getElementById("h2")
var p1El = document.getElementById("p1")
var p2El = document.getElementById("p2")
var p3El = document.getElementById("p3")
var p4El = document.getElementById("p4")
var timerEl = document.getElementById("timeLeft")
var scoreEl = document.getElementById("currentScore")
var startButtonEl = document.getElementById("startQuizButton")
var formEl = document.getElementById("userForm")
var inputEl = document.getElementById("inputForm")

// GLOBAL VARIABLES FOR SETTINGS
var secondsLeft = 180;
var userScore = 0;
var questionCounter = 0;
formEl.style.display = "none";

// AN ARRAY WITH AN OBJECT IN IT. FOR EASILY DETERMINING CORRECTNESS.
// var questions = [{
//   question: "What is 2*5?",
//   choices: [2, 5, 10, 15, 20],
//   correctAnswer: 2
// }, {
//   question: "What is 3*6?",
//   choices: [3, 6, 9, 12, 18],
//   correctAnswer: 4
// }, {
//   question: "What is 8*9?",
//   choices: [72, 99, 108, 134, 156],
//   correctAnswer: 0
// }, {
//   question: "What is 1*7?",
//   choices: [4, 5, 6, 7, 8],
//   correctAnswer: 3
// }, {
//   question: "What is 8*8?",
//   choices: [20, 30, 40, 50, 64],
//   correctAnswer: 4
// }];

// THIS REDUCES IT DOWN TO A SINGLE ARRAY. TESTING.
// var getQuestions = questions.map(function(item) {
// return item['question']
// })

// THIS FIRES RUNQUIZ AT THE MOMENT
startButtonEl.addEventListener("click", runQuiz)

// THIS FUNCTION STARTS THE QUIZ
function runQuiz() {
  startTimer();
  startButtonEl.style.display = "none";
  formEl.style.display = "none";
  h2El.textContent = "First Question: " //+ getQuestions[1];
  p1El.textContent = "This is the right answer.";
  p2El.textContent = "This is the wrong answer.";
  p3El.textContent = "This is the wrong answer.";
  p4El.textContent = "This is the wrong answer.";
  quizBody.prepend(h2El,p1El,p2El, p3El, p4El);

  p1El.addEventListener("click", function () {
    alert("This is the right answer"); //PLACEHOLDER
    updateScore(5)
    console.log(userScore)
  });
  p2El.addEventListener("click", function () {
    alert("This is the wrong answer"); //PLACEHOLDER
    secondsLeft = secondsLeft - 5;
    console.log(secondsLeft)
  });
  p3El.addEventListener("click", function () {
    alert("This is the wrong answer"); //PLACEHOLDER
    secondsLeft = secondsLeft - 5;
    console.log(secondsLeft)
  });
  p4El.addEventListener("click", function () {
    alert("This is the wrong answer"); //PLACEHOLDER
    secondsLeft = secondsLeft - 5;
    console.log(secondsLeft)
  });
  return
}

// THIS FUNCTION UPDATES THE SCORE.
function updateScore(add5) {
  userScore = userScore += add5;
  scoreEl.textContent = userScore + " Points";
}

// COUNTDOWN TIMER CODE
function startTimer() {
  var timerInterval = setInterval(function () {
    secondsLeft--;
    timerEl.textContent = secondsLeft + " Seconds";
    
    if (secondsLeft === 0) {
      clearInterval(timerInterval);
      clearScreen();
    }
    
  }, 1000);
}

// THIS FUNCTION HIDES CODE. NEEDS REPURPOSING TO ENDING SCREEN.
function clearScreen() {
  h2El.textContent = "Finished!"
  p1El.textContent = ""
  p2El.textContent = ""
  p3El.textContent = ""
  p4El.textContent = "Enter your username below"
  quizBody.prepend(h2El,p1El,p2El, p3El, p4El);
  formEl.style.display = "block";
  formEl.addEventListener("submit", function(event) {
    event.preventDefault();
    var userName = inputEl.value;
    var userName = JSON.stringify(userName);
    window.localStorage.setItem('name', userName);
    var userScore = JSON.stringify(userScore);
    window.localStorage.setItem('score', userScore)
  });
}

