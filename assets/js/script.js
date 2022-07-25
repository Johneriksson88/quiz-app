const startButton = document.getElementById('start-btn')
var nextButton = document.getElementById('next-btn')
var correct
const questionContainerElement = document.getElementById('question-container')
let shuffledQuestions, currentQuestionIndex
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')
startButton.addEventListener('click', startGame)
let score
let scoreElement = document.getElementById('score')

nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
} )

function startGame() {
    score = 0
    console.log('Started game')
    startButton.classList.add('hide')
    questionsContainer = document.getElementById('quiz-container')
    questionsContainer.classList.remove('hide')
    welcomeText = document.getElementById('welcome-text')
    welcomeText.classList.add('hide')
    nextButton = document.getElementById('next-btn')
    nextButton.classList.remove('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    setNextQuestion()
}

function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
      const button = document.createElement('button')
      button.innerText = answer.text
      button.classList.add('btn')
      if (answer.correct) {
        button.dataset.correct = answer.correct
      }
      button.addEventListener('click', selectAnswer)
      answerButtonsElement.appendChild(button)
    })
  }

function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
      setStatusClass(button, button.dataset.correct)
    })
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
      nextButton.classList.remove('hide')
    } else {
      startButton.innerText = 'Restart'
      startButton.classList.remove('hide')
    }
  }

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
    incrementScore
  } else {
    element.classList.add('incorrect')
  }
}

function clearStatusClass(element) {
    if (correct) {
        element.classList.remove('correct')
    } else {
        element.classList.remove('incorrect')
    }
}

function resetState() {
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild
        (answerButtonsElement.firstChild)

    }
}

function incrementScore() {
    score++
    scoreElement.document.innerText = score
}

var questions = [
    {
        question: 'What is the capital of Australia?',
        answers: [
            { text: 'Sydney', correct: false },
            { text: 'Canberra', correct: true },
            { text: 'Melbourne', correct: false},
            { text: 'Perth', correct: false}
        ]
    },
    {
        question: 'Which single person has won the most Academy Awards of all time?',
        answers: [
            { text: 'Christopher Lee', correct: false },
            { text: 'Walt Disney', correct: true },
            { text: 'Meryl Streep', correct: false},
            { text: 'James Cameron', correct: false}
        ]
    },
    {
        question: 'What year did World War I start?',
        answers: [
            { text: '1914', correct: true },
            { text: '1899', correct: false },
            { text: '1938', correct: false},
            { text: '1922', correct: false}
        ]
    },
    {
        question: 'How many time zones are there in the world?',
        answers: [
            { text: '12', correct: false },
            { text: '36', correct: false },
            { text: '22', correct: false},
            { text: '24', correct: true}
        ]
    },
    {
        question: 'Which is the largest land living mammal?',
        answers: [
            { text: 'Polar bear', correct: false },
            { text: 'Elephant', correct: true },
            { text: 'Hippo', correct: false},
            { text: 'Grizzly bear', correct: false}
        ]
    },
    {
        question: 'Which city has the largest population in the world?',
        answers: [
            { text: 'Delhi', correct: false },
            { text: 'Mexico City', correct: false },
            { text: 'Tokyo', correct: true},
            { text: 'London', correct: false}
        ]
    }
]
