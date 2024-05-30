//References
let timeLeft = document.querySelector(".time-left");
let quizContainer = document.getElementById("container");
let nextBtn = document.getElementById("next-button");
let countOfQuestion = document.querySelector(".number-of-question");
let displayContainer = document.getElementById("display-container");
let scoreContainer = document.querySelector(".score-container");
let restart = document.getElementById("restart");
let userScore = document.getElementById("user-score");
let startScreen = document.querySelector(".start-screen");
let startButton = document.getElementById("start-button");
let questionCount;
let scoreCount = 0;
let count = 11;
let countdown;

//Questions and Options array

const quizArray = [
  {
    id: "0",
    question: "Large, insoluble molecules have to be digested before the can be?",
    options: ["Assimilated", "egested", "absorbed", "ingested"],
    correct: "absorbed",
  },
  {
    id: "1",
    question: "The pH in the mouth decreases after eating which, statement explans the decrese in pH? ",
    options: ["Bacteria release acids when respiring food substances", "Enzymes in siliva release acids during digetion ",
     "Food substances become alkaline when chewed", "Silivary glands release solution"],
    correct: "Bacteria release acids when respiring food substances",
  },
  {
    id: "2",
    question: "After musicular exercise, which blood vessel carries LEAST carbon dioxide?",
    options: ["Aorta", "hepatic artery", "pulmonary vein", "vena cava"],
    correct: "pulmonary vein",
  },
  {
    id: "3",
    question: "After musicular exercise, which blood vessel carries LEAST carbon dioxide?",
    options: ["Aorta", "hepatic artery", "pulmonary vein", "vena cava"],
    correct: "pulmonary vein",
  },
  {
    id: "4",
    question: "After musicular exercise, which blood vessel carries LEAST carbon dioxide?",
    options: ["Aorta", "hepatic artery", "pulmonary vein", "vena cava"],
    correct: "pulmonary vein",
  },
  {
    id: "5",
    question: "After musicular exercise, which blood vessel carries LEAST carbon dioxide?",
    options: ["Aorta", "hepatic artery", "pulmonary vein", "vena cava"],
    correct: "pulmonary vein",
  },
  {
    id: "6",
    question: "After musicular exercise, which blood vessel carries LEAST carbon dioxide?",
    options: ["Aorta", "hepatic artery", "pulmonary vein", "vena cava"],
    correct: "pulmonary vein",
  },
  {
    id: "7",
    question: "After musicular exercise, which blood vessel carries LEAST carbon dioxide?",
    options: ["Aorta", "hepatic artery", "pulmonary vein", "vena cava"],
    correct: "pulmonary vein",
  },
  {
    id: "8",
    question: "After musicular exercise, which blood vessel carries LEAST carbon dioxide?",
    options: ["Aorta", "hepatic artery", "pulmonary vein", "vena cava"],
    correct: "pulmonary vein",
  },
  {
    id: "9",
    question: "After musicular exercise, which blood vessel carries LEAST carbon dioxide?",
    options: ["Aorta", "hepatic artery", "pulmonary vein", "vena cava"],
    correct: "pulmonary vein",
  },
  {
    id: "10",
    question: "After musicular exercise, which blood vessel carries LEAST carbon dioxide?",
    options: ["Aorta", "hepatic artery", "pulmonary vein", "vena cava"],
    correct: "pulmonary vein",
  },
  {
    id: "11",
    question: "After musicular exercise, which blood vessel carries LEAST carbon dioxide?",
    options: ["Aorta", "hepatic artery", "pulmonary vein", "vena cava"],
    correct: "pulmonary vein",
  },
  {
    id: "12",
    question: "After musicular exercise, which blood vessel carries LEAST carbon dioxide?",
    options: ["Aorta", "hepatic artery", "pulmonary vein", "vena cava"],
    correct: "pulmonary vein",
  },
  {
    id: "13",
    question: "After musicular exercise, which blood vessel carries LEAST carbon dioxide?",
    options: ["Aorta", "hepatic artery", "pulmonary vein", "vena cava"],
    correct: "pulmonary vein",
  },
  {
    id: "14",
    question: "After musicular exercise, which blood vessel carries LEAST carbon dioxide?",
    options: ["Aorta", "hepatic artery", "pulmonary vein", "vena cava"],
    correct: "pulmonary vein",
  },
  {
    id: "15",
    question: "After musicular exercise, which blood vessel carries LEAST carbon dioxide?",
    options: ["Aorta", "hepatic artery", "pulmonary vein", "vena cava"],
    correct: "pulmonary vein",
  },
  {
    id: "16",
    question: "After musicular exercise, which blood vessel carries LEAST carbon dioxide?",
    options: ["Aorta", "hepatic artery", "pulmonary vein", "vena cava"],
    correct: "pulmonary vein",
  },
  {
    id: "17",
    question: "After musicular exercise, which blood vessel carries LEAST carbon dioxide?",
    options: ["Aorta", "hepatic artery", "pulmonary vein", "vena cava"],
    correct: "pulmonary vein",
  },
  {
    id: "18",
    question: "After musicular exercise, which blood vessel carries LEAST carbon dioxide?",
    options: ["Aorta", "hepatic artery", "pulmonary vein", "vena cava"],
    correct: "pulmonary vein",
  },
  {
    id: "19",
    question: "After musicular exercise, which blood vessel carries LEAST carbon dioxide?",
    options: ["Aorta", "hepatic artery", "pulmonary vein", "vena cava"],
    correct: "pulmonary vein",
  },
  {
    id: "20",
    question: "After musicular exercise, which blood vessel carries LEAST carbon dioxide?",
    options: ["Aorta", "hepatic artery", "pulmonary vein", "vena cava"],
    correct: "pulmonary vein",
  },
];

//Restart Quiz
restart.addEventListener("click", () => {
  initial();
  displayContainer.classList.remove("hide");
  scoreContainer.classList.add("hide");
});

//Next Button
nextBtn.addEventListener(
  "click",
  (displayNext = () => {
    //increment questionCount
    questionCount += 1;
    //if last question
    if (questionCount == quizArray.length) {
      //hide question container and display score
      displayContainer.classList.add("hide");
      scoreContainer.classList.remove("hide");
      //user score
      userScore.innerHTML =
        "Your score is " + scoreCount + " out of " + questionCount;
    } else {
      //display questionCount
      countOfQuestion.innerHTML =
        questionCount + 1 + " of " + quizArray.length + " Question";
      //display quiz
      quizDisplay(questionCount);
      count = 11;
      clearInterval(countdown);
      timerDisplay();
    }
  })
);

//Timer
const timerDisplay = () => {
  countdown = setInterval(() => {
    count--;
    timeLeft.innerHTML = `${count}s`;
    if (count == 0) {
      clearInterval(countdown);
      displayNext();
    }
  }, 1000);
};

//Display quiz
const quizDisplay = (questionCount) => {
  let quizCards = document.querySelectorAll(".container-mid");
  //Hide other cards
  quizCards.forEach((card) => {
    card.classList.add("hide");
  });
  //display current question card
  quizCards[questionCount].classList.remove("hide");
};

//Quiz Creation
function quizCreator() {
  //randomly sort questions
  quizArray.sort(() => Math.random() - 0.5);
  //generate quiz
  for (let i of quizArray) {
    //randomly sort options
    i.options.sort(() => Math.random() - 0.5);
    //quiz card creation
    let div = document.createElement("div");
    div.classList.add("container-mid", "hide");
    //question number
    countOfQuestion.innerHTML = 1 + " of " + quizArray.length + " Question";
    //question
    let question_DIV = document.createElement("p");
    question_DIV.classList.add("question");
    question_DIV.innerHTML = i.question;
    div.appendChild(question_DIV);
    //options
    div.innerHTML += `
    <button class="option-div" onclick="checker(this)">${i.options[0]}</button>
     <button class="option-div" onclick="checker(this)">${i.options[1]}</button>
      <button class="option-div" onclick="checker(this)">${i.options[2]}</button>
       <button class="option-div" onclick="checker(this)">${i.options[3]}</button>
    `;
    quizContainer.appendChild(div);
  }
}

//Checker Function to check if option is correct or not
function checker(userOption) {
  let userSolution = userOption.innerText;
  let question =
    document.getElementsByClassName("container-mid")[questionCount];
  let options = question.querySelectorAll(".option-div");

  //if user clicked answer == correct option stored in object
  if (userSolution === quizArray[questionCount].correct) {
    userOption.classList.add("correct");
    scoreCount++;
  } else {
    userOption.classList.add("incorrect");
    //For marking the correct option
    options.forEach((element) => {
      if (element.innerText == quizArray[questionCount].correct) {
        element.classList.add("correct");
      }
    });
  }

  //clear interval(stop timer)
  clearInterval(countdown);
  //disable all options
  options.forEach((element) => {
    element.disabled = true;
  });
}

//initial setup
function initial() {
  quizContainer.innerHTML = "";
  questionCount = 0;
  scoreCount = 0;
  count = 11;
  clearInterval(countdown);
  timerDisplay();
  quizCreator();
  quizDisplay(questionCount);
}

//when user click on start button
startButton.addEventListener("click", () => {
  startScreen.classList.add("hide");
  displayContainer.classList.remove("hide");
  initial();
});

//hide quiz and display start screen
window.onload = () => {
  startScreen.classList.remove("hide");
  displayContainer.classList.add("hide");
};
