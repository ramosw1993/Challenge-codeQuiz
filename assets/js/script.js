// selecting each element and assign variable
// top nav
let startGame = document.querySelector(".start-game");
let vhsBtn = document.querySelector(".vhs");
let timerCounter = document.querySelector(".count-timer");
// quiz card
let questionH2 = document.getElementById("#question-text");
let cardOp = document.getElementById("#card-options");
let cardQuest = document.getElementById("card-questions");
let option0 = document.getElementById("#option0");
let option1 = document.getElementById("#option1");
let option2 = document.getElementById("#option2");
let option3 = document.getElementById("#option3");
// result section
const cardAns = document.querySelector(".card-answer");
const userResult = document.querySelector(".result-text");

let secondsLeft = 30;
let chosenQuestion = "";
let text = [];
let questText = [];

let currentQuestion;
let score = 0;

 
let quizQuestions = [
   {
       questionIndex: "Is Javascript the same as Java?",
       option: [
           {option0: "unsure", value: false},
           {option1: "False", value: true},
           {option2: "Some-what true", value: false},
           {option3: "Duh - its in the name", value: false},
       ]
   },
   {
       questionIndex: "Please select the correct example of a for loop?",
       option: [
           {option0: "for (i = 0; i < 5; i++)", value: false},
           {option1: "for (let i = 0; i < 5; i++)", value: true},
           {option2: "for (let i = 0; i < 5; +)", value: false},
           {option3: "for (let i = 0; i < 5: i++)", value: false},
       ]
   },
   {
       questionIndex: "Inside which HTML element do we put in Javascript",
       option: [
           {option0: "<p>", value: false},
           {option1: "<style>", value: false},
           {option2: "<script>", value: true},
           {option3: "<scipt>", value: false},
       ]
   }
]

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

  function displayQuestion() {
    let question = quizQuestions[currentQuestion];
    let options = question.options;

    let h2QuestionElement = document.querySelector("#question-text");
     h2QuestionElement.textContent = question.questionText;
  
    for (let i = 0; i < options.length; i++) {
      let option = options[i];
      let optionButton = document.querySelector("#option" + i);
      optionButton.textContent = option;
    }
  }

    displayQuestion();
    setTime();