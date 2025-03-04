const prompt = require('prompt-sync')()
const name = prompt('Yoo, tell me ur name.. ')
console.log(`Welcome to the game, ${name}.`)

const shouldWePlay = prompt('Which pill do u choose? ')

// const condition = shouldWePlay.toLowerCase() === 'red'
// console.log(condition)

if (shouldWePlay.toLowerCase() === 'red') {
  // Game Logic
  const leftOrRight = prompt('You are in a maze, wanna go left or right? ')
  if (leftOrRight === 'left') {
    console.log('Great choice')
    const cross = prompt('Now there is a portkey wanna cross? ')
    if (cross === 'yes') {
      console.log('Oops, the voldemort has traped you')
      const spell = prompt('Which spell do you choose? ')
      if (spell === 'avadakedara') {
        console.log('How is the Victory feel? ,you have defeated the Great Voldemort!! ')
      } else {
        console.log('You are soo Dead... ')
      }
    } else {
      console.log('You are too weak, the maze has traped you. You are Dead...')
    }
  }

} else if (shouldWePlay.toLowerCase() === 'blue') {
  console.log(`your loss ${name}`)
} else {
  console.log('Fix ur typo man')
}