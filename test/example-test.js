const chai = require('chai');
const expect = chai.expect;
const { checkForWin } = require('../example.js');

describe('checkForWin', function() {
  it('should add a word to player.winningWords if the answer is correct', function() {
    // Set Up
    const playerWord = 'potato';
    const correctWord = 'potato';
    const player = {
      name: 'Bob',
      winningWords: []
    }

    // Execution
    checkForWin(playerWord, correctWord, player);

    // Assertion
    expect(player.winningWords).to.deep.equal(['potato']);
  })

  it('should not update player.winningWords if the answer is wrong', function() {
    // Set Up
    const playerWord = 'potato';
    const correctWord = 'kitty';
    const player = {
      name: 'Bob',
      winningWords: []
    }

    // Execution
    checkForWin(playerWord, correctWord, player);

    // Assertion
    expect(player.winningWords).to.deep.equal([]);
  })

  it('should return "Correct!" if correct answer', function() {
    // Set Up
    const playerWord = 'potato';
    const correctWord = 'potato';
    const player = {
      name: 'Bob',
      winningWords: []
    }

    // // Execution
    // const feedback = checkForWin(playerWord, correctWord, player);

    // // Assertion  
    // expect(feedback).to.equal('Correct!');

    // Execution + Assertion
    expect(checkForWin(playerWord, correctWord, player)).to.equal('Correct!');
  })

  it('should return "Incorrect!" if incorrect answer', function() {
    // Set Up
    // Execution
    // Assertion
  })

})



// beforeEach <-----























// function createQuestion(questionText, correctAnswer) {
//   let question = {
//     questionText: questionText,
//     correctAnswer: correctAnswer
//   }
  
//   return question
// }

// // one function can (and probably should) have multiple tests


// // what would we need to test for this function?

// // test 1
// // - is createQuestion a function?

// // test 2
// // - two arguments should be passed into the function
// // - returns an object
// // - make sure that the returned object has two properties (questionText and correctAnswer) with values matching the arguments










// // input form that accepts the playerAnswer AND we only want to accept number
// // sad path -- user didn't do what you wanted them to do :(
// // happy path -- good user :)


// function checkAnswer(question, playerAnswer, score) {
//   if (/*playerAnswer is not a num*/) {
//     // throw error
//   }
//   if (playerAnswer === question.correctAnswer) {
//     score++
//   } else {
//     score--
//   }
//   return score
// }

// // at least two tests; because there are 2 scenarios (correct, incorrect)

// // test 1: if the answer is right, the score should increase by 1
// // test 2: if the answer is wrong, the score should decrease by 1
// // test 3: playerAnswer must be a number


// // You can't pass a test for sad paths unless your code is handling them


// // In mod 2, you will not test DOM manipulation and helper functions (functions that invoke other functions)

