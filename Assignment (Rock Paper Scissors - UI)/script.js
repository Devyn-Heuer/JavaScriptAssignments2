const beginButton = document.querySelector('.start-up button');
const startUpMenu = document.querySelector('.start-up');
const play = document.querySelector('.play');

// create global
let playerTotal = 0;
let computerTotal = 0;
let roundNumber =0;

beginButton.addEventListener('click', () => {
    startUpMenu.classList.add('inactive');
    play.classList.add('active');
})

function playMatch() {
    const options = document.querySelectorAll('.player-options button');
    const computerOptions =['Rock', 'Scissors', 'Paper'];
    const playerHand = document.querySelector('#left');
    const computerHand = document.querySelector('#right');

    options.forEach(option => {
        option.addEventListener('click', function() {
           
            let computerNumber = Math.floor(Math.random() * 3);
            let computerChoice = computerOptions[computerNumber];

            playRound(this.textContent, computerChoice);

            playerHand.src = `./images/${this.textContent}.png`;
            computerHand.src = `./images/${computerChoice}.png`;
        })
    })
}

// one round
function playRound(playerSelection, computerSelection){
    const winner = document.querySelector('.winner');
    const round = document.querySelector('.round');

    if((playerSelection == 'Rock' && computerSelection == 'Scissors') || 
       (playerSelection == 'Paper' && computerSelection == 'Rock') || 
       (playerSelection == 'Scissors' && computerSelection == 'Paper')){
        // wins 
        roundNumber++;
        round.textContent = `Round: ${roundNumber}`;
        winner.textContent = `You win! ${playerSelection} beats ${computerSelection}.`;
        playerTotal++;
        updateScore();
    } else if(playerSelection == computerSelection){
        // draw
        roundNumber++;
        round.textContent = `Round: ${roundNumber}`;
        winner.textContent = "It's a Tie";
    } else {
        // computer wins   
        roundNumber++;
        round.textContent = `Round: ${roundNumber}`;     
        winner.textContent = `You lose! ${computerSelection} beats ${playerSelection}.`;
        computerTotal++;
        updateScore();
    }
    // game won
    if (playerTotal == 5 || computerTotal == 5) {
        round.textContent = `Total rounds: ${roundNumber}. Click refresh on the browser to play again.`;
        document.querySelector('#choice1').disabled = true;
        document.querySelector('#choice2').disabled = true;
        document.querySelector('#choice3').disabled = true;
        if (playerTotal > computerTotal) {
            winner.textContent = `Congratulations. You are the winner.`; 
        } else {
            winner.textContent = `The computer wins. Better luck next time.`;
        }       
    }
}

// update scores
function updateScore(){
    const playerScore = document.querySelector('.player-score p');
    const computerScore = document.querySelector('.computer-score p');
    playerScore.textContent = playerTotal;
    computerScore.textContent = computerTotal;    
}

playMatch()