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
var scoreMultiplier = 0;
var timerInterval = setInterval(startTimer, 1000);

// AN ARRAY WITH AN OBJECTS IN IT. FOR EASILY DETERMINING CORRECTNESS.
var questionsArray = [{
  question: "What does NaN mean?",
  choices: ["A delicious flatbread", "Not available now", "Not-A-Number", "Negative alpha numeral"],
  correctAnswer: "Not-A-Number"
}, {
  question: "The cashtag is used in which of the following JavaScript library?",
  choices: ["jQuery", "Google Ductape", "Two.js", "Bootstrap",],
  correctAnswer: "jQuery"
}, {
  question: "Which of the following data structures is for storing whether a variable is true or false?",
  choices: ["Symbol", "String", "Number", "Boolean",],
  correctAnswer: "Boolean"
}, {
  question: "Where is JavaScript executed?",
  choices: ["On a dedicated server", "In the cloud", "Client-side", "None of the above",],
  correctAnswer: "Client-side"
}, {
  question: "How does JavaScript store dates in the date object?",
  choices: ["Number of days since the year 2000", "By referencing Greenwich.api", "The number of miliseconds since January 1st, 1970", "None of the above",],
  correctAnswer: "The number of miliseconds since January 1st, 1970"
}];

// THIS FUNCTION STARTS THE QUIZ.
function runQuiz() {
  startButtonEl.style.display = "none";
  scoreBoardEl.style.display = "none";
  sideBarBody.style.display = "";
  formEl.style.display = "none";
  secondsLeft=180;
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
  if (questionCounter >= questionsArray.length - 1) {
    finalScreen();
  } else {
    questionCounter++;
    nextQuestion();
  }
}

// COUNTDOWN TIMER CODE.
function startTimer() {
  secondsLeft--;
  timerEl.textContent = secondsLeft + " Seconds";

  if (secondsLeft <= 0) {
    clearInterval(timerInterval);
    finalScreen();
  }
}

// THIS FUNCTION IS FOR THE GAMEOVER SCREEN.
function finalScreen() {
  clearInterval(timerInterval);
  scoreMultiplier = secondsLeft / 10;
  userScore = Math.floor(userScore * scoreMultiplier);
  scoreEl.textContent = userScore + " Points";
  formEl.style.display = "";
  h2El.textContent = "Enter your username!"
  p1El.textContent = ""
  p2El.textContent = ""
  p3El.textContent = ""
  p4El.textContent = ""
  formEl.addEventListener("submit", function (event) {
    event.preventDefault();
    var userInfo = {
      username: inputEl.value,
      score: userScore
    };
    userArray.push(userInfo);
    localStorage.setItem("user", JSON.stringify(userArray));
    scoreBoardScreen();
  });
}

// THIS IS THE SCOREBOARD SCREEN.
function scoreBoardScreen() {
  h2El.textContent = "";
  p1El.textContent = "";
  p2El.textContent = "";
  p3El.textContent = "";
  p4El.textContent = "";
  scoreBoardEl.style.display = "";
  formEl.style.display = "none";
  sideBarBody.style.display = "none";
  startButtonEl.style.display = "none";
  for (let i = 0; i <= userArray.length; i++) {
    trEl = document.createElement("tr");
    thEl = document.createElement("th");
    td1El = document.createElement("td");
    td2El = document.createElement("td");
    td1El.textContent = userArray[i].username;
    td2El.textContent = userArray[i].score;
    scoreBoardEl.append(trEl, thEl, td1El, td2El);
  }
}

// EVENT LISTENERS.
startButtonEl.addEventListener("click", runQuiz)

p1El.addEventListener("click", function (event) {
  if (event.target.textContent === questionsArray[questionCounter].correctAnswer) {
    updateScore(5);
  } else {
    p1El.textContent = "Incorrect."
    secondsLeft = secondsLeft - 5;
  }
});

p2El.addEventListener("click", function (event) {
  if (event.target.textContent === questionsArray[questionCounter].correctAnswer) {
    updateScore(5);
  } else {
    p2El.textContent = "Incorrect."
    secondsLeft = secondsLeft - 5;
  }
});

p3El.addEventListener("click", function (event) {
  if (event.target.textContent === questionsArray[questionCounter].correctAnswer) {
    updateScore(5);
  } else {
    p3El.textContent = "Incorrect."
    secondsLeft = secondsLeft - 5;
  }
});

p4El.addEventListener("click", function (event) {
  if (event.target.textContent === questionsArray[questionCounter].correctAnswer) {
    updateScore(5);
  } else {
    p4El.textContent = "Incorrect."
    secondsLeft = secondsLeft - 5;
  }
})