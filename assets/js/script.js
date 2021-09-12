

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
var startButton2 = document.createElement("input");

var answer2 = document.querySelector(".answerbutton2");
var button2 = document.createElement("input");

var answer3 = document.querySelector(".answerbutton3");
var button3 = document.createElement("input");

var answer4 = document.querySelector(".answerbutton4");
var button4 = document.createElement("input");

var wrongAnswer = document.querySelector(".wrong");
var buttonWrong = document.createElement("input");


function quizGame() {
    // Need a starting page with start button

    startGame.textContent = "Quiz Time!"
    startButton.appendChild(startButton2)
    startButton2.setAttribute("type", "button")
    startButton2.setAttribute("value", "Start Quiz!")

    // add event listener to start game
    startButton.addEventListener("click", function () {
        // send message to start game?

        sendMessage();
    })

    function sendMessage() {
        startGame.textContent = "Quiz started!"
        // removeChild might fix issues
        startButton.removeChild(startButton2)
        
        wrongAnswer.appendChild(buttonWrong)
        buttonWrong.setAttribute("type", "button")
        buttonWrong.setAttribute("value", "Wrong")

        answer2.appendChild(button2)
        button2.setAttribute("type", "button")
        button2.setAttribute("value", "Right")

        wrongAnswer.appendChild(buttonWrong)
        buttonWrong.setAttribute("type", "button")
        buttonWrong.setAttribute("value", "Wrong")

        wrongAnswer.appendChild(buttonWrong)
        buttonWrong.setAttribute("type", "button")
        buttonWrong.setAttribute("value", "Wrong")

        answer2.addEventListener("click", function () {
            sendMessage2()
        })

        // quize pages need timer
    }

    function sendMessage2() {
        startGame.textContent = "Correct!"


        answer2.removeChild(button2)
        

        answer3.appendChild(button3)
        button3.setAttribute("type", "button")
        button3.setAttribute("value", "Right")

        answer4.appendChild(button4)
        button4.setAttribute("type", "button")
        button4.setAttribute("value", "Wrong")

        answer3.addEventListener("click", function () {
            sendMessage3()
        })

        // quize pages need timer
    }

    function sendMessage3() {
        startGame.textContent = "Correct!!!"

        startButton.appendChild(startButton2)
        startButton2.setAttribute("type", "button")
        startButton2.setAttribute("value", "Right")

        answer2.appendChild(button2)
        button2.setAttribute("type", "button")
        button2.setAttribute("value", "Wrong")

        answer3.appendChild(button3)
        button3.setAttribute("type", "button")
        button3.setAttribute("value", "Wrong")

        answer4.appendChild(button4)
        button4.setAttribute("type", "button")
        button4.setAttribute("value", "Wrong")

        startButton.addEventListener("click", function () {
            sendMessage4()
        }) 
    }

    function sendMessage4() {
        startGame.textContent = "Correct Again!"

    }
}


quizGame();