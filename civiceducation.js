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
    question: "A decision made upon a political question by vote of all qualified citizens is referred as?",
    options: ["constitution", "derogaton", "plebisite", "tribunal"],
    correct: "plebisite",
  },
  {
    id: "1",
    question: "Human rights cannot be forfeitedd. which characteristic of human rights decribe this statement? ",
    options: ["inalienable", "indivisible ",
     "inherent", "universal"],
    correct: "inalienable",
  },
  {
    id: "2",
    question: "Which of the following is referred to as tape corruption?",
    options: ["Lack of political will", "Lack of citizen participation", "Unnecessary long procedures", "Winning of a tender"],
    correct: "Winning of a tender",
  },
  {
    id: "3",
    question: "John got married to Mercy while still leglly married to Jane. This act is known?",
    options: ["bigamy", "decree absolute", "decree nisi", "monogamy"],
    correct: "bigamy",
  },
  {
    id: "4",
    question: "Which of the following is NOT an indicator of poverty?",
    options: ["Illiterate level", "Maternal Mortality Rate", "Prevalence of Malnutrition", "Technology advancement"],
    correct: "Prevalence of Malnutrition",
  },
  {
    id: "5",
    question: "?",
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
    question: "society can be much more peaceful if individuals learnt to?",
    options: ["gather knowledge about politics", "respect and obey the laws of the land", "seek redress in court of law", "understand the houman rights commission"],
    correct: "respect and obey the laws of the land",
  },
  {
    id: "10",
    question: "Which of the following is not reference to gender?",
    options: ["Attributes ", "Equality", "opportunities", "Physiology"],
    correct: "pulmonary vein",
  },
  {
    id: "11",
    question: "Which of the following two parties during trial in a criminal case? The",
    options: ["defence and the judge", "defence and the plentiful", "defence and procescution", "judge and the prosecution"],
    correct: "defence and procescution",
  },
  {
    id: "12",
    question: "Under which ministy do zambian national museums fill? Ministy of",
    options: ["Education", "Home affaires", "Infarastructure", "Tourism"],
    correct: "Tourism",
  },
  {
    id: "13",
    question: "Mr Shibobo took a grug that led him to have cravings for certain foods which affected his memory and coordination, what drug did hr takr ?",
    options: ["Alcohol", "cannabis", "cocine", "heroin"],
    correct: "cannabis",
  },
  {
    id: "14",
    question: "Which type of culture describes a society with a varition of ethic diversity in terms of language, trditions bd customs?",
    options: ["Counter culture", "Cultural Heterogeneity", "Cultural Homogeneity", "Real culture"],
    correct: "Cultural Heterogeneity",
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
