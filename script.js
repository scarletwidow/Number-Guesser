let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

const generateTarget = () => {
  return Math.floor(Math.random() * 10)
};
// console.log(generateTarget());

const getAbsoluteDistance = (num1, num2) => {
  return Math.abs(num1 - num2);
};


const compareGuesses = (human, computer, target) => {
  const humanGuess = getAbsoluteDistance(human, target);
  if(human > 9 || human < 0) {
    alert('Number is out of range!');
  };
  // console.log(humanGuess);
  const computerGuess = getAbsoluteDistance(computer, target);
  // console.log(computerGuess);
  if(humanGuess <= computerGuess) {
    return true;
  } else {
    return false;
  }
};

// console.log(compareGuesses(5, 8, 6));

const updateScore = winner => {
  if(winner === 'human') {
   humanScore += 1;
  };

  if(winner === 'computer') {
   computerScore += 1;
  };
};

const advanceRound = () => {
  currentRoundNumber += 1;
};

