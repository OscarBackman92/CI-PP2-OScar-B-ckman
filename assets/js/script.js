// 15 Questions for the quiz

const questions = [
    {
        question: "In Helldivers 2, what is the primary objective of the player characters?",
        answers: [
	        { text: "To defend humanity by completing dangerous missions against alien threats because, let's face it, we're the galaxy's last hope and someone's gotta do the dirty work." , correct: true},
            { text: "To establish diplomatic relations with alien species because nothing says 'hello' like a shotgun blast." , correct: false},
            { text: "To explore uncharted territories in space because who doesn't enjoy stumbling upon an army of bugs?" , correct: false},
            { text: "To scavenge for resources on uninhabited planets because what could go wrong when you're just looking for some spare ammo?" , correct: false},
        ]
    },
    {
        question: "Which alien species serves as the main antagonists in Helldivers 2?",
        answers: [
            { text: "The peaceful and diplomatic Zorblaxians because they're too busy sipping tea and discussing poetry." , correct: false},
            { text: "The nomadic traders known as the GalactiTrons because their idea of negotiation involves lasers." , correct: false},
	        { text: "The aggressive and formidable Bugs, Cyborgs, and Illuminates because apparently, they missed the memo about intergalactic peace treaties." , correct: true},
            { text: "The advanced artificial intelligence known as the OmniMechs because they're too busy debating the meaning of existence." , correct: false},
            
        ]
    },
    {
        question: "What is the name of the organization that the player characters belong to in Helldivers 2?",
        answers: [
            { text: "United Space Explorers Alliance because 'peacekeeping' is just a fancy word for blowing stuff up." , correct: false},
            { text: "Intergalactic Peacekeepers Union because someone's gotta keep the chaos in check, preferably with explosives." , correct: false},
            { text: "Interstellar Trade Federation because nothing says 'commerce' like launching missiles at alien hives." , correct: false},
            { text: "Super Earth's Helldivers because when you need a problem solved with extreme prejudice, you call in the Helldivers." , correct: true},
        ]
    },
    {
        question: "How many player classes are available in Helldivers 2?",
        answers: [
            { text: "2 because who needs variety when you can have redundancy?" , correct: false},
            { text: "4 because anything more would be excessive, right?" , correct: true},
            { text: "5 because why settle for a handful of options when you can have a smorgasbord?" , correct: false},
            { text: "7 because sometimes, you just gotta throw everything at the wall and see what sticks." , correct: false},
            
        ]
    },
    {
        question: "What are the key differences between the classes available in Helldivers 2?",
        answers: [
            { text: " Each class has unique abilities, weapons, and equipment suited for different roles because variety is the spice of life and death." , correct: true},
            { text: "All classes have the same weapons and abilities because who needs specialization when you can have mediocrity?" , correct: false},
            { text: "Only one class has access to heavy weaponry because sometimes you just gotta carry the team, literally." , correct: false},
            { text: "Classes differ only in appearance, not in skills because fashion is the true battlefield." , correct: false},
            
        ]
    },
    {
        question: "Which type of missions are randomly generated and offer various objectives in Helldivers 2?",
        answers: [
            { text: "Story-based missions because who needs spontaneity when you can have a carefully crafted narrative?" , correct: false},
            { text: "Side quests because sometimes you just gotta stick to the main course." , correct: false},
            { text: "Escort missions because nothing says 'fun' like babysitting a malfunctioning robot." , correct: false},
            { text: "Dynamic missions because predictability is for amateurs and we like to live dangerously." , correct: true},
        ] 
    },
    {
        question: "What role does strategy play in successfully completing missions in Helldivers 2?",
        answers: [
            { text: "Strategy is irrelevant; brute force always prevails because who needs tactics when you have firepower?" , correct: false},
            { text: "Strategy only matters in multiplayer, not in single-player mode because who needs friends when you have a flamethrower?" , correct: false},
            { text: "Strategy is crucial for coordinating attacks, managing resources, and adapting to changing battlefield conditions because sometimes you gotta use your brain before you use your brawn." , correct: true},
            { text: "Strategy is limited to choosing which class to play as because sometimes you just gotta close your eyes and pick one." , correct: false},
            
        ] 
    },
    {
        question: "How do players unlock new weapons and equipment in Helldivers 2?",
        answers: [
            { text: "By purchasing them with real money because who needs skill when you have a credit card?" , correct: false},
            { text: "By earning experience points and leveling up because nothing says 'progress' like blowing stuff up and getting rewarded for it." , correct: true},
            { text: "By completing achievements because sometimes you gotta earn your arsenal one pat on the back at a time." , correct: false},
            { text: "By finding them scattered across the game world because who needs a treasure map when you have a rocket launcher?" , correct: false},
            
        ] 
    },
    {
        question: "What are the consequences of friendly fire in Helldivers 2?",
        answers: [
            { text: "Friendly fire can injure or kill teammates, causing disruptions and hindering mission progress." , correct: true},
            { text: "There are no consequences; friendly fire is disabled." , correct: false},
            { text: "Only the damaged player suffers consequences." , correct: false},
            { text: "Friendly fire reduces the team's score." , correct: false},
        ] 
    },
    {
        question: "What are the different environments players can expect to encounter in Helldivers 2?",
        answers: [
            { text: "Only urban environments because sometimes you just gotta stick to what you know." , correct: false},
            { text: "Only desert environments because who needs hydration when you have adrenaline?" , correct: false},
            { text: "Only jungle environments because nothing says 'adventure' like dodging poisonous frogs while fighting aliens." , correct: false},
            { text: "Urban, desert, forest, and arctic environments because variety is the spice of planetary extermination." , correct: true},
        ] 
    },
    {
        question: "What is the importance of teamwork in Helldivers 2?",
        answers: [
            { text: "Teamwork is optional; solo play is encouraged because who needs friends when you have a kill streak?" , correct: false},
            { text: "Teamwork is essential for coordinating attacks, reviving teammates, and maximizing effectiveness in combat because sometimes you gotta rely on someone other than yourself to save your bacon." , correct: true},
            { text: "Teamwork is only necessary for certain missions because sometimes you just gotta lone wolf it." , correct: false},
            { text: "Teamwork only affects mission completion time because who needs efficiency when you have explosions?" , correct: false},
        ] 
    },
    {
        question: "How do players call in reinforcements during missions in Helldivers 2?",
        answers: [
            { text: "Reinforcements arrive automatically at set intervals because sometimes you just gotta wait for help to fall from the sky." , correct: false},
            { text: "Reinforcements are called by finding special items on the map because who needs communication when you have scavenger hunts?" , correct: false},
            { text: "Players can request reinforcements using a special beacon item because sometimes you gotta send out an intergalactic distress signal and hope someone answers." , correct: true},
            { text: "Reinforcements are summoned by sacrificing resources because sometimes you gotta pay to play." , correct: false},
            
        ] 
    },
    {
        question: "What role do customizable Load-outs play in Helldivers 2?",
        answers: [
            { text: "Load-outs allow players to tailor their equipment to suit different mission objectives and playstyles because sometimes you gotta bring a rocket launcher to a bug fight." , correct: true},
            { text: "Load-outs are purely cosmetic because who needs functionality when you can look fabulous?" , correct: false},
            { text: "Load-outs are predetermined based on class selection because sometimes you just gotta let fate decide your arsenal." , correct: false},
            { text: "Load-outs only affect single-player mode because who needs options when you're flying solo?" , correct: false},
        ] 
    },
    {
        question: "What is the significance of the 'Dive Hard' mechanic in Helldivers 2?",
        answers: [
            { text: "It allows players to swim underwater because who needs to breathe when you're too busy blowing stuff up?" , correct: false},
            { text: "It's a reference to a popular action movie because who needs originality when you can have nostalgia?" , correct: false},
            { text: "It grants temporary invincibility because sometimes you just gotta roll with the punches, literally." , correct: false},
            { text: "It enables players to perform evasive maneuvers and dodge enemy attacks because sometimes you gotta dip, duck, dive, and dodge to survive." , correct: true},
        ] 
    },
    {
        question: "What are some of the additional challenges or modifiers that can affect gameplay in Helldivers 2 missions?",
        answers: [
            { text: "There are no additional challenges or modifiers because sometimes you just gotta keep it simple, stupid." , correct: false},
            { text: "Weather conditions such as rain or snow because who needs an umbrella when you have orbital strikes?" , correct: false},
            { text: " Day and night cycles because sometimes you gotta fight in the dark to appreciate the light." , correct: false},
            { text: "Environmental hazards, enemy reinforcements, and mission-specific modifiers like limited visibility or increased enemy aggression because sometimes you gotta spice things up with a dash of chaos." , correct: true},
        ] 
    }
];

const questionElement = document.getElementById('question');
const answerButtons = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-btn');

let currentQuestionIndex = 0;
let score = 0;

function startGame() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = 'Next';
    showQuestion();
    document.getElementById('start-btn').style.display = 'block'; 
    document.getElementById('start-btn').addEventListener('click', () => {
        document.getElementById('start-btn').style.display = 'none'; 
        document.getElementById("intro").style.display = "none";
        document.getElementById("restart-btn").style.display = "none";
        addRestartButton();
    });
}


function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNumber = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNumber + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectAnswer);
    });
}

function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    };
}

function selectAnswer(event) {
    const selectedBtn = event.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
        } else { 
            selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block"
}

function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    addRestartButton();
}


function handleNextButton(){
    currentQuestionIndex++;
        if(currentQuestionIndex < questions.length){
            showQuestion();
        } else {
        showScore();
        }
}

nextButton.addEventListener("click" ,()=>{
    if(currentQuestionIndex < questions.length) {
        handleNextButton();
    } else {
        startGame();
    }
})

function addRestartButton() {
    const restartButton = document.getElementById('restart-btn');
    restartButton.style.display = 'block'; // Show the restart button
    restartButton.addEventListener("click", startGame);
}

startGame();
