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
    question: "Number of player classes in Helldivers 2?",
    answers: [
      { text: "2", correct: false },
      { text: "4", correct: true },
      { text: "5", correct: false },
      { text: "7", correct: false },
    ],
  },
  {
    question: "Key differences between classes in Helldivers 2?",
    answers: [
      { text: "Unique abilities, weapons, and equipment.", correct: true },
      { text: "Same weapons and abilities for all.", correct: false },
      { text: "Only one class has heavy weaponry.", correct: false },
      { text: "Classes differ only in appearance.", correct: false },
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
      { text: "Crucial for coordinating attacks and managing resources.",correct: true,},
      { text: "Limited to choosing class.", correct: false },
    ],
  },
  {
    question: "How to unlock new weapons and equipment?",
    answers: [
      { text: "Earn experience points and level up.", correct: true },
      { text: "Purchase with real money.", correct: false },
      { text: "Complete achievements.", correct: false },
      { text: "Find them scattered across the game world.", correct: false },
    ],
  },
  {
    question: "Consequences of friendly fire?",
    answers: [
      { text: "No consequences; friendly fire is disabled.", correct: false },
      { text: "Can injure or kill teammates, hindering mission progress.",correct: true,},
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
      { text: "Essential for coordinating attacks and reviving teammates.",correct: true,},
    ],
  },
  {
    question: "How to call in reinforcements during missions?",
    answers: [
      { text: "Request reinforcements using a special beacon item.", correct: true,},
      {text: "Reinforcements arrive automatically at set intervals.", correct: false,},
      { text: "Call by finding special items on the map.", correct: false },
      { text: "Summon by sacrificing resources.", correct: false },
    ],
  },
  {
    question: "Role of customizable Load-outs?",
    answers: [
      { text: "Purely cosmetic.", correct: false },
      { text: "Tailor equipment to suit different mission objectives and playstyles.", correct: true,},
      { text: "Predetermined based on class selection.", correct: false },
      { text: "Affects single-player mode only.", correct: false },
    ],
  },
  {
    question: "Significance of the 'Dive Hard' mechanic?",
    answers: [
      { text: "Allows swimming underwater.", correct: false },
      { text: "Reference to a popular action movie.", correct: false },
      { text: "Grants temporary invincibility.", correct: false },
      { text: "Enables players to perform evasive maneuvers and dodge enemy attacks.", correct: true,},
    ],
  },
  {
    question: "Additional challenges or modifiers in missions?",
    answers: [
      { text: "No additional challenges or modifiers.", correct: false },
      { text: "Weather conditions such as rain or snow.", correct: false },
      { text: "Environmental hazards, enemy reinforcements, and mission-specific modifiers.", correct: true,},
      { text: "Day and night cycles.", correct: false },
    ],
  },
];

// Variables

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

/**
 * Hides .app when page is loaded
 * Create the Start button
 * Append the Start button under the instructions section
 */
document.addEventListener("DOMContentLoaded", function () {
  var appDiv = document.querySelector(".app");
  appDiv.style.display = "none";

  var startBtn = document.createElement("button");
  startBtn.textContent = "Start";
  startBtn.id = "start-btn";

  var instructions = document.getElementById("instructions");
  instructions.appendChild(startBtn);

  startBtn.addEventListener("click", startGame);
});

/**
 * Starts the quiz game by hiding the introduction and instructions elements,
 * displaying the quiz interface, and calling the function to display the first question.
 */

function startGame() {

  // Variables for startGame
  const introDiv = document.getElementById("intro");
  const instructionsDiv = document.getElementById("quiz-instructions");
  const quizDiv = document.querySelector(".quiz");
  const appDiv = document.querySelector(".app");

  // Hides when StartGame

  introDiv.style.display = "none";
  instructionsDiv.style.display = "none";
  quizDiv.style.display = "block";
  appDiv.style.display = "block";


  displayQuestion();
}

/**
 * Displays the current question on the quiz interface.
 * Creates answer buttons for each answer option of the current question.
 * Adds event listeners to answer buttons to handle answer selection.
 */
function displayQuestion() {
  let currentQuestion = questions[currentQuestionIndex];
  let questionNumber = currentQuestionIndex + 1;
  questionElement.textContent = questionNumber + ". " + currentQuestion.question;

  answerButtons.innerHTML = "";

  currentQuestion.answers.forEach((answer) => {
    let button = document.createElement("button");
    button.textContent = answer.text;
    button.classList.add("btn");
    button.dataset.correct = answer.correct; 
    button.addEventListener("click", selectAnswer);
    answerButtons.appendChild(button);
  });

  nextButton.addEventListener("click", handleNextButton);

  nextButton.disabled = true;
  nextButton.style.display = "none";

}


/**
 * Resets the state of the quiz interface by hiding the next button and removing all answer buttons.
 */
function resetState() {
  nextButton.style.display = "none";
  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  } // End of resetState function

/**
 * Handles the selection of an answer by the user.
 * Checks if the selected answer is correct and updates the score accordingly.
 * Highlights the selected answer and reveals the correct answer if the selected answer is incorrect.
 * Disables all answer buttons after selection and enables the next button.
 * 
 * @param {Event} e - The event object representing the click event on an answer button.
 */
}
function selectAnswer(e) {
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";

  if (isCorrect) {
    selectedBtn.classList.add("correct");
    score++;
  } else {
    selectedBtn.classList.add("incorrect");

    // Find and highlight the correct answer
    Array.from(answerButtons.children).forEach(button => {
      if (button.dataset.correct === "true") {
        button.classList.add("correct");
      } else {
        button.classList.add("incorrect");
      }
    });
  }

  // Disable all buttons after selection
  Array.from(answerButtons.children).forEach(button => {
    button.disabled = true;
  });

  // Enable the next button
  nextButton.disabled = false;
  nextButton.style.display = "block";
}
/**
 * Displays the user's score and an appropriate message based on the score.
 * Resets the state of the quiz, hides the last question, and shows the score categories element.
 */
function showScore() {
  resetState(); // Reset the state of the quiz
  const scoreCategoriesElement = document.getElementById("scores-categories");
  const scoreResultElement = scoreCategoriesElement.querySelector("p");
  
  // Define the score categories and corresponding messages
  const scoreCategories = [
    { minScore: 0, maxScore: 5, message: "You need more training, cadet! Report to the academy!" },
    { minScore: 6, maxScore: 10, message: "You are soon ready to liberate the galaxy and spread democracy!" },
    { minScore: 11, maxScore: 15, message: "Get ready to defend democracy in the galaxy, Helldiver!" }
  ];

  // Find the appropriate message based on the user's score
  const userScore = score;
  let userMessage = "";
  for (const category of scoreCategories) {
    if (userScore >= category.minScore && userScore <= category.maxScore) {
      userMessage = "You scored " + userScore + (userScore === 1 ? " point." : " points.") + " " + category.message;
      break; // Stop the loop as soon as the appropriate message is found
    }
  }

  // Display the result message
  scoreResultElement.textContent = userMessage;

  // Show the score categories element
  scoreCategoriesElement.style.display = "block";

  // Hide the last question element
  const lastQuestionElement = document.getElementById("question");
  lastQuestionElement.style.display = "none";

  addRestartButton();
}

/**
 * Handles the click event on the next button.
 * Increments the current question index and displays the next question if available.
 * Otherwise, disables the next button and displays the user's score.
 */
function handleNextButton() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    displayQuestion(); // Call displayQuestion
  } else {
    nextButton.disabled = true;
    showScore(); // Move showScore to this else block
  }
}

/**
 * Adds a restart button to the quiz interface.
 * When clicked, it restarts the quiz by calling the restartGame function.
 */
function addRestartButton() {
  const restartButton = document.createElement("button");
  restartButton.textContent = "Restart Quiz";
  restartButton.classList.add("btn"); // Add "btn" class for styling
  restartButton.classList.add("next-btn"); // Add "next-btn" class for styling
  restartButton.addEventListener("click", restartGame); // Call restartGame
  answerButtons.appendChild(restartButton);
}

/**
 * Restarts the quiz game by resetting the current question index and score,
 * displaying the first question, and hiding the score categories element.
 */
function restartGame() {
  currentQuestionIndex = 0;
  score = 0;
  
  // Show the question element
  const questionElement = document.getElementById("question");
  questionElement.style.display = "block";
  
  // Hide the scores-categories element
  const scoresCategoriesElement = document.getElementById("scores-categories");
  scoresCategoriesElement.style.display = "none";
  
  displayQuestion();
}