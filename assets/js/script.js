// Connect constants with HTML elements

const start = document.getElementById("start-btn")
const quiz = document.getElementById("quiz")
const question = document.getElementById("question")
const qImg = document.getElementById("qImg")
const answerA = document.getElementById("answerA")
const answerB = document.getElementById("answerB")
const answerC = document.getElementById("answerC")
const answerD = document.getElementById("answerD")
const counter = document.getElementById("counter")
const timeGauge = document.getElementById("timeGauge")
const progress = document.getElementById("progress")
const scoreDiv = document.getElementById("scoreContainer")

// The array of questions, answers and responding images

let questions = [
    {
        question: 'What is the capital of Australia?',
        imgSrc: "assets/images/australia.png",
        answerA: 'Sydney',
        answerB: 'Canberra',
        answerC: 'Melbourne',
        answerD: 'Perth',
        correct: 'B'
    },{
        question: 'Which single person has won the most Academy Awards of all time?',
        imgSrc: "assets/images/academy_award.png",
        answerA: 'Christopher Lee',
        answerB: 'Walt Disney',
        answerC: 'Meryl Streep',
        answerD: 'James Cameron',
        correct: 'B'
    },{
        question: 'What year did World War I start?',
        imgSrc: "assets/images/ww1.png",
        answerA: '1914',
        answerB: '1899',
        answerC: '1938',
        answerD: '1922',
        correct: 'A'
    },{
        question: 'How many time zones are there in the world?',
        imgSrc: "assets/images/time_zones.png",
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
        imgSrc: "assets/images/city.png",
        answerA: 'Delhi',
        answerB: 'Mexico City',
        answerC: 'Tokyo',
        answerD: 'London',
        correct: 'C'
    }
]

const lastQuestion = questions.length - 1
let runningQuestion = 0
let TIMER
let score = 0
let count = 0
const questionTime = 10
const gaugeWidth = 150
const gaugeUnit = gaugeWidth / questionTime



renderQuestion()
renderProgress()
renderCounter()
TIMER = setInterval(renderCounter,1000)

// Start the quiz

// Rendering the 10 second counter

function renderCounter() {
    if(count <= questionTime) {
        counter.innerHTML = count
        timeGauge.style.width = count * gaugeUnit + "px"
        count++
    } else {
        count = 0
    }
}

// Rendering the question and answers

function renderQuestion() {
    let q = questions[runningQuestion]
    question.innerHTML = "<p>"+ q.question +"</p>"
    qImg.innerHTML = "<img src="+ q.imgSrc +">"
    answerA.innerHTML = q.answerA
    answerB.innerHTML = q.answerB
    answerC.innerHTML = q.answerC
    answerD.innerHTML = q.answerD
}


function renderProgress() {
    for (let qIndex = 0; qIndex <= lastQuestion; qIndex++) {
        progress.innerHTML += "<div class='prog' id="+ qIndex +"</div>"
        console.log("Rendered progress")
    }
}

// Check for the correct answer 

function checkAnswer(answer){
    if(answer == questions[runningQuestion].correct) {
        score++
        answerIsCorrect()
    } else {
        answerIsInCorrect()
    }
}

function answerIsCorrect() {
    console.log(runningQuestion)
    document.getElementById(runningQuestion).style.backgroundColor = "#0f0"
}

function answerIsInCorrect() {
    document.getElementById(runningQuestion).style.backgroundColor = "#f00"
}
