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

const questions = loadQuestions()
console.log(questions)