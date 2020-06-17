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
var userArray = JSON.parse(localStorage.getItem("userInfo")) || []; 

// DISPLAY VARIABLES ON RUN. WILL BE PLACED IN HTML BY FINAL DRAFT.
formEl.style.display = "none";
scoreBoardEl.style.display = "none";
sideBarBody.style.display = "none";

// AN ARRAY WITH AN OBJECTS IN IT. FOR EASILY DETERMINING CORRECTNESS.
var questionsArray = [{
  question: "What is 2+2?", //PLACEHOLDER QUESTION
  choices: ["4", "2", "6", "8",], //PLACEHOLDER ANSWERS
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

  // if (questionsArray.choices[questionCounter] === questionsArray[questionCounter].correctAnswer) {
  //   this.addEventListener("click", function () {
  //     updateScore(5);
  //     questionCounter++;
  //     nextQuestion();
  //   })
  // } else {
  //   this.addEventListener("click", function () {
  //   this.textContent = "Incorrect."
  //   secondsLeft = secondsLeft - 5;
  // })
// }
  // p1El.addEventListener("click", function () {
  //   alert("This is the right answer"); //PLACEHOLDER
  //   updateScore(5)

  // });


  // });
  // p3El.addEventListener("click", function () {
  //   p3El.textContent = "Incorrect."
  //   secondsLeft = secondsLeft - 5;

  // });
  // p4El.addEventListener("click", function () {
  //   p4El.textContent = "Incorrect."
  //   secondsLeft = secondsLeft - 5;

  // });
  // questionCounter++;
}

// THIS FUNCTION UPDATES THE SCORE.
function updateScore(add5) {
  userScore += add5;
  scoreEl.textContent = userScore + " Points";
  console.log(questionCounter);
  console.log(questionsArray.length);
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
  // var userArray = JSON.parse(localStorage.getItem("userInfo")) || []; 
  formEl.style.display = "";
  h2El.textContent = "Finished!"
  p1El.textContent = ""
  p2El.textContent = ""
  p3El.textContent = ""
  p4El.textContent = "Enter your username below."
  formEl.addEventListener("submit", function (event) {
    event.preventDefault();
    var userInfo = {
      Username: inputEl.value.trim(),
      Score: userScore
    }
    userArray.push(userInfo)

    localStorage.setItem("user", JSON.stringify(userArray));
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
// THIS FUNCTION RESETS THE GAME TO DEFAULT.
function reset() {
  h2El.textContent = "";
  p1El.textContent = "";
  p2El.textContent = "";
  p3El.textContent = "";
  p4El.textContent = "";
  secondsLeft = 180;
  userScore = 0;
  questionCounter = 0;
  correctAnswer = "";
  // p1El.removeEventListener("click", function (event) {});
  // p2El.removeEventListener("click", function (event) {});
  // p3El.removeEventListener("click", function (event) {});
  // p4El.removeEventListener("click", function (event) {});
}

// var lastUser = JSON.parse(localStorage.getItem("user"));

// THIS IS THE SCOREBOARD SCREEN. THIS NEEDS A LOT OF WORK.
// 
// Segment into Divs
// 
function scoreBoardScreen() {
  scoreBoardEl.style.display = "";
  // for (let i = 0; i <= userNameArray.length; i++) {
    trEl = document.createElement("tr");
    thEl = document.createElement("th");
    td1El = document.createElement("td");
    td2El = document.createElement("td");
    // thEl.textContent = i;
    td1El.textContent = lastUser.Username;
    td2El.textContent = lastUser.Score;
    scoreBoardEl.append(trEl, thEl, td1El, td2El);
  // }
}

// EVENT LISTENERS ADD
p1El.addEventListener("click", function (event) {
  console.log("event.target", event.target.textContent);
  console.log("correctAnswer", questionsArray[questionCounter].correctAnswer)
  if (event.target.textContent === questionsArray[questionCounter].correctAnswer) {
    updateScore(5);
  } else {
    p1El.textContent = "Incorrect."
  }

  // updateScore(5)
  // console.log(event.target.textContent)
});

p2El.addEventListener("click", function (event) {
  // alert("This is the right answer"); //PLACEHOLDER
  if (event.target.textContent === questionsArray[questionCounter].correctAnswer) {
    updateScore(5);
  } else {
    p2El.textContent = "Incorrect."
  }
});

p3El.addEventListener("click", function (event) {
  // alert("This is the right answer"); //PLACEHOLDER
  if (event.target.textContent === questionsArray[questionCounter].correctAnswer) {
    updateScore(5);
  } else {
    p3El.textContent = "Incorrect."
  }
});

p4El.addEventListener("click", function (event) {
  // alert("This is the right answer"); //PLACEHOLDER
  if (event.target.textContent === questionsArray[questionCounter].correctAnswer) {
    updateScore(5);
  } else {
    p4El.textContent = "Incorrect."
  }
});
// p2El.addEventListener("click", function (event) {
//   p2El.textContent = "Incorrect."
//   secondsLeft = secondsLeft - 5;
//   console.log(event.target)
// });
// p3El.addEventListener("click", function (event) {
//   p3El.textContent = "Incorrect."
//   secondsLeft = secondsLeft - 5;
//   console.log(event.target)
// });
// p4El.addEventListener("click", function (event) {
//   p4El.textContent = "Incorrect."
//   secondsLeft = secondsLeft - 5;
//   console.log(event.target)
// });

// if (questionsArray.choices[questionCounter] === questionsArray[questionCounter].correctAnswer) {
//   this.addEventListener("click", function () {
//     updateScore(5);
//     questionCounter++;
//     nextQuestion();
//   })
// } else {
//   this.addEventListener("click", function () {
//   this.textContent = "Incorrect."
//   secondsLeft = secondsLeft - 5;
// })