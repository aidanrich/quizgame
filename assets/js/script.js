

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
var secondsLeft = 60;



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
    startButton.addEventListener("click", function (event) {
        // send message to start game?
        event.stopPropagation();
        // timeLimit();
        bob();
        sendMessage();
    })

    var timerInterval = setInterval(function () {
        secondsLeft--;
        timer.textContent = "Time left: " + secondsLeft;



        if (secondsLeft === 0 || secondsLeft < 0) {
            clearInterval(timerInterval);
            sendMessage6();

        }



    }, 1000);
    // function timeLimit() {
    //     timerInterval();

    // }


    function bob() {
        wrongAnswer1.addEventListener("click", function (event) {

            event.stopPropagation();
            console.log(secondsLeft)
            secondsLeft = secondsLeft - 5;
            console.log("after", secondsLeft)
        })

        wrongAnswer2.addEventListener("click", function (event) {

            event.stopPropagation();
            secondsLeft = secondsLeft - 5;
        })

        wrongAnswer3.addEventListener("click", function (event) {

            event.stopPropagation();
            secondsLeft = secondsLeft - 5;
        })

    }




    function sendMessage() {

        startGame.textContent = "Quiz started!"
        mainQuestion.textContent = "Commonly used data types DO NOT include:"
        // removeChild might fix issues
        startButton.remove(startButton2)

        wrongAnswer1.appendChild(buttonWrong1)
        buttonWrong1.setAttribute("type", "button")
        buttonWrong1.setAttribute("value", "Strings")

        answer2.appendChild(button2)
        button2.setAttribute("type", "button")
        button2.setAttribute("value", "Alerts")

        wrongAnswer2.appendChild(buttonWrong2)
        buttonWrong2.setAttribute("type", "button")
        buttonWrong2.setAttribute("value", "Booleans")

        wrongAnswer3.appendChild(buttonWrong3)
        buttonWrong3.setAttribute("type", "button")
        buttonWrong3.setAttribute("value", "Numbers")


        wrongAnswer1.addEventListener("click", function (event) {
            sendMessage2()
            event.stopPropagation();
        })
        wrongAnswer2.addEventListener("click", function (event) {
            sendMessage2()
            event.stopPropagation();
        })
        wrongAnswer3.addEventListener("click", function (event) {
            sendMessage2()
            event.stopPropagation();
        })

        answer2.addEventListener("click", function () {
            sendMessage2()

        })

        // quize pages need timer
    }

    function sendMessage2() {
        startGame.textContent = "Second question!"
        mainQuestion.textContent = "The condition in an if/else statement is enclosed with ___."

        answer2.remove(button2)

        buttonWrong1.setAttribute("type", "button")
        buttonWrong1.setAttribute("value", "quotes")

        buttonWrong2.setAttribute("type", "button")
        buttonWrong2.setAttribute("value", "curly brackets")

        answer3.appendChild(button3)
        button3.setAttribute("type", "button")
        button3.setAttribute("value", "parentheses")

        buttonWrong3.setAttribute("type", "button")
        buttonWrong3.setAttribute("value", "square brackets")

        wrongAnswer1.addEventListener("click", function (event) {
            sendMessage3()
            event.stopPropagation();
        })
        wrongAnswer2.addEventListener("click", function (event) {
            sendMessage3()
            event.stopPropagation();
        })
        wrongAnswer3.addEventListener("click", function (event) {
            sendMessage3()
            event.stopPropagation();
        })

        answer3.addEventListener("click", function () {
            sendMessage3()
        })

        // quize pages need timer
    }

    function sendMessage3() {
        startGame.textContent = "Third Question!"
        mainQuestion.textContent = "Arrays in javaScript can be used to store ___."

        answer3.remove(button3)

        buttonWrong1.setAttribute("type", "button")
        buttonWrong1.setAttribute("value", "numbers and strings")

        buttonWrong2.setAttribute("type", "button")
        buttonWrong2.setAttribute("value", "other arrays")

        buttonWrong3.setAttribute("type", "button")
        buttonWrong3.setAttribute("value", "booleans")

        answer4.appendChild(button4)
        button4.setAttribute("type", "button")
        button4.setAttribute("value", "all of the above")

        wrongAnswer1.addEventListener("click", function (event) {
            sendMessage4()
            event.stopPropagation();
        })
        wrongAnswer2.addEventListener("click", function (event) {
            sendMessage4()
            event.stopPropagation();
        })
        wrongAnswer3.addEventListener("click", function (event) {
            sendMessage4()
            event.stopPropagation();
        })

        answer4.addEventListener("click", function () {
            sendMessage4()
        })
    }

    function sendMessage4() {
        startGame.textContent = "Fourth Question!"
        mainQuestion.textContent = "String values must be enclosed within ___ when being assigned to variables."

        answer4.remove(button4)

        buttonWrong1.setAttribute("type", "button")
        buttonWrong1.setAttribute("value", "commas")

        buttonWrong2.setAttribute("type", "button")
        buttonWrong2.setAttribute("value", "curly brackets")

        buttonWrong3.setAttribute("type", "button")
        buttonWrong3.setAttribute("value", "parenthesis")

        answer5.appendChild(button5)
        button5.setAttribute("type", "button")
        button5.setAttribute("value", "quotes")

        answer5.addEventListener("click", function () {
            sendMessage5()
        })

        wrongAnswer1.addEventListener("click", function (event) {
            sendMessage5()
            event.stopPropagation();
        })
        wrongAnswer2.addEventListener("click", function (event) {
            sendMessage5()
            event.stopPropagation();
        })
        wrongAnswer3.addEventListener("click", function (event) {
            sendMessage5()
            event.stopPropagation();
        })

    }

    function sendMessage5() {
        startGame.textContent = "Final Question!"
        mainQuestion.textContent = "Am I a cool guy?"

        answer5.remove(button5)

        answer6.appendChild(button6)
        button6.setAttribute("type", "button")
        button6.setAttribute("value", "Heck yes!")

        buttonWrong1.setAttribute("type", "button")
        buttonWrong1.setAttribute("value", "No")

        buttonWrong2.setAttribute("type", "button")
        buttonWrong2.setAttribute("value", "You're so lame")

        buttonWrong3.setAttribute("type", "button")
        buttonWrong3.setAttribute("value", "Ewww")

        wrongAnswer1.addEventListener("click", function (event) {
            sendMessage6()
            event.stopPropagation();
        })
        wrongAnswer2.addEventListener("click", function (event) {
            sendMessage6()
            event.stopPropagation();
        })
        wrongAnswer3.addEventListener("click", function (event) {
            sendMessage6()
            event.stopPropagation();
        })

        answer6.addEventListener("click", function () {
            sendMessage6();
            // myStopFunction(); timerInterval is not a global var?
            // clearInterval(timerInterval);
        })
    }

    function sendMessage6() {
        startGame.textContent = "Good answer"
        mainQuestion.textContent = "I'm very cool indeed."

        clearInterval(timerInterval);



        answer6.remove(button6)
        wrongAnswer1.remove(buttonWrong1)
        wrongAnswer2.remove(buttonWrong2)
        wrongAnswer3.remove(buttonWrong3)
    }
    // function myStopFunction() {

    // }
}


quizGame();