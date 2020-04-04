//Player Moves
function load() {
    console.log("foo");
    let playerHand = prompt('Pick your destiny');
    playerHand = normalize(playerHand);
    play(playerHand);
    playerSelection = playerHand;
let computerSelection = computerPlay(hands)
    game(playerSelection, computerSelection);
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

function play(playerHand) {
    if (playerHand === 'Rock') {
        let playerSelection = 'Rock';
        console.log('You threw ' + playerSelection + '!');
    } else if (playerHand === 'Paper') {
        let playerSelection = 'Paper';
        console.log('You threw ' + playerSelection + '!');
    } else if (playerHand === 'Scissors') {
        let playerSelection = 'Scissors';
        console.log('You threw ' + playerSelection + '!');
    } else {
        alert('Please enter your move, Rock, Paper, or Scissors')
        let playerHand = prompt('Pick your destiny');
        playerHand = normalize(playerHand);
        play(playerHand);
    }
}

//Computer Moves
let hands = ['Rock', 'Paper', 'Scissors'];
computerPlay(hands);

function computerPlay(array) {
    let hand = array[random(array.length, 0)];
    return hand;
}

function random(upper, lower) {
    let num = Math.floor(Math.random() * (upper - lower) + lower);
    return num;
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === "Rock" && computerSelection === "Rock") {
        return 'You tied! Better luck next time!';
    } else if (playerSelection === "Rock" && computerSelection === "Paper") {
        return 'You LOST! Oh the SHAME!!!';
    } else if (playerSelection === "Rock" && computerSelection === "Scissors") {
        return 'You won, this time...';
    } else if (playerSelection === "Paper" && computerSelection === "Paper") {
        return 'You tied!';
    } else if (playerSelection === "Paper" && computerSelection === "Rock") {
        return 'You won, this time...';
    } else if (playerSelection === "Paper" && computerSelection === "Scissors") {
        return 'You LOST! Oh the SHAME!!!';
    } else if (playerSelection === "Scissors" && computerSelection === "Scissors") {
        return 'You tied!';
    } else if (playerSelection === "Scissors" && computerSelection === "Rock") {
        return 'You LOST! Oh the SHAME!!!';
    } else if (playerSelection === "Scissors" && computerSelection === "Paper") {
        return 'You won, this time...';
    }
}


function game(playerSelection, computerSelection) {
    console.log(playRound(playerSelection, computerSelection));
    playerHand = prompt('Pick your destiny');
    playerHand = normalize(playerHand);
    play(playerHand);
    computerPlay(hands);
    console.log(playRound(playerSelection, computerSelection));
    playerHand = prompt('Pick your destiny');
    playerHand = normalize(playerHand);
    play(playerHand);
    computerPlay(hands);
    console.log(playRound(playerSelection, computerSelection));
    playerHand = prompt('Pick your destiny');
    playerHand = normalize(playerHand);
    play(playerHand);
    computerPlay(hands);
    console.log(playRound(playerSelection, computerSelection));
    playerHand = prompt('Pick your destiny');
    playerHand = normalize(playerHand);
    play(playerHand);
    computerPlay(hands);
    console.log(playRound(playerSelection, computerSelection));
}

