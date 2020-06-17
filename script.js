// GLOBAL VARIABLES FOR DOM MANIPULATION.
var quizBody = document.getElementById("quizBody")
var sideBarBody = document.getElementById("sideBarBody")
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
var scoreBoardEl = document.getElementById("scoreBoard")

// GLOBAL VARIABLES FOR SETTINGS.
var secondsLeft = 180;
var userScore = 0;
var questionCounter = 0;
userNameArray = ["Joe", "Steve"];
scoreArray = [300, 480];

// DISPLAY VARIABLES ON RUN.
formEl.style.display = "none";
scoreBoardEl.style.display = "none";
sideBarBody.style.display = "none";

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
  sideBarBody.style.display = "block";
  formEl.style.display = "none";
  h2El.textContent = "First Question: " //+ getQuestions[1];
  p1El.textContent = "This is the right answer.";
  p2El.textContent = "This is the wrong answer.";
  p3El.textContent = "This is the wrong answer.";
  p4El.textContent = "This is the wrong answer.";
  quizBody.prepend(h2El, p1El, p2El, p3El, p4El);

  p1El.addEventListener("click", function () {
    alert("This is the right answer"); //PLACEHOLDER
    updateScore(5)
    return
  });
  p2El.addEventListener("click", function () {
    p2El.textContent = "Incorrect."
    secondsLeft = secondsLeft - 5;
    return
  });
  p3El.addEventListener("click", function () {
    p3El.textContent = "Incorrect."
    secondsLeft = secondsLeft - 5;
    return
  });
  p4El.addEventListener("click", function () {
    p4El.textContent = "Incorrect."
    secondsLeft = secondsLeft - 5;
    return
  });
}

// THIS FUNCTION UPDATES THE SCORE.
function updateScore(add5) {
  userScore = userScore += add5;
  scoreEl.textContent = userScore + " Points";
  return
}

// COUNTDOWN TIMER CODE.
function startTimer() {
  var timerInterval = setInterval(function () {
    secondsLeft--;
    timerEl.textContent = secondsLeft + " Seconds";

    if (secondsLeft <= 0) {
      clearInterval(timerInterval);
      scoreScreen();
    }

  }, 1000);
  return
}

// THIS FUNCTION IS FOR THE GAMEOVER SCREEN.
function scoreScreen() {
  h2El.textContent = "Finished!"
  p1El.textContent = ""
  p2El.textContent = ""
  p3El.textContent = ""
  p4El.textContent = "Enter your username below."
  formEl.style.display = "block";
  formEl.addEventListener("submit", function (event) {
    event.preventDefault();
    var userName = inputEl.value;
    var userName = JSON.stringify(userName);
    window.localStorage.setItem(userName, userScore);
    return
  });
}
// THIS FUNCTION HIDES EVERYTHING.
function clearScreen() {
  p1El.removeEventListener("click", function () { });
  p2El.removeEventListener("click", function () { });
  p3El.removeEventListener("click", function () { });
  p4El.removeEventListener("click", function () { });
  h2El.textContent = "";
  p1El.textContent = "";
  p2El.textContent = "";
  p3El.textContent = "";
  p4El.textContent = "";
  formEl.style.display = "none";
  startButtonEl.style.display = "none";
  sideBarBody.style.display = "none";
  scoreBoardEl.style.display = "none";
  return
}

// THIS IS THE SCOREBOARD SCREEN
function scoreBoardScreen() {
  // Now i
  // 
  scoreBoardEl.style.display = "";
  for (let i = 0; i < userNameArray.length; i++) {
    var trEl = document.createElement("tr");
    var thEl = document.createElement("th");
    var td1El = document.createElement("td");
    var td2El = document.createElement("td");
    thEl.textContent = i+1;
    td1El.textContent = userNameArray[i];
    td2El.textContent = scoreArray[i];
    scoreBoardEl.append(trEl, thEl, td1El, td2El);
  }
}


