

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
var mainQuestion = document.querySelector(".question2")
var startButton = document.querySelector(".startbutton");
var startButton2 = document.createElement("input");

// timer variables
var timer = document.querySelector(".clock")

// game button vars below
var answer2 = document.querySelector(".answerbutton2");
var button2 = document.createElement("input");

var answer3 = document.querySelector(".answerbutton3");
var button3 = document.createElement("input");

var answer4 = document.querySelector(".answerbutton4");
var button4 = document.createElement("input");

var answer5 = document.querySelector(".answerbutton5");
var button5 = document.createElement("input");

var answer6 = document.querySelector(".answerbutton6");
var button6 = document.createElement("input");

var wrongAnswer1 = document.querySelector(".wrong1");
var buttonWrong1 = document.createElement("input");

var wrongAnswer2 = document.querySelector(".wrong2");
var buttonWrong2 = document.createElement("input");

var wrongAnswer3 = document.querySelector(".wrong3");
var buttonWrong3 = document.createElement("input");


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
        mainQuestion.textContent = "Tigers are:"
        // removeChild might fix issues
        startButton.removeChild(startButton2)

        wrongAnswer1.appendChild(buttonWrong1)
        buttonWrong1.setAttribute("type", "button")
        buttonWrong1.setAttribute("value", "Blue")

        answer2.appendChild(button2)
        button2.setAttribute("type", "button")
        button2.setAttribute("value", "Orange")

        wrongAnswer2.appendChild(buttonWrong2)
        buttonWrong2.setAttribute("type", "button")
        buttonWrong2.setAttribute("value", "Green")

        wrongAnswer3.appendChild(buttonWrong3)
        buttonWrong3.setAttribute("type", "button")
        buttonWrong3.setAttribute("value", "Purple")

        answer2.addEventListener("click", function () {
            sendMessage2()
        })

        // quize pages need timer
    }

    function sendMessage2() {
        startGame.textContent = "Second question!"
        mainQuestion.textContent = "Dragons are:"

        answer2.removeChild(button2)

        buttonWrong1.setAttribute("type", "button")
        buttonWrong1.setAttribute("value", "dogs")

        buttonWrong2.setAttribute("type", "button")
        buttonWrong2.setAttribute("value", "monkeys")

        answer3.appendChild(button3)
        button3.setAttribute("type", "button")
        button3.setAttribute("value", "fantasy monsters")

        buttonWrong3.setAttribute("type", "button")
        buttonWrong3.setAttribute("value", "cats")


        answer3.addEventListener("click", function () {
            sendMessage3()
        })

        // quize pages need timer
    }

    function sendMessage3() {
        startGame.textContent = "Third Question!"
        mainQuestion.textContent = "Dogs have:"

        answer3.removeChild(button3)

        buttonWrong1.setAttribute("type", "button")
        buttonWrong1.setAttribute("value", "Wings")

        buttonWrong2.setAttribute("type", "button")
        buttonWrong2.setAttribute("value", "Scales")

        buttonWrong3.setAttribute("type", "button")
        buttonWrong3.setAttribute("value", "Poison stingers")

        answer4.appendChild(button4)
        button4.setAttribute("type", "button")
        button4.setAttribute("value", "Fur")

        answer4.addEventListener("click", function () {
            sendMessage4()
        })
    }

    function sendMessage4() {
        startGame.textContent = "Fourth Question!"
        mainQuestion.textContent = "What's 2 + 2?"

        answer4.removeChild(button4)

        

        buttonWrong1.setAttribute("type", "button")
        buttonWrong1.setAttribute("value", "One thousand")

        buttonWrong2.setAttribute("type", "button")
        buttonWrong2.setAttribute("value", "Negative ten")

        buttonWrong3.setAttribute("type", "button")
        buttonWrong3.setAttribute("value", "Sixty six")
        
        answer5.appendChild(button5)
        button5.setAttribute("type", "button")
        button5.setAttribute("value", "four")

        answer5.addEventListener("click", function () {
            sendMessage5()
        })

    }

    function sendMessage5() {
        startGame.textContent = "Final Question!"
        mainQuestion.textContent = "Am I a cool guy?"

        answer5.removeChild(button5)

        answer6.appendChild(button6)
        button6.setAttribute("type", "button")
        button6.setAttribute("value", "Heck yes!")

        buttonWrong1.setAttribute("type", "button")
        buttonWrong1.setAttribute("value", "No")

        buttonWrong2.setAttribute("type", "button")
        buttonWrong2.setAttribute("value", "You're so lame")

        buttonWrong3.setAttribute("type", "button")
        buttonWrong3.setAttribute("value", "Ewww")

        answer6.addEventListener("click", function () {
            sendMessage6()
        })
    }

    function sendMessage6() {
        startGame.textContent = "Good answer"
        mainQuestion.textContent = "I'm very cool indeed."

        answer6.removeChild(button6)
        wrongAnswer1.removeChild(buttonWrong1)
        wrongAnswer2.removeChild(buttonWrong2)
        wrongAnswer3.removeChild(buttonWrong3)
    }
}


quizGame();