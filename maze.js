const prompt = require('prompt-sync')()
const name = prompt('Yoo, tell me ur name.. ')
console.log(`Welcome to the game, ${name}.`)

const shouldWePlay = prompt('Which pill do u choose ')

// const condition = shouldWePlay.toLowerCase() === 'red'
// console.log(condition)

if (shouldWePlay.toLowerCase() === 'red') {
  // Game Logic

} else if (shouldWePlay.toLowerCase() === 'blue') {
  console.log(`your loss ${name}`)
} else {
  console.log('Fix ur typo man')
}