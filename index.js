
var userScore = 0;
var computerScore = 0;

//Function for game
function playGame(score) {
  do {
    var user = userChoice();
    var computer = compChoice();
    var result = compareChoice(user, computer);
    updateScores(result, 1);
  }while(userScore < 3 && computerScore < 3);
  if(userScore > computerScore) {
    alert("The user has won 3 out of 5 points. So the user wins!");
  }
  else {
    alert("The computer has won 3 out of 5 points. So the computer wins!");
  }
}

//Function for user choice
function userChoice(){
  var choice = prompt("(r)rock ,(p)paper or (s)scissors?")
  switch (choice) {
    case "r":
    case "rock":
      return "rock";
      break;
    case "p":
    case "paper":
      return "paper";
      break;
    case "s":
    case "scissors":
      return "scissors";
      break;
    default:
      prompt("Please choose (r)rock ,(p)paper or (s)scissors?");
      return userChoice()
  }
}

//Function for computer choice
function compChoice() {
  var comp = ["rock", "paper", "scissors"];
  var compChoice = comp[Math.floor(Math.random() * Math.floor(3))];
  return compChoice;
}

//Function to compare choices
function compareChoice(choice1, choice2) {
  alert("user chose: " + choice1 + " and the computer chose: " + choice2 + "!");
  if(choice1 === choice2) {
    alert("You and the computer chosen the same thing! Go again, no score added!");
    return 0;
  }
  if((choice1 === "rock" && choice2 === "scissors") || (choice1 === "paper" && choice2 === "rock") || (choice1 === "scissors" && choice2 === "paper")) {
    alert("user wins the round!");
    return 1;
  } else {
    alert("Computer wins the round!");
    return 2;
  }
}

//Function to update scores after each round
function updateScores(result, points) {
  if(result === 1) {
    userScore += points;
  }
  if(result === 2) {
    computerScore += points;
  }
  if(result === 0) {
    computerScore += 0;
    userScore += 0;
  }
  alert("The user score is: " + userScore + " The computer's score is: " + computerScore);
}

//How many games should be played
playGame(5);
