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
var correctAnswer = "";
var usernameValue = "";
var userArray = JSON.parse(localStorage.getItem("user")) || []; 

// DISPLAY VARIABLES ON RUN. WILL BE PLACED IN HTML BY FINAL DRAFT.
formEl.style.display = "none";
scoreBoardEl.style.display = "none";
sideBarBody.style.display = "none";

// AN ARRAY WITH AN OBJECTS IN IT. FOR EASILY DETERMINING CORRECTNESS.
var questionsArray = [{
  question: "What is 2+2?", //PLACEHOLDER QUESTION
  choices: ["4", "2", "6", "8"], //PLACEHOLDER ANSWERS
  correctAnswer: "4"          //PLACEHOLDER CORRECT
}, {
  question: "What is 2+3?",
  choices: ["2", "5", "6", "8",],
  correctAnswer: "5"
}, {
  question: "What is 2+4?",
  choices: ["2", "4", "6", "8",],
  correctAnswer: "6"
}, {
  question: "What is 2+5?",
  choices: ["2", "4", "6", "7",],
  correctAnswer: "7"
}, {
  question: "What is 2+6?",
  choices: ["2", "4", "6", "8",],
  correctAnswer: "8"
}];

// THIS FIRES RUNQUIZ AT THE MOMENT.
startButtonEl.addEventListener("click", runQuiz)

// THIS FUNCTION STARTS THE QUIZ.
function runQuiz() {
startButtonEl.style.display = "none";
scoreBoardEl.style.display = "none";
sideBarBody.style.display = "";
formEl.style.display = "none";
  startTimer()
  nextQuestion()
}

// THIS FUNCTION SHOULD FIRE NEXT QUESTION.
function nextQuestion() {
  h2El.textContent = questionsArray[questionCounter].question;
  p1El.textContent = questionsArray[questionCounter].choices[0];
  p2El.textContent = questionsArray[questionCounter].choices[1];
  p3El.textContent = questionsArray[questionCounter].choices[2];
  p4El.textContent = questionsArray[questionCounter].choices[3];
}

// THIS FUNCTION UPDATES THE SCORE.
function updateScore(add5) {
  userScore += add5;
  scoreEl.textContent = userScore + " Points";
  if (questionCounter >= questionsArray.length -1) {
    finalScreen();
  } else {
  questionCounter++;
  nextQuestion();
  }
}

// COUNTDOWN TIMER CODE.
function startTimer() {
  var timerInterval = setInterval(function () {
    secondsLeft--;
    timerEl.textContent = secondsLeft + " Seconds";

    if (secondsLeft <= 0) {
      clearInterval(timerInterval);
      finalScreen();
    }

  }, 1000);
}

// THIS FUNCTION IS FOR THE GAMEOVER SCREEN.
function finalScreen() {
  formEl.style.display = "";
  h2El.textContent = "Enter your username!"
  p1El.textContent = ""
  p2El.textContent = ""
  p3El.textContent = ""
  p4El.textContent = ""
  formEl.addEventListener("submit", function (event) {
    event.preventDefault();
    var userInfo = {
      Username: inputEl.value,
      Score: userScore
    };
    userArray.push(userInfo);
    localStorage.setItem("user", JSON.stringify(userArray));
    scoreBoardScreen();
  });
}

// THIS FUNCTION HIDES EVERYTHING.
function clearScreen() {
  formEl.style.display = "none";
  startButtonEl.style.display = "none";
  sideBarBody.style.display = "none";
  scoreBoardEl.style.display = "none";
  formEl.style.display="none";
}

// THIS IS THE SCOREBOARD SCREEN. THIS NEEDS A LOT OF WORK. 
function scoreBoardScreen() {
  h2El.textContent = "";
  p1El.textContent = "";
  p2El.textContent = "";
  p3El.textContent = "";
  p4El.textContent = "";
  scoreBoardEl.style.display = "";
  formEl.style.display="none";
  sideBarBody.style.display="none";
  startButtonEl.style.display="none";
  for (let i = 0; i <= userArray.length; i++) {
    trEl = document.createElement("tr");
    thEl = document.createElement("th");
    td1El = document.createElement("td");
    td2El = document.createElement("td");
    td1El.textContent = userArray[i].Username;
    td2El.textContent = userArray[i].Score;
    scoreBoardEl.append(trEl, thEl, td1El, td2El);
  }
}

// EVENT LISTENERS.
p1El.addEventListener("click", function (event) {
  if (event.target.textContent === questionsArray[questionCounter].correctAnswer) {
    updateScore(5);
  } else {
    p1El.textContent = "Incorrect."
    secondsLeft = secondsLeft -5;
  }
});

p2El.addEventListener("click", function (event) {
  if (event.target.textContent === questionsArray[questionCounter].correctAnswer) {
    updateScore(5);
  } else {
    p2El.textContent = "Incorrect."
    secondsLeft = secondsLeft -5;
  }
});

p3El.addEventListener("click", function (event) {
  if (event.target.textContent === questionsArray[questionCounter].correctAnswer) {
    updateScore(5);
  } else {
    p3El.textContent = "Incorrect."
    secondsLeft = secondsLeft -5;
  }
});

p4El.addEventListener("click", function (event) {
  if (event.target.textContent === questionsArray[questionCounter].correctAnswer) {
    updateScore(5);
  } else {
    p4El.textContent = "Incorrect."
    secondsLeft = secondsLeft -5;
  }
})