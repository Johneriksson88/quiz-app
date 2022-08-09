// Connect constants with HTML elements

const question = document.getElementById("question");
const qImg = document.getElementById("qImg");
const answerA = document.getElementById("answerA");
const answerB = document.getElementById("answerB");
const answerC = document.getElementById("answerC");
const answerD = document.getElementById("answerD");
const counter = document.getElementById("counter");
const timeGauge = document.getElementById("timeGauge");
const progress = document.getElementById("progress");
const scoreDiv = document.getElementById("score-container");
const scoreDivContent = document.getElementById("score-content");

// The array of questions, answers and corresponding images

let questions = [
    {
        question: 'What is the capital of Australia?',
        imgSrc: "assets/images/australian_flag.png",
        answerA: 'Sydney',
        answerB: 'Canberra',
        answerC: 'Melbourne',
        answerD: 'Perth',
        correct: 'B'
    },{
        question: 'Which single person has won the most Academy Awards of all time?',
        imgSrc: "assets/images/academy_awards.png",
        answerA: 'Christopher Lee',
        answerB: 'Walt Disney',
        answerC: 'Meryl Streep',
        answerD: 'James Cameron',
        correct: 'B'
    },{
        question: 'What year did World War I start?',
        imgSrc: "assets/images/world_war_1_trench.png",
        answerA: '1914',
        answerB: '1899',
        answerC: '1938',
        answerD: '1922',
        correct: 'A'
    },{
        question: 'How many time zones are there in the world?',
        imgSrc: "assets/images/five_time_zone_clocks.png",
        answerA: '12',
        answerB: '36',
        answerC: '22',
        answerD: '24',
        correct: 'D'
    },{
        question: 'Which is the largest land living mammal?',
        imgSrc: "assets/images/blue_whale.png",
        answerA: 'Polar bear',
        answerB: 'Elephant',
        answerC: 'Hippo',
        answerD: 'Grizzly bear',
        correct: 'B'
    },{
        question: 'Which city has the largest population in the world?',
        imgSrc: "assets/images/city_skyline.png",
        answerA: 'Delhi',
        answerB: 'Mexico City',
        answerC: 'Tokyo',
        answerD: 'London',
        correct: 'C'
    }
];

// Variables

let shuffledQuestions;
const lastQuestion = questions.length - 1;
let runningQuestion = 0;
let TIMER;
let score = 0;
let count = 0;
const questionTime = 10;
const gaugeWidth = 150;
const gaugeUnit = gaugeWidth / questionTime;


// Add alt text to the images

function loadAltText() {
    for(let i = 0; i < questions.length; i++) {
        let imgName = shuffledQuestions[runningQuestion].imgSrc;
        imgElement = document.getElementById('qImg').firstElementChild.alt = imgName.replace('assets/images/','').replace('.png', '').replace('_', ' ');
    }
}

// Render the coming question, derived from https://www.youtube.com/watch?v=49pYIMygIcU&ab_channel=CodeExplained

function setNextQuestion() {
    console.log("Rendered new question");
    let q = shuffledQuestions[runningQuestion];
    question.innerHTML = "<p>"+ q.question +"</p>";
    qImg.innerHTML = "<img src="+ q.imgSrc +">";
    loadAltText();
    answerA.innerHTML = q.answerA;
    answerB.innerHTML = q.answerB;
    answerC.innerHTML = q.answerC;
    answerD.innerHTML = q.answerD;
}

// Start the quiz, derived from https://www.youtube.com/watch?v=49pYIMygIcU&ab_channel=CodeExplained except for the randomization of questions

function startQuiz() {
    shuffledQuestions = questions.sort(() => Math.random() - 0.5);
    score = 0;
    setNextQuestion();
    renderProgressBar();
    renderTimer();
    TIMER = setInterval(renderTimer,1000);
}

startQuiz();

// Render the progress bar, derived from https://www.youtube.com/watch?v=49pYIMygIcU&ab_channel=CodeExplained

function renderProgressBar() {
    for (let qIndex = 0; qIndex <= lastQuestion; qIndex++) {
        progress.innerHTML += "<div class='prog' id="+ qIndex +"></div></div>";
    }
    console.log("Rendered progress");
}

// Render the 10 second timer, derived from https://www.youtube.com/watch?v=49pYIMygIcU&ab_channel=CodeExplained

function renderTimer() {
    if(count <= questionTime) {
        counter.innerHTML = count;
        timeGauge.style.width = count * gaugeUnit + "px";
        count++;
    } else {
        count = 0;
        answerIncorrect();
        if(runningQuestion < lastQuestion) {
            console.log("Showing next question");
            runningQuestion++;
            setNextQuestion();
    } else {
        clearInterval(TIMER);
        renderEndScreen();
    }
    }
}

// Check for the correct answer. Called by clicking an answer button, derived from https://www.youtube.com/watch?v=49pYIMygIcU&ab_channel=CodeExplained

function checkAnswer(answer){
    if(answer == questions[runningQuestion].correct) {
        console.log("Answer was correct");
        score++;
        answerCorrect();
        document.getElementById(runningQuestion).classList.add('correct');
    } else {
        console.log("Answer was incorrect");
        answerIncorrect();
    }
    count = 0;
    if(runningQuestion < lastQuestion) {
        console.log("Showing next question");
        runningQuestion++;
        setNextQuestion();
    } else {
        clearInterval(TIMER);
        renderEndScreen();
    }
}

// Set progress bar dot to green if answer is correct, red if incorrect, derived from https://www.youtube.com/watch?v=49pYIMygIcU&ab_channel=CodeExplained

function answerCorrect() {
    console.log(runningQuestion);
    document.getElementById(runningQuestion).classList.add('correct');
}

function answerIncorrect() {
    console.log(runningQuestion);
    document.getElementById(runningQuestion).classList.add('incorrect');
}

// Show the score and result feedback

function renderEndScreen() {
    console.log("Quiz ended");
    scoreDiv.style.display = "flex";
    let resultText = (score == 0) ? "Zero? Really?" :
                     (score == 1) ? "You're not really trying, are you?" :
                     (score == 2) ? "You can do better." :
                     (score == 3) ? "Mediocre." :
                     (score == 4) ? "Good job!" :
                     (score == 5) ? "Almost full score. Nice!" :
                     "Congratulations, you are a quizmaster!";
    scoreDivContent.innerHTML = "<div class='result-text'> You got <span>" + score + "</span> out of <span>" + questions.length + "</span> answers right. <br>" + resultText + '<a href="game.html" onclick="startQuiz"> Try again!</a></div>';
}

