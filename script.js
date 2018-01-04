$('document').ready(function() {
	$('.answerSelected').hide()
	var score = 0
	var index = 0

	$('.score').hide()
	// check-mark implementation source = https://stackoverflow.com/questions/3428766/jquery-show-for-5-seconds-then-hide

	$('.correct-mark').hide()
	$('.incorrect-mark').hide()

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

		var counter = setInterval(function() {
			time--
			$('.time').text(time)
			if (time === 0) {
				$('.score')
					.show()
					.text('You score: ' + score + '/50')
					.delay(500)

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
		displayQuestion(index)
	}

	function beginGame() {
		index = 0
		score = 0

		if ($('#startButton').length > 0) {
			$('#startButton').show()
		} else {
			$('.container').append('<button id="startButton">Start</button>')
			$('#startButton').on('click', function() {
				$(this).hide()
				$('.score').hide()
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
		correctAnswer(this)
		nextQuestion()
		displayQuestion(index)
	})

	function correctAnswer(element) {
		var answerSelected
		if (element.id === 'buttonA') {
			answerSelected = 'A.'
		} else if (element.id === 'buttonB') {
			answerSelected = 'B.'
		} else if (element.id === 'buttonC') {
			answerSelected = 'C.'
		}

		var correctAnswer = true
		if (answerSelected === 'A.' && questionArr[index - 1].marks[0] === true) {
			score++
			$('.correct-mark')
				.show()
				.delay(200)
				.fadeOut()
		} else if (
			answerSelected === 'B.' &&
			questionArr[index - 1].marks[1] === true
		) {
			score++
			$('.correct-mark')
				.show()
				.delay(200)
				.fadeOut()
		} else if (
			answerSelected === 'C.' &&
			questionArr[index - 1].marks[2] === true
		) {
			score++
			$('.correct-mark')
				.show()
				.delay(200)
				.fadeOut()
		} else {
			correctAnswer = false
			$('.incorrect-mark')
				.show()
				.delay(200)
				.fadeOut()
		}
	}

	beginGame()
})
