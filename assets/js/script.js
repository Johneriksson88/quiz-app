var startButton
var nextButton
var questionsContainer
var welcomeText
var randomizedQuestions
var currentQuestionIndex
var questionElement = document.getElementById('question')
var answerButtonsElement = document.getElementById('answer-buttons')

document.addEventListener("DOMContentLoaded", function() {
    startButton = document.getElementById('start-btn')
    startButton.addEventListener('click', startGame)
})

function startGame() {
    console.log("Started")
    startButton.classList.add('hide')
    questionsContainer = document.getElementById('quiz-container')
    questionsContainer.classList.remove('hide')
    welcomeText = document.getElementById('welcome-text')
    welcomeText.classList.add('hide')
    nextButton = document.getElementById('next-btn')
    nextButton.classList.remove('hide')
    randomizedQuestions = questions.sort(() => Math.random() - 0.5)
    currentQuestionIndex = 0
    displayQuestion()
}

function setNextQuestion() {
    displayQuestion(randomizedQuestions[currentQuestionIndex])
}

function displayQuestion(question) {
    questionElement.innerText = question.question
    question.answer.forEach(answer => {
        const button = document.createElement('button')  
        button.innerText = answer.text
        button.classList.add('btn')      
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
        console.log('Displaying question')
    });
}

function checkAnswer() {

}

function calculateCorrectAnswer() {

}

function incrementScore() {

}



var questions = [
    {
        question: 'What is the capital of Australia?',
        answer: [
            { text: 'Sydney', correct: false },
            { text: 'Canberra', correct: true },
            { text: 'Melbourne', correct: false},
            { text: 'Perth', correct: false}
        ]
    },
    {
        question: 'Which single person has won the most Academy Awards of all time?',
        answer: [
            { text: 'Christopher Lee', correct: false },
            { text: 'Walt Disney', correct: true },
            { text: 'Meryl Streep', correct: false},
            { text: 'James Cameron', correct: false}
        ]
    },
    {
        question: 'What year did World War I start?',
        answer: [
            { text: '1914', correct: true },
            { text: '1899', correct: false },
            { text: '1938', correct: false},
            { text: '1922', correct: false}
        ]
    },
    {
        question: 'How many time zones are there in the world?',
        answer: [
            { text: '12', correct: false },
            { text: '36', correct: false },
            { text: '22', correct: false},
            { text: '24', correct: true}
        ]
    },
    {
        question: 'Which is the largest land living mammal?',
        answer: [
            { text: 'Polar bear', correct: false },
            { text: 'Elephant', correct: true },
            { text: 'Hippo', correct: false},
            { text: 'Grizzly bear', correct: false}
        ]
    },
    {
        question: 'Which city has the largest population in the world?',
        answer: [
            { text: 'Delhi', correct: false },
            { text: 'Mexico City', correct: false },
            { text: 'Tokyo', correct: true},
            { text: 'London', correct: false}
        ]
    }
]
