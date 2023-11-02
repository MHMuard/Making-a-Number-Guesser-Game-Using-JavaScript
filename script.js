// Function to start the game
function startGame() {
    let low = 1;
    let high = 10;
    let correct_ans = Math.floor(Math.random() * (high - low + 1)) + low;
    let chances = 3;

    for (let i = 0; i < chances; i++) {
        let userGuess = parseInt(prompt(`Guess a number between ${low} and ${high}. (Chances left: ${chances - i})`));

        if (userGuess === correct_ans) {
            alert('You Win!');
            break;
        } else if (userGuess < correct_ans) {
            alert('Correct answer is greater!');
        } else {
            alert('Correct answer is smaller!');
        }

        if (i === chances - 1) {
            alert('You lose!');
        }
    }
}

// Start the game when the "Start Game" button is clicked
document.getElementById("startGame").addEventListener("click", startGame);
