// GLOBAL VARIABLES
var quizBody = document.getElementById("quizBody")
var h2El = document.getElementById("h2")
var p1El = document.getElementById("p1")
var p2El = document.getElementById("p2")
var p3El = document.getElementById("p3")
var p4El = document.getElementById("p4")
var timerEl = document.getElementById("timeLeft")
var scoreEl = document.getElementById("currentScore")
var startButtonEl = document.getElementById("startQuizButton")

var secondsLeft = 180;

startButtonEl.addEventListener("click", function () {
  h2El.textContent = "First Question:";
  p1El.textContent = "This is the right answer.";
  p2El.textContent = "This is the wrong answer.";
  p3El.textContent = "This is the wrong answer.";
  p4El.textContent = "This is the wrong answer.";
  quizBody.appendChild(h2El);
  quizBody.appendChild(p1El);
  quizBody.appendChild(p2El);
  quizBody.appendChild(p3El);
  quizBody.appendChild(p4El);
  startButtonEl.style.display = "none"
})


// This function clears the questions away.
function clearScreen() {
  h2El.style.display = "none"
  p1El.style.display = "none"
  p2El.style.display = "none"
  p3El.style.display = "none"
  p4El.style.display = "none"
  startButtonEl.style.display = ""
  return
}
// Need some Query Selectors here
// function runQuestions() {
//     var questions = [{
//       question: "What is 2*5?",
//       choices: [2, 5, 10, 15, 20],
//       correctAnswer: 2
//     }, {
//       question: "What is 3*6?",
//       choices: [3, 6, 9, 12, 18],
//       correctAnswer: 4
//     }, {
//       question: "What is 8*9?",
//       choices: [72, 99, 108, 134, 156],
//       correctAnswer: 0
//     }, {
//       question: "What is 1*7?",
//       choices: [4, 5, 6, 7, 8],
//       correctAnswer: 3
//     }, {
//       question: "What is 8*8?",
//       choices: [20, 30, 40, 50, 64],
//       correctAnswer: 4
//     }];

//     var questionCounter = 0;
//     var userSelection = [];



// COUNTDOWN TIMER CODE

function setTime() {
  var timerInterval = setInterval(function () {
    secondsLeft--;
    timerEl.textContent = secondsLeft + " seconds";

    if (secondsLeft === 0) {
      clearInterval(timerInterval);
      clearScreen();
    }

  }, 1000);
}
setTime();