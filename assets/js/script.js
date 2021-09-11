

// ```
// GIVEN I am taking a code quiz
// WHEN I click the start button
// THEN a timer starts and I am presented with a question
// WHEN I answer a question
// THEN I am presented with another question
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and my score
var startGame = document.querySelector(".question");
var startButton = document.querySelector(".startbutton");


function quizGame() {
    // Need a starting page with start button

    startGame.textContent = "Quiz Time!"

    startButton.setAttribute("type", "button", "value", "Quiz")
    // add event listener to start game
    startButton.addEventListener("click", function () {
        // send message to start game?

        sendMessage();
    })

    function sendMessage() {
        startGame.textContent = "Quiz started!"
    }

    // quize pages need timer
}

quizGame();