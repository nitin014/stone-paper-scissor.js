/*  
*Rock paper scissors is a classic two player game.
*The possible outcomes are:
     Rock destroys scissors.
     Scissors cut paper.
     Paper covers rock.
     If there’s a tie, then the game ends in a draw. 
 
*program flow:
     Get the user’s choice.
     Get the computer’s choice.
     Compare the two choices and determine a winner.
    Start the program and display the results.
*/

const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();
  if (
    userInput === "rock" ||
    userInput === "paper" ||
    userInput === "scissors"
  ) {
    return userInput;
  } else {
    console.log("error");
  }
};
// checking the fn working properly
//const userChoice = getUserChoice('roc');
//console.log(userChoice);
const getComputerChoice = () => {
  const randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber) {
    case 0:
      return "rock";
      break;
    case 1:
      return "paper";
      break;
    case 2:
      return "scissors";
      break;
  }
};
// checking the fn working properly
//const userChoice = getComputerChoice('1');
//console.log(userChoice);

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return "The game is a tie!";
  }
  if (userChoice === "rock") {
    if (computerChoice === "paper") {
      return "The computer won!";
    } else {
      return "You won!";
    }
  }
  if (userChoice === "paper") {
    if (computerChoice === "scissors") {
      return "The computer won!";
    } else {
      return "You won!";
    }
  }
  if (userChoice === "scissors") {
    if (computerChoice === "rock") {
      return "The computer won!";
    } else {
      return "You won!";
    }
  }
};
/*console.log("userChoice & computerChoice");
console.log(determineWinner('scissors', 'paper')); 
console.log(determineWinner('paper', 'paper')); 
console.log(determineWinner('rock', 'paper'));
*/

function playGame() {
  var userChoice = getUserChoice("paper");
  if (userChoice.toLowerCase() === "bomb") {
    console.log("Cheater! You win with the secret bomb code!");
    return;
  }
  var computerChoice = getComputerChoice();
  console.log("User choice: " + userChoice);
  console.log("Computer choice: " + computerChoice);
  console.log(determineWinner(userChoice, computerChoice));
}
playGame();
