// Global variables
var quizBody = document.getElementById("quizBody")
var h2El = document.getElementById("h2")
var p1El = document.getElementById("p1")
var p2El = document.getElementById("p2")
var p3El = document.getElementById("p3")
var p4El = document.getElementById("p4")
var startButtonEl = document.getElementById("startQuizButton")

h2El.textContent = "First Question";
p1El.textContent = "This is the right answer.";
p2El.textContent = "This is the wrong answer.";
p3El.textContent = "This is the wrong answer.";
p4El.textContent = "This is the wrong answer.";
quizBody.appendChild(h2El);
quizBody.appendChild(p1El);
quizBody.appendChild(p2El);
quizBody.appendChild(p3El);
quizBody.appendChild(p4El);
startButtonEl.style.display="none"







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


// --------------------------------------------------------------------------------------------------------------------
//create button on html page
//grab button inside query selector in java
//even listener when user clicks
//when click, go to question

//can put questions into html or javascript, java is dom manipulation
//one question, some options to said question
//user click option, is correct or incorrect, compare user choice to correct answer
//for loop over questions to ask multiple questions, can use array

//array for questions

//array for answers             

//keep track of indices for arrays for comparison, how to compare arrays????

//array for correct answer
//all arrays stored within an object

//timer outside of for loop, so that timer isn't restarting with the loop, same goes for eventlisteners
//create function for timer, run function when user starts quiz
//if user answers incorrectly, deduct time. if/else?



// Timer stuff
    // var timeEl = document.querySelector(".time");
    // var mainEl = document.getElementById("main");

    // var secondsLeft = 10;

    // function setTime() {
    //   var timerInterval = setInterval(function() {
    //     secondsLeft--;
    //     timeEl.textContent = secondsLeft + " seconds left till colorsplosion.";

    //     if(secondsLeft === 0) {
    //       clearInterval(timerInterval);
    //       sendMessage();
    //     }

    //   }, 1000);
    // }

    // function sendMessage() {
    //   timeEl.textContent = " ";

    //   var imgEl = document.createElement("img");

    //   imgEl.setAttribute("src", "images/image_1.jpg");
    //   mainEl.appendChild(imgEl);

    // }

    // setTime();