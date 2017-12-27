$('document').ready(function() {
	$('.answerSelected').hide()
	var score = 0
	var index = 0
	//shuffle found on: https://stackoverflow.com/questions/11935175/sampling-a-random-subset-from-an-array
	function shuffle(array) {
		for (let i = 0; i < array.length - 1; i++) {
			var j = i + Math.floor(Math.random() * (array.length - i))

			var shuffledArray = array[j]
			array[j] = array[i]
			array[i] = shuffledArray
		}
	}
	function startTimer() {
		var time = 50
		$('.time').show()
		$('.time').text(time)
		// Timer found on: https://stackoverflow.com/questions/3785029/jquery-countdown-timer
		// Good sourcing where you found information
		var counter = setInterval(function() {
			time--
			$('.time').text(time)
			if (time === 0) { // Abstract some of this logic to an endGame function
				alert('GAME OVER.  ' + 'You score: ' + score + ' correct!')
				// Instead of having an alert - try targetting the element with class 'score' and putting the results of variable score there.
				score = 0 // Put the score = 0 assignment in the beginGame function
				$('.time').fadeOut('fast')
				$('.question').hide()
				$('#buttonA').hide()
				$('#buttonB').hide()
				$('#buttonC').hide()
				beginGame()
				clearInterval(counter)
			}
		}, 1000)
	}

	$('.answerSelected').on('click', nextQuestion)
	function nextQuestion() {
		// // index++
		// if (index >= questionArr.length) alert('Game Over!')
		// No commented out code in Production Branch!
		displayQuestion(index)
	}

	function beginGame() {
		index = 0
		if ($('#startButton').length > 0) {
			$('#startButton').show()
		} else {
			$('.container').append('<button id="startButton">Start</button>')
			$('#startButton').on('click', function() {
				$(this).hide()
				$('.question').show()
				startTimer(index)
				shuffle(questionArr)
				displayQuestion(index)
			})
		}
	}
	function displayQuestion(questionIndex) {
		$('.question').html(questionArr[questionIndex].question)
		$('#buttonA')
			.text(questionArr[questionIndex].possibleAnswers[0])
			.show()
		$('#buttonB')
			.text(questionArr[questionIndex].possibleAnswers[1])
			.show()
		$('#buttonC')
			.text(questionArr[questionIndex].possibleAnswers[2])
			.show()
	}

	$('.answerSelected').on('click', function() {
		index++
		score++
		correctAnswer(this)
		nextQuestion()
		displayQuestion(index)
	})
	// Come back to the code below and simply it into two functions.
	function correctAnswer(element, score) {
		var answerSelected
		if (element.id === 'buttonA') {
			answerSelected = 'A.'
		} else if (element.id === 'buttonB') {
			answerSelected = 'B.'
		} else if (element.id === 'buttonC') {
			answerSelected = 'C.'
		}

		if (answerSelected === 'A.' && questionArr[index - 1].marks[0] === true) {
			score++
		} else if (answerSelected === 'B.' && questionArr[index - 1].marks[1] === true) {
			score++
		} else if (answerSelected === 'C.' && questionArr[index - 1].marks[2] === true) {
			score++
		} // You can clean up this section a bit.  Put the conditionals on one line, and get rid of the unneeded 'correctAnswer' variable.
		// You could even combine this if/else code block with the one directly above to be more efficient like this ...
		//`if (element.id === 'buttonA') {
		//	`questionArr[index - 1].marks[0] === true) {
		// score++ }
		// }
	}

	beginGame()
})


// Nice job with the JS.  Function names are semantic and code is generally pretty clear.
// You did a nice job targetting elements in the DOM and your approach to functional programming is pretty strong.
// Couple small things that you could improve upon.
// - Take out all commented / testing code
// - Have it so when a user clicks an answer after they cycle through all the questions, there are no errors logged in the console - or just hide the answers.
// - Have it so when a user cycles through all the answers before the timer runs out, they don't have to wait for the timer to run down to see their score.
// - Present the results of the game in the browser instead of having an alert.
// - Maybe an option for less questions?
