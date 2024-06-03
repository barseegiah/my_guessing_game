let randomNumber = Math.floor(Math.random() * 100) + 1; 
let attempts = 5; 
let attempt = document.querySelector(".attempt"); 
attempt.innerHTML = "Attempts left: " + attempts; 

// Function to handle the user's guess
function makeGuess() {
    const guess = parseInt(document.getElementById('guessInput').value); 
    const message = document.getElementById('message'); 
    attempts--; // Decrease the number of attempts
    attempt.innerHTML = "Attempts left: " + attempts; 

    if (attempts > 0) {
        if (guess < randomNumber) {
            message.textContent = 'Too low! Try again.'; 
            message.style.color = 'orange'; 
        } else if (guess > randomNumber) {
            message.textContent = 'Too high! Try again.'; 
            message.style.color = 'red'; 
        } else {
            message.textContent = 'Congratulations! You guessed it right!'; 
            message.style.color = 'green'; 
            document.getElementById('guessInput').disabled = true; 
            showRestartOption(); 
        }
    } else {
        if (guess === randomNumber) {
            message.textContent = 'Congratulations! You guessed it right!'; 
            message.style.color = 'green'; 
        } else {
            message.textContent = `You've used all your attempts. The correct answer was ${randomNumber}. Please try again!`; // Inform the user they've used all attempts and show the correct answer
            message.style.color = 'blue'; 
        }
        // Disable the input field
        document.getElementById('guessInput').disabled = true; 
        showRestartOption(); // Show the restart option
    }
}

// Function to display the restart button
function showRestartOption() {
    // Create a new button element
    const restartButton = document.createElement('button'); 
    restartButton.textContent = 'Restart Game'; 
    restartButton.id = 'restartButton';
    restartButton.onclick = restartGame; 
    document.body.appendChild(restartButton); 
}

// Function to restart the game
function restartGame() {
    // Generate a new random number
    randomNumber = Math.floor(Math.random() * 100) + 1; 
    attempts = 5; 
    document.getElementById('guessInput').disabled = false; 
    document.getElementById('guessInput').value = ''; 
    document.getElementById('message').textContent = ''; 
    attempt.innerHTML = "Attempts left: " + attempts; 

    const restartButton = document.getElementById('restartButton'); 
    if (restartButton) {
        restartButton.remove(); 
    }
}


