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

const TOTAL_QUESTIONS = questions.length;

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const appDiv = document.getElementById("quiz-app");
const startContainer = document.getElementById("start-container");
const progressText = document.getElementById("progress-text");
const progressBar = document.getElementById("progress-bar");
const progressFill = document.getElementById("progress-fill");
const scoreText = document.getElementById("score-text");
const feedbackStatus = document.getElementById("feedback-status");
const quizStatus = document.getElementById("quiz-status");
const logoHeader = document.getElementById("logo");
const pageTitle = document.getElementById("page-title");

let currentQuestionIndex = 0;
let score = 0;
let questionAnswered = false;

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
 * Scrolls the quiz card into view at the top of the viewport.
 */
function scrollToQuiz() {
  appDiv.scrollIntoView({ behavior: "smooth", block: "start" });
}

/**
 * Updates progress text, score, and progress bar.
 */
function updateProgress() {
  const questionNumber = currentQuestionIndex + 1;
  const progressPercent = Math.round(
    ((questionNumber - 1) / TOTAL_QUESTIONS) * 100
  );

  progressText.textContent = `Question ${questionNumber} of ${TOTAL_QUESTIONS}`;
  scoreText.textContent = `Score: ${score}`;
  progressFill.style.width = `${progressPercent}%`;
  progressBar.setAttribute("aria-valuenow", String(progressPercent));
}

/**
 * Hides landing content and shows the quiz view.
 */
function startGame() {
  document.getElementById("intro").hidden = true;
  document.getElementById("quiz-instructions").hidden = true;
  logoHeader.hidden = true;
  pageTitle.hidden = true;

  appDiv.hidden = false;
  appDiv.classList.add("app-active");

  displayQuestion();
  scrollToQuiz();
}

/**
 * Displays the current question on the quiz interface.
 */
function displayQuestion() {
  const currentQuestion = questions[currentQuestionIndex];
  const questionNumber = currentQuestionIndex + 1;

  questionAnswered = false;
  feedbackStatus.textContent = "";
  questionElement.textContent = `${questionNumber}. ${currentQuestion.question}`;
  questionElement.hidden = false;
  quizStatus.hidden = false;

  answerButtons.innerHTML = "";

  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.classList.add("btn");
    button.type = "button";
    button.dataset.correct = answer.correct;

    const answerText = document.createElement("span");
    answerText.className = "answer-text";
    answerText.textContent = answer.text;
    button.appendChild(answerText);

    button.addEventListener("click", selectAnswer);
    answerButtons.appendChild(button);
  });

  updateProgress();
  nextButton.disabled = true;
  nextButton.hidden = true;

  scrollToQuiz();
}

/**
 * Adds visible and screen-reader feedback to an answer button.
 */
function markAnswerButton(button, isCorrect) {
  button.classList.add(isCorrect ? "correct" : "incorrect");

  const statusLabel = document.createElement("span");
  statusLabel.className = "answer-status";
  statusLabel.textContent = isCorrect ? "Correct" : "Incorrect";
  statusLabel.setAttribute("aria-hidden", "true");
  button.appendChild(statusLabel);

  button.setAttribute(
    "aria-label",
    `${button.querySelector(".answer-text").textContent} — ${
      isCorrect ? "Correct" : "Incorrect"
    }`
  );
}

/**
 * Handles the selection of an answer by the user.
 */
function selectAnswer(e) {
  if (questionAnswered) {
    return;
  }

  questionAnswered = true;
  const selectedBtn = e.currentTarget;
  const isCorrect = selectedBtn.dataset.correct === "true";

  if (isCorrect) {
    markAnswerButton(selectedBtn, true);
    score++;
    scoreText.textContent = `Score: ${score}`;
    feedbackStatus.textContent = "Correct answer.";
  } else {
    markAnswerButton(selectedBtn, false);
    feedbackStatus.textContent = "Incorrect answer. The correct answer is highlighted.";

    Array.from(answerButtons.children).forEach((button) => {
      if (button.dataset.correct === "true") {
        markAnswerButton(button, true);
      } else if (button !== selectedBtn) {
        markAnswerButton(button, false);
      }
    });
  }

  Array.from(answerButtons.children).forEach((button) => {
    button.disabled = true;
  });

  nextButton.disabled = false;
  nextButton.hidden = false;
  nextButton.focus();
}

/**
 * Resets answer buttons and hides the next button.
 */
function resetState() {
  nextButton.hidden = true;
  nextButton.disabled = true;
  answerButtons.innerHTML = "";
  feedbackStatus.textContent = "";
}

/**
 * Displays the user's score and an appropriate message.
 */
function showScore() {
  resetState();
  quizStatus.hidden = true;

  const scoreCategoriesElement = document.getElementById("scores-categories");
  const scoreResultElement = document.getElementById("final-score");

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
  scoreCategoriesElement.hidden = false;
  questionElement.hidden = true;
  feedbackStatus.textContent = userMessage;

  progressFill.style.width = "100%";
  progressBar.setAttribute("aria-valuenow", "100");

  addRestartButton();
  scrollToQuiz();
}

/**
 * Handles the click event on the next button.
 */
function handleNextButton() {
  if (!questionAnswered) {
    return;
  }

  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    displayQuestion();
  } else {
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
 * Restarts the quiz game.
 */
function restartGame() {
  currentQuestionIndex = 0;
  score = 0;
  questionAnswered = false;

  document.getElementById("scores-categories").hidden = true;
  displayQuestion();
}
