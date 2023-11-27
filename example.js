let player = {
  name: 'Trisha',
  winningWords: []
}

function checkForWin(playerWord, correctWord, player) {
  if(playerWord === correctWord) {
    player.winningWords.push(playerWord)
    return 'Correct!'
  } else {
    return 'Incorrect, try again!'
  }
}


module.exports = { checkForWin };