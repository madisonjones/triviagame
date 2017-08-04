var timeLeft = 30

var timeLeftInterval

var timerInterval

var questionIndex = 0

var correctAnswers = 0

var wrongAnswers = 0

var newGame = function(){
	location.reload()
}

var questionsArray = [{
        question: "Who is Seattle named after?",
        answer1: "Britney Spears",
        answer2: "Chief Sealth",
        answer3: "Your Mom"
    },

    {
        question: "What year did Seattle get the Seahawks?",
        answer1: "1982",
        answer2: "1974",
        answer3: "1994"
    },

    {
        question: "Why was the Space Needle built?",
        answer1: "For an office building",
        answer2:"As a tourist attraction",
        answer3: "For a movie"
    },

    {
        question: "Which of the following movies was shot in Seattle?",
        answer1: "Happy Gilmore",
        answer2: "10 things I hate about you",
        answer3: "How To Lose a Guy in 10 Days"
    }
]

var showQuestion = function() {
    if (questionIndex == 4) {
        clearInterval(timerInterval)
        clearInterval(timeLeftInterval)
        alert("Game Over!")
        $("#question").html("Correct Answers: " + correctAnswers + "<br>Wrong Answers: " + wrongAnswers)
        $("#restart").html("<p>Click Here to Play Again!</p>")
        $("#answers").empty()
        $("#timeLeft").empty()
		
    } else {
        $("#question").html(questionsArray[questionIndex].question)
        $("#answer1").html(questionsArray[questionIndex].answer1)
        $("#answer2").html(questionsArray[questionIndex].answer2)
        $("#answer3").html(questionsArray[questionIndex].answer3)
        questionIndex++
    }
}


timerInterval = setInterval(showQuestion, 10000)

var winCount = function() {
    correctAnswers++
    showQuestion()
}

var lossCount = function() {
    wrongAnswers++
    showQuestion()
}

$("#answer2").click(winCount)
$("#answer1").click(lossCount)
$("#answer3").click(lossCount)

function timer() {
    $("#timeRemaining").html(timeLeft)
        timeLeft--
    }

timeLeftInterval = setInterval(timer, 1000)

showQuestion()
timer()

$("#restart").click(newGame)