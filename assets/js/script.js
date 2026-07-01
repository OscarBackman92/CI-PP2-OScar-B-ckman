// 15 quiz questions

const questions = [
  {
    question: "Main objective in Helldivers 2?",
    answers: [
      {
        text: "Defend humanity by completing dangerous missions.",
        correct: true,
      },
      {
        text: "Establish diplomatic relations with alien species.",
        correct: false,
      },
      { text: "Explore uncharted territories in space.", correct: false },
      {
        text: "Scavenge for resources on uninhabited planets.",
        correct: false,
      },
    ],
  },
  {
    question: "Main antagonists in Helldivers 2?",
    answers: [
      { text: "Zorblaxians - peaceful and diplomatic.", correct: false },
      { text: "GalactiTrons - nomadic traders.", correct: false },
      {
        text: "Bugs, Cyborgs, and Illuminates - aggressive and formidable.",
        correct: true,
      },
      { text: "OmniMechs - advanced artificial intelligence.", correct: false },
    ],
  },
  {
    question: "Organization in Helldivers 2?",
    answers: [
      { text: "United Space Explorers Alliance.", correct: false },
      { text: "Intergalactic Peacekeepers Union.", correct: false },
      { text: "Interstellar Trade Federation.", correct: false },
      { text: "Super Earth's Helldivers.", correct: true },
    ],
  },
  {
    question: "Number of armor roles in Helldivers 2?",
    answers: [
      { text: "2", correct: false },
      { text: "4", correct: true },
      { text: "5", correct: false },
      { text: "7", correct: false },
    ],
  },
  {
    question: "Key differences between armor roles in Helldivers 2?",
    answers: [
      { text: "Unique abilities, weapons, and equipment.", correct: true },
      { text: "Same weapons and abilities for all.", correct: false },
      { text: "Only one role has heavy weaponry.", correct: false },
      { text: "Roles differ only in appearance.", correct: false },
    ],
  },
  {
    question: "Type of randomly generated missions in Helldivers 2?",
    answers: [
      { text: "Story-based missions.", correct: false },
      { text: "Dynamic missions with various objectives.", correct: true },
      { text: "Side quests.", correct: false },
      { text: "Escort missions.", correct: false },
    ],
  },
  {
    question: "Role of strategy in completing missions?",
    answers: [
      { text: "Irrelevant; brute force always prevails.", correct: false },
      { text: "Only matters in multiplayer.", correct: false },
      {
        text: "Crucial for coordinating attacks and managing resources.",
        correct: true,
      },
      { text: "Limited to choosing armor role.", correct: false },
    ],
  },
  {
    question: "How do you unlock new weapons and equipment?",
    answers: [
      {
        text: "Earn medals and spend them in the Warbond and requisition store.",
        correct: true,
      },
      { text: "Purchase with real money.", correct: false },
      { text: "Complete achievements.", correct: false },
      { text: "Find them scattered across the game world.", correct: false },
    ],
  },
  {
    question: "Consequences of friendly fire?",
    answers: [
      { text: "No consequences; friendly fire is disabled.", correct: false },
      {
        text: "Can injure or kill teammates, hindering mission progress.",
        correct: true,
      },
      { text: "Only the damaged player suffers consequences.", correct: false },
      { text: "Reduces the team's score.", correct: false },
    ],
  },
  {
    question: "Different environments in Helldivers 2?",
    answers: [
      { text: "Only urban environments.", correct: false },
      { text: "Only desert environments.", correct: false },
      { text: "Urban, desert, forest, and arctic.", correct: true },
      { text: "Only jungle environments.", correct: false },
    ],
  },
  {
    question: "Importance of teamwork?",
    answers: [
      { text: "Optional; solo play is encouraged.", correct: false },
      { text: "Necessary for certain missions only.", correct: false },
      { text: "Affects mission completion time only.", correct: false },
      {
        text: "Essential for coordinating attacks and reviving teammates.",
        correct: true,
      },
    ],
  },
  {
    question: "How do you call in reinforcements during missions?",
    answers: [
      {
        text: "Enter the Reinforce stratagem input code.",
        correct: true,
      },
      {
        text: "Reinforcements arrive automatically at set intervals.",
        correct: false,
      },
      { text: "Call by finding special items on the map.", correct: false },
      { text: "Summon by sacrificing resources.", correct: false },
    ],
  },
  {
    question: "Role of customizable loadouts?",
    answers: [
      { text: "Purely cosmetic.", correct: false },
      {
        text: "Tailor equipment to suit different mission objectives and playstyles.",
        correct: true,
      },
      { text: "Predetermined based on armor role selection.", correct: false },
      { text: "Affects single-player mode only.", correct: false },
    ],
  },
  {
    question: "How do you call in support tools and weapons during missions?",
    answers: [
      { text: "By entering stratagem input codes.", correct: true },
      { text: "By swimming underwater.", correct: false },
      { text: "By referencing a popular action movie.", correct: false },
      { text: "By gaining temporary invincibility.", correct: false },
    ],
  },
  {
    question: "Additional challenges or modifiers in missions?",
    answers: [
      { text: "No additional challenges or modifiers.", correct: false },
      { text: "Weather conditions such as rain or snow.", correct: false },
      {
        text: "Environmental hazards, enemy reinforcements, and mission-specific modifiers.",
        correct: true,
      },
      { text: "Day and night cycles.", correct: false },
    ],
  },
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const appDiv = document.querySelector(".app");
const startContainer = document.getElementById("start-container");

let currentQuestionIndex = 0;
let score = 0;

/**
 * Initialises the quiz page only when required elements are present.
 */
if (appDiv && startContainer && questionElement && answerButtons && nextButton) {
  const startBtn = document.createElement("button");
  startBtn.textContent = "Start";
  startBtn.id = "start-btn";
  startBtn.className = "action-btn";
  startBtn.type = "button";
  startContainer.appendChild(startBtn);

  startBtn.addEventListener("click", startGame);
  nextButton.addEventListener("click", handleNextButton);
}

/**
 * Starts the quiz game by hiding the introduction and instructions elements,
 * displaying the quiz interface, and calling the function to display the first question.
 */
function startGame() {
  const introDiv = document.getElementById("intro");
  const instructionsDiv = document.getElementById("quiz-instructions");

  introDiv.style.display = "none";
  instructionsDiv.style.display = "none";
  appDiv.hidden = false;

  displayQuestion();
}

/**
 * Displays the current question on the quiz interface.
 * Creates answer buttons for each answer option of the current question.
 */
function displayQuestion() {
  const currentQuestion = questions[currentQuestionIndex];
  const questionNumber = currentQuestionIndex + 1;
  questionElement.textContent =
    questionNumber + ". " + currentQuestion.question;
  questionElement.style.display = "block";

  answerButtons.innerHTML = "";

  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.textContent = answer.text;
    button.classList.add("btn");
    button.type = "button";
    button.dataset.correct = answer.correct;
    button.addEventListener("click", selectAnswer);
    answerButtons.appendChild(button);
  });

  nextButton.disabled = true;
  nextButton.hidden = true;
}

/**
 * Resets the state of the quiz interface by hiding the next button and removing all answer buttons.
 */
function resetState() {
  nextButton.hidden = true;
  answerButtons.innerHTML = "";
}

/**
 * Handles the selection of an answer by the user.
 *
 * @param {Event} e - The event object representing the click event on an answer button.
 */
function selectAnswer(e) {
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";

  if (isCorrect) {
    selectedBtn.classList.add("correct");
    score++;
  } else {
    selectedBtn.classList.add("incorrect");

    Array.from(answerButtons.children).forEach((button) => {
      if (button.dataset.correct === "true") {
        button.classList.add("correct");
      } else if (button !== selectedBtn) {
        button.classList.add("incorrect");
      }
    });
  }

  Array.from(answerButtons.children).forEach((button) => {
    button.disabled = true;
  });

  nextButton.disabled = false;
  nextButton.hidden = false;
}

/**
 * Displays the user's score and an appropriate message based on the score.
 */
function showScore() {
  resetState();
  const scoreCategoriesElement = document.getElementById("scores-categories");
  const scoreResultElement = scoreCategoriesElement.querySelector("p");

  const scoreCategories = [
    {
      minScore: 0,
      maxScore: 5,
      message: "You need more training, cadet! Report to the academy!",
    },
    {
      minScore: 6,
      maxScore: 10,
      message:
        "You are soon ready to liberate the galaxy and spread democracy!",
    },
    {
      minScore: 11,
      maxScore: 15,
      message: "Get ready to defend democracy in the galaxy, Helldiver!",
    },
  ];

  const userScore = score;
  let userMessage = "";
  for (const category of scoreCategories) {
    if (userScore >= category.minScore && userScore <= category.maxScore) {
      userMessage =
        "You scored " +
        userScore +
        (userScore === 1 ? " point. " : " points. ") +
        category.message;
      break;
    }
  }

  scoreResultElement.textContent = userMessage;
  scoreCategoriesElement.style.display = "block";
  questionElement.style.display = "none";

  addRestartButton();
}

/**
 * Handles the click event on the next button.
 */
function handleNextButton() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    displayQuestion();
  } else {
    nextButton.disabled = true;
    nextButton.hidden = true;
    showScore();
  }
}

/**
 * Adds a restart button to the quiz interface.
 */
function addRestartButton() {
  const restartButton = document.createElement("button");
  restartButton.textContent = "Restart Quiz";
  restartButton.id = "restart-btn";
  restartButton.className = "btn action-btn";
  restartButton.type = "button";
  restartButton.addEventListener("click", restartGame);
  answerButtons.appendChild(restartButton);
}

/**
 * Restarts the quiz game by resetting the current question index and score.
 */
function restartGame() {
  currentQuestionIndex = 0;
  score = 0;

  const scoresCategoriesElement = document.getElementById("scores-categories");
  scoresCategoriesElement.style.display = "none";

  displayQuestion();
}
