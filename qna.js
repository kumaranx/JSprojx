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

const questions = loadQuestions()
const randomQuestions = getRandomQuestions(questions, 4)
