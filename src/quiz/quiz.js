const startBtn = document.getElementById('start-btn')
const prevBtn = document.getElementById('prev-btn')
const submitBtn = document.getElementById("submit-btn")
const inputBtn = document.getElementById('input-text')
const backBtn = document.getElementById('back-btn')
const questContainerElement = document.getElementById('questionnaire-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-btn')

let listQuestions, currentQuestionIndex

startBtn.addEventListener('click', startGame)
prevBtn.addEventListener('click', () => {
  currentQuestionIndex--
  setNextQuestion()
})
submitBtn.addEventListener('click', () => {
  console.log("Sending to your email")
  afterSendEmail()
})

function startGame() {
  startBtn.classList.add('hide')
  listQuestions = questions.sort()
  currentQuestionIndex = 1
  questContainerElement.classList.remove('hide')
  setNextQuestion()
}

function setNextQuestion() {
  resetState()
  if (currentQuestionIndex > 8){
    showSendEmail()
  } else {
  showQuestion(listQuestions[currentQuestionIndex])
  }
}

function showQuestion(question) {
  if (currentQuestionIndex > 1) {
    prevBtn.classList.remove('hide')
  } else if (currentQuestionIndex == 1){
    prevBtn.classList.add('hide')
  } 
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('button')
    button.addEventListener('click', () => {
      currentQuestionIndex++
      setNextQuestion()
    })
    answerButtonsElement.appendChild(button)
  })
}

function resetState() {
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function showSendEmail(){
  questionElement.innerText = "Enter your email to unlock discounts and view your results"
  prevBtn.classList.add('hide')
  inputBtn.classList.remove('hide')
  submitBtn.classList.remove('hide')
}

function afterSendEmail(){
  questionElement.innerText = "Thank You...."
  submitBtn.classList.add('hide')
  inputBtn.classList.add('hide')
  backBtn.classList.remove('hide')
}

const questions = [
  {
    question: 'What is your preferred sleep position?',
    answers: [
      { text: 'Stomatch', img: '../assets/images/Stomach-2.svg'},
      { text: 'Side', img: '../assets/images/back.svg'},
      { text: 'Back', img: ''},
      { text: 'Combination', img: ''}
    ]
  },
  {
    question: 'What level of firmness do you prefer?',
    answers: [
      { text: 'Soft', img: '' },
      { text: 'Medium', img: '' },
      { text: 'Hard', img: '' }
    ]
  },
  {
    question: 'Is web development funWho will be sleeping on this mattress?',
    answers: [
      { text: 'Me', img: '' },
      { text: 'Me + Partner', img: '' },
      { text: 'Me + Pet/s', img: '' },
      { text: 'Me + Partner + Pet/s', img: ''}
    ]
  },
  {
    question: 'What mattress feel do you prefer?',
    answers: [
      { text: 'Neutral', img: ''},
      { text: 'Memory', img: ''},
      { text: 'Latex Foam Feel', img: ''},
      { text: 'Pillow', img: ''},
      { text: 'Gel-Like', img: ''},
      { text: 'Dont Know', img: ''}
    ]
  },
  {
    question: 'How much are you willing to spend on a mattress?',
    answers: [
      { text: "I'm on a budget", img: ''},
      { text: 'A moderate Amount', img: ''},
      { text: "It Doesn't Matter", img: ''}
    ]
  },
  {
    question: 'Which common health issue is your biggest concern?',
    answers: [
      { text: 'Back Pain', img: ''},
      { text: 'Joint Pain', img: ''},
      { text: 'Hot Sleeper', img: ''},
      { text: 'None of these', img: ''}
    ]
  },
  {
    question: 'What mattress type are you interested in?',
    answers: [
      { text: 'Foam', img: ''},
      { text: 'Hybrid', img: ''},
      { text: 'Eco Friendly', img: ''},
      { text: "Don't Know", img: ''}
    ]
  },
  {
    question: 'How much do you weigh?',
    answers: [
      { text: 'Less Than 150 lbs', img: ''},
      { text: "I'm in the Middle", img: ''},
      { text: 'Over 230 lbs', img: ''}
    ]
  },
  {
    question: 'You need the mattress in?',
    answers: [
      { text: '0 - 30 days', img: ''},
      { text: '30+ days', img: ''},
      { text: "I'm just looking", img: ''}
    ]
  },
]