//Initialized variables
let playerSelection;
let playerScore = 0;
let computerSelection;
let computerScore = 0;
const scoreLimit = 5;
let hands = ['Rock', 'Paper', 'Scissors'];
let round = 0;
let game = 1;
let totalRounds = 0;
let gamesLost = 0;
let gamesWon = 0;

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

function resetScore(){
    playerScore = 0;
    computerScore = 0;
}

//Player Moves
function play(playerHand) {
    if (playerHand === 'Rock') {
        let playerSelection = 'Rock';
        console.log('You threw ' + playerSelection + '!');
        //TODO stuff
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

//Game functionality.
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
    
function guiPlayRound(playerSelection, computerSelection) {
    computerPlay(hands);
    computerSelection = computerPlay(hands)
    rpsResults1.innerText = `\n` + playRound(playerSelection, computerSelection);
    rpsResults1.innerText += `\n` + (`Your score is ${playerScore}! The Computer score is ${computerScore}! `);
    round++;
    totalRounds++;
}

function gameRecap(playerScore, computerScore){
    if (playerScore > computerScore) {
        gamesWon++;
        resetScore();
        return (`Score: ${playerScore}:${computerScore} You won! Congratulations and thank you for playing!`);
    } else if (computerScore > playerScore) {
        gamesLost++;
        resetScore();
        return (`Score: ${playerScore}:${computerScore} You lost, try again tomorrow...`);
    } else {
        return ("You broke it...");
    }
}

function displayStats(){
    rpsResults2.textContent = (`Rock Paper Scissors - Game: ${game}, Round: ${round}!`);
    rpsResults3.textContent = (`Total rounds: ${totalRounds}, Games won: ${gamesWon}, Games lost: ${gamesLost}`);
}

//div rpsButtons
const rpsButtonsContainer = document.querySelector("div#rpsButtonsContainer");
const rpsButtons = document.createElement('form');
rpsButtons.setAttribute('id', 'rpsButtons');

//rock
const rpsButtonsRock = document.createElement('button');
rpsButtonsRock.setAttribute('id', 'rock');
rpsButtonsRock.textContent = ('Rock')
rpsButtonsRock.onclick = playRock;

function playRock(){
    event.preventDefault();
    playerSelection = 'Rock';
    guiPlayRound(playerSelection, computerSelection);
    displayStats();
    if (playerScore >= scoreLimit) {
        rpsDisplayResults();
    } else if (computerScore >= scoreLimit) {
        rpsDisplayResults();
    }
};

//Paper
const rpsButtonsPaper = document.createElement('button');
rpsButtonsPaper.setAttribute('id', 'paper');
rpsButtonsPaper.textContent = ('Paper')
rpsButtonsPaper.addEventListener('click', playPaper);

function playPaper(){
    event.preventDefault()
    playerSelection = 'Paper';
    guiPlayRound(playerSelection, computerSelection);
    displayStats();
        if (playerScore >= scoreLimit) {
        rpsDisplayResults();
    } else if (computerScore >= scoreLimit) {
        rpsDisplayResults();
    }
};

//Scissors
const rpsButtonsScissors = document.createElement('button');
rpsButtonsScissors.setAttribute('id', 'scissors');
rpsButtonsScissors.textContent = ('Scissors')
rpsButtonsScissors.addEventListener('click', playScissors);

function playScissors(){
    event.preventDefault()
    playerSelection = 'Scissors';
    guiPlayRound(playerSelection, computerSelection);
    displayStats();
    if (playerScore >= scoreLimit) {
        rpsDisplayResults();
    } else if (computerScore >= scoreLimit) {
        rpsDisplayResults();
    }
};

//Apply Buttons to container and apply container to html
rpsButtonsContainer.appendChild(rpsButtons);
rpsButtons.appendChild(rpsButtonsRock);
rpsButtons.appendChild(rpsButtonsPaper);
rpsButtons.appendChild(rpsButtonsScissors);

//div rpsResultsContainer
const rpsResultsContainer = document.querySelector("div#rpsResultsContainer");

const rpsResults1 = document.createElement('p');
rpsResults1.setAttribute('id', 'rpsResults1');

const rpsResults2 = document.createElement('p');
rpsResults2.setAttribute('id', 'rpsResults2');

const rpsResults3 = document.createElement('p');
rpsResults3.setAttribute('id', 'rpsResults3');

function rpsDisplayResults(){
    let gameRecapResults = gameRecap(playerScore, computerScore);
    rpsResults1.textContent = gameRecapResults;
    game++;
    round = 0;
};

//Apply results to container
rpsResultsContainer.appendChild(rpsResults1);
rpsResultsContainer.appendChild(rpsResults2);
rpsResultsContainer.appendChild(rpsResults3);

