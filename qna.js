const prompt = require('prompt-sync')()
const fs = require('fs')

function loadQuestions() {
  try {
    const data = fs.readFileSync("questions.json", "utf-8")
    const questions = JSON.parse(data).questions
    return questions
  } catch (e) {
    console.log('Error occured while loading file', e)
    return []
  }
}

function getRandomQuestions(questions, numQuestions) {
  if (numQuestions > questions.length) {
    numQuestions = questions.length
  }

  const shuffled = questions.sort(() => {
    return 0.5 - Math.random()
  })
  return shuffled.slice(0, numQuestions)
}

function askQuestion(question) {
  console.log(question.question)
  for (let i = 0; i < question.options.length; i++) {
    const option = question.options[i]
    console.log(`${i + 1}. ${option}`)
  }
  const choice = parseInt(prompt('Choose your number: '))
  if (isNaN(choice) || choice < 1 || choice > question.options.length) {
    console.log('Invalid. Incorrect choice')
    return false
  }
  const choiceValue = question.options[choice - 1]
  return choiceValue === question.answer
}

const numQuestions = prompt('Enter the number of questions:')
const questions = loadQuestions()
const randomQuestions = getRandomQuestions(questions, 4)
const correct = askQuestion(randomQuestions[0])
console.log(correct)