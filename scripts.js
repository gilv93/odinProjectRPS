const icons = document.querySelectorAll('.icon');
const selectionText = document.querySelector('.selection');
const userScore = document.querySelector('.player-score');
const compScore = document.querySelector('.computer-score');
const options = ["rock", "paper", "scissors"];
const playerSelected = document.querySelector('.user-weapon');
const compSelected = document.querySelector('.comp-weapon');
const messages = document.querySelector('.messages');
let pScore = 0;
let cScore = 0;


function showSelection(e) {
    selectionText.textContent = `${e.originalTarget.alt}`;
}

function removeSelection() {
    selectionText.textContent = '';
}

icons.forEach(icon => {
	icon.addEventListener('mouseover', showSelection);
	icon.addEventListener('mouseleave', removeSelection);
	icon.addEventListener('mousedown', playRound);
})



function playRound(e) {
    let compSelection = options[Math.floor(Math.random() * 3)];
    let playerSelection = `${e.originalTarget.alt}`;
    if (playerSelection == compSelection) {
       playerSelected.style.cssText = 'color: gray; font-size: 250%;';
       playerSelected.textContent = `${playerSelection}`;
       compSelected.style.cssText = 'color: gray; font-size: 250%;';
       compSelected.textContent = `${compSelection}`;
       userScore.textContent = `USER: ${pScore}`;
       compScore.textContent = `COMPUTER: ${cScore}`;
       messages.style.cssText = 'color: gray; font-size: 150%';
       messages.textContent = "It\'s a tie!";
    }
    else if ((playerSelection == "rock" && compSelection == "scissors") ||
    (playerSelection == "paper" && compSelection == "rock") ||
    (playerSelection == "scissors" && compSelection == "paper")) {
        playerSelected.style.cssText = 'color: green; font-size: 250%;';
        playerSelected.textContent = `${playerSelection}`;
        compSelected.style.cssText = 'color: red; font-size: 250%;';
        compSelected.textContent = `${compSelection}`;
        pScore++;
        userScore.textContent = `USER: ${pScore}`;
        compScore.textContent = `COMPUTER: ${cScore}`;
        messages.style.cssText = 'color: gray; font-size: 150%';
        messages.textContent = "You win this round!";
    }
    else {
        playerSelected.style.cssText = 'color: red; font-size: 250%;';
        playerSelected.textContent = `${playerSelection}`;
        compSelected.style.cssText = 'color: green; font-size: 250%;';
        compSelected.textContent = `${compSelection}`;
        cScore++;
        userScore.textContent = `USER: ${pScore}`;
        compScore.textContent = `COMPUTER: ${cScore}`;
        messages.style.cssText = 'color:gray; font-size: 150%';
        messages.textContent = "Computer wins this round!";
    }
    if (pScore == 5 || cScore == 5) {
	    icons.forEach(icon => {
		    icon.removeEventListener('mouseover', showSelection);
		    icon.removeEventListener('mouseleave', removeSelection);
		    icon.removeEventListener('mousedown', playRound);
	    })
        selectionText.textContent = ''
        selectionText.appendChild(newGame);
        newGame.addEventListener('click', resetGame);
        if (pScore == 5) {
            messages.textContent = 'You win it all!!';
        }
        else {
            messages.textContent = 'Computer wins. Ouch!!';
        }
    }
}

const newGame = document.createElement('button');
newGame.classList.add('btn')
newGame.textContent = 'Replay!'

function resetGame() {
    location.reload()
}


