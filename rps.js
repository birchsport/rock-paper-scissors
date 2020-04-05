//Initialized variables
let playerSelection;
let playerScore = 0;
let computerSelection;
let computerScore = 0;
let hands = ['Rock', 'Paper', 'Scissors'];
let scoreLimit;

//Basic Functions
function random(upper, lower) {
    let num = Math.floor(Math.random() * (upper - lower) + lower);
    return num
}

function normalize(playerHand) {
    let selectionLower = playerHand;
    let selectionUpper = playerHand;
    selectionLower = selectionLower.slice(1, playerHand.length)
    selectionLower = selectionLower.toLowerCase();
    selectionUpper = selectionUpper.charAt(0);
    selectionUpper = selectionUpper.toUpperCase();
    return selectionUpper + selectionLower;
}

//Player Moves
function play(playerHand) {
    if (playerHand === 'Rock') {
        let playerSelection = 'Rock';
        console.log('You threw ' + playerSelection + '!');
    } else if (playerHand === 'Paper'){
        let playerSelection = 'Paper';
        console.log('You threw ' + playerSelection + '!');
    } else if (playerHand === 'Scissors'){
        let playerSelection = 'Scissors';
        console.log('You threw ' + playerSelection + '!');
    } else {
        alert('Please enter your move, Rock, Paper, or Scissors')
        game(playerSelection, computerSelection);
    }
}

//Computer Moves
function computerPlay(array) {
    let hand = array[random(array.length, 0)];
    return hand;
}

//Play the game.
function playRound(playerSelection, computerSelection) {
    if (playerSelection === "Rock" && computerSelection === "Rock") {
        return 'You tied! Better luck next time!';
    } else if (playerSelection === "Rock" && computerSelection === "Paper") {
        computerScore++;
        return 'You LOST! Oh the SHAME!!!';
    } else if (playerSelection === "Rock" && computerSelection === "Scissors") {
        playerScore++;
        return 'You won, this time...';
    } else if (playerSelection === "Paper" && computerSelection === "Paper") {
        return 'You tied!';
    } else if (playerSelection === "Paper" && computerSelection === "Rock") {
        playerScore++;
        return 'You won, this time...';
    } else if (playerSelection === "Paper" && computerSelection === "Scissors") {
        computerScore++;
        return 'You LOST! Oh the SHAME!!!';
    } else if (playerSelection === "Scissors" && computerSelection === "Scissors") {
        return 'You tied!';
    } else if (playerSelection === "Scissors" && computerSelection === "Rock") {
        computerScore++;
        return 'You LOST! Oh the SHAME!!!';
    } else if (playerSelection === "Scissors" && computerSelection === "Paper") {
        playerScore++;
        return 'You won, this time...';
    } 
}
    
function game(playerSelection, computerSelection) {
    playerHand = prompt('Pick your destiny');
    playerHand = normalize(playerHand);
    play(playerHand);
    playerSelection = playerHand;
    computerPlay(hands);
    computerSelection = computerPlay(hands)
    console.log(playRound(playerSelection, computerSelection));
    console.log ('Your score is ' + playerScore + '! The Computer score is ' + computerScore + '! ');
}

let rounds;
scoreLimit = prompt('Let\'s play Rock Paper Scissors! Please choose what score you want to play to! ')
for (playerScore = 0, computerScore = 0, rounds = 1; playerScore < scoreLimit && computerScore < scoreLimit; rounds++) {
    console.log ('Rock Paper Scissors round #' + rounds + '! ');
    game(playerSelection, computerSelection);;
}

