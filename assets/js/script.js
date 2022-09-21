// selecting each element and assign variable
// top nav
let startGame = document.querySelector(".start-game");
let vhsBtn = document.querySelector(".vhs");
let timerCounter = document.querySelector(".count-timer");
// quiz card
let questBox = document.querySelector(".question-box");
let choicesUl = document.getElementById("#choices-ul");
var ulCreate = document.createElement("ul");
// result section
const cardAns = document.querySelector(".card-answer");
const userResult = document.querySelector(".result-text");


let secondsLeft = 30;
let userChoices;
let userQuestion;
let newItem;
let output = 0;
let score = 0;

 
let quizQuestions = [
  { question: "Question: Is Javascript the same as Java?",
    option: ["Options:", "true", "somewhat-true", "false", "duh its in the name!"],
    answer: "false"
  },
  {
    question: "Question: Please select the correct example of a for loop?",
    option: ["Options: ", "for (i = 0; i < 5; i++)", "for (let i = 0; i < 5; i++)", "for (let i = 0; i < 5; +)", "for (let i = 0; i < 5: i++)"],
    answer: "for (let i = 0; i < 5; i++)"
  },
  {
    question: "Question: Inside which HTML element do we put in Javascript?",
    option: ["Options", "<script>", "<style>", "<p>", "<scrpt>"],
    answer: "<script>"
  },
];

console.log(quizQuestions);
// starts timer in order to start the game
function setTime() {
    // Sets interval in variable
    var start = setInterval(function() {
      secondsLeft--;
      timerCounter.textContent = secondsLeft + " seconds left until times up.";
  
      if(secondsLeft === 0) {
        clearInterval(start);
        timer(); 
      }
  
    }, 1000);
  }
  
  // Calls function to create and append image
  function timer() {
    timerCounter.textContent = 30;
    let timeEl  = document.createElement(".count-timer");
    timerCounter.appendChild(timeEl);
  
  }

  function displayQuestion(output) {
    questBox.innerHTML = " ";
    ulCreate.innerHTML = " ";

    for (let i = 0; i < quizQuestions.length; i++) {
      let userQuestion = quizQuestions[output].question;
      let userChoices = quizQuestions[output].option;
      questBox.textContent = userQuestion;
      ulCreate.textContent = userChoices;
    }
    quizQuestions.forEach(function(quizQuestions, option) {
      let listItem = document.createElement("li");
      listItem.textContent = option;
      questBox.appendChild(ulCreate);
      ulCreate.appendChild(listItem);
      listItem.addEventListener("click", (compare));
    })
  };

  function compare(event) {
    event.preventDefault();

    let element = event.target;

    if(element.match("li")) {

      let createDiv = document.createElement("div");
      createDiv.setAttribute("id", "createDiv");

      if(element.textContent == quizQuestions[question].answer) {
        score++;
        createDiv.textContent = "Correct! the answer: " + quizQuestions[question].answer;
      } else {
        secondsLeft--;
        createDiv.textContent = "Wrong! The correct answer is: " + quizQuestions[question].answer;
      };
    }
  }

    setTime();
    displayQuestion(output);