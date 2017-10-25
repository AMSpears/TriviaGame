$('document').ready(function() {
	// var correctAnswer = 0
	// var wrongAnswer = 0
	var q1 = {
		question: 'What is the capital of Alabama?',
		possibleAnswers: ['A. Denver', 'B. Montgomery', 'C. Juneau'],
		marks: [false, true, false],
		answer: 'Montgomery'
	}
	var q2 = {
		question: 'What is the capital of Arizona?',
		possibleAnswers: ['A. Phoenix', 'B. Sacramento', 'C. Little Rock'],
		marks: [true, false, false],
		answer: 'Phoenix'
	}
	var q3 = {
		question: 'What is the capital of California?',
		possibleAnswers: ['A. Atlanta', 'B. Denver', 'C. Sacramento'],
		marks: [false, false, true],
		answer: 'Sacramento'
	}
	var q4 = {
		question: 'What is the capital of Connecticut?',
		possibleAnswers: ['A. Topeka', 'B. Hartfort', 'C. Sacramento'],
		marks: [false, true, false],
		answer: 'Hartfort'
	}
	var q5 = {
		question: 'What is the capital of Delaware?',
		possibleAnswers: ['A. Dover', 'B. Frankfort', 'C. Little Rock'],
		marks: [true, false, false],
		answer: 'Dover'
	}
	var q6 = {
		question: 'What is the capital of Georgia?',
		possibleAnswers: ['A. Tallahassee', 'B. Atlanta', 'C. Denver'],
		marks: [false, true, false],
		answer: 'Atlanta'
	}
	var q7 = {
		question: 'What is the capital of Florida?',
		possibleAnswers: ['A. Indianapolis', 'B. Tallahassee', 'C. Springfield'],
		marks: [false, true, false],
		answer: 'Tallahasse'
	}
	var q8 = {
		question: 'What is the capital of Hawaii?',
		possibleAnswers: ['A. Honolulu', 'B. Topeka', 'C. Little Rock'],
		marks: [true, false, false],
		answer: 'Honolulu'
	}
	var q9 = {
		question: 'What is the capital of New Jersey?',
		possibleAnswers: ['A. Santa Fe', 'B. Trenton', 'C. Saint Paul'],
		marks: [false, true, false],
		answer: 'Trenton'
	}
	var q10 = {
		question: 'What is the capital of Nevada?',
		possibleAnswers: ['A.Boston', 'B. Denver', 'C. Carson City'],
		marks: [false, false, true],
		answer: 'Carson City'
	}
	var q11 = {
		question: 'What is the capital of Maine?',
		possibleAnswers: ['A.Helena', 'B. Augusta', 'C. Carson City'],
		marks: [false, true, false],
		answer: 'Augusta'
	}
	var q12 = {
		question: 'What is the capital of Missipi?',
		possibleAnswers: ['A.Jackson', 'B. Lincoln', 'C. Cancord'],
		marks: [true, false, false],
		answer: 'Jackson'
	}
	var q13 = {
		question: 'What is the capital of Missouri?',
		possibleAnswers: ['A.Jackson', 'B. Lincoln', 'C. Jefferson City'],
		marks: [false, false, true],
		answer: 'Jefferson City'
	}
	var q14 = {
		question: 'What is the capital of New York?',
		possibleAnswers: ['A.Albany', 'B. Lansing', 'C. Atlanta'],
		marks: [true, false, false],
		answer: 'Albany'
	}
	var q15 = {
		question: 'What is the capital of New Mexico?',
		possibleAnswers: ['A.Jackson', 'B. Helena', 'C. Santa Fe'],
		marks: [false, false, true],
		answer: 'Santa Fe'
	}
	var q16 = {
		question: 'What is the capital of Massachusetts?',
		possibleAnswers: ['A.Albany', 'B. Boston', 'C. Atlanta'],
		marks: [false, true, false],
		answer: 'Boston'
	}
	var q17 = {
		question: 'What is the capital of Kansas?',
		possibleAnswers: ['A.Topeka', 'B. Lansing', 'C. Montgomery'],
		marks: [true, false, false],
		answer: 'Topeka'
	}
	var q18 = {
		question: 'What is the capital of Iowa?',
		possibleAnswers: ['A.Indianapolis', 'B. Des Maines', 'C. Denver'],
		marks: [false, true, false],
		answer: 'Des Maines'
	}
	var q19 = {
		question: 'What is the capital of Nebraska?',
		possibleAnswers: ['A.Albany', 'B. Helena', 'C. Lincoln'],
		marks: [false, false, true],
		answer: 'Lincoln'
	}
	var q20 = {
		question: 'What is the capital of Minessota?',
		possibleAnswers: ['A.Saint Paul', 'B. Lansing', 'C. Atlanta'],
		marks: [true, false, false],
		answer: 'Saint Paul'
	}
	// Below code gets the questions to display on page.
	var questionArr = [
		q1,
		q2,
		q3,
		q4,
		q5,
		q6,
		q7,
		q8,
		q9,
		q10,
		q11,
		q12,
		q13,
		q14,
		q15,
		q16,
		q17,
		q18,
		q19,
		q20
	]
	function shuffle(array) {
		for (let i = 0; i < array.length - 1; i++) {
			let j = i + Math.floor(Math.random() * (array.length - i))

			var shuffledArray = array[j]
			array[j] = array[i]
			array[i] = shuffledArray
		}
		var q1 = {
			question: 'What is the capital of Alabama?',
			possibleAnswers: ['A. Denver', 'B. Montgomery', 'C. Juneau'],
			marks: [false, true, false],
			answer: 'Montgomery'
		}
		var q2 = {
			question: 'What is the capital of Arizona?',
			possibleAnswers: ['A. Phoenix', 'B. Sacramento', 'C. Little Rock'],
			marks: [true, false, false],
			answer: 'Phoenix'
		}
		var q3 = {
			question: 'What is the capital of California?',
			possibleAnswers: ['A. Atlanta', 'B. Denver', 'C. Sacramento'],
			marks: [false, false, true],
			answer: 'Sacramento'
		}
		var q4 = {
			question: 'What is the capital of Connecticut?',
			possibleAnswers: ['A. Topeka', 'B. Hartfort', 'C. Sacramento'],
			marks: [false, true, false],
			answer: 'Hartfort'
		}
		var q5 = {
			question: 'What is the capital of Delaware?',
			possibleAnswers: ['A. Dover', 'B. Frankfort', 'C. Little Rock'],
			marks: [true, false, false],
			answer: 'Dover'
		}
		var q6 = {
			question: 'What is the capital of Georgia?',
			possibleAnswers: ['A. Tallahassee', 'B. Atlanta', 'C. Denver'],
			marks: [false, true, false],
			answer: 'Atlanta'
		}
		var q7 = {
			question: 'What is the capital of Florida?',
			possibleAnswers: ['A. Indianapolis', 'B. Tallahassee', 'C. Springfield'],
			marks: [false, true, false],
			answer: 'Tallahasse'
		}
		var q8 = {
			question: 'What is the capital of Hawaii?',
			possibleAnswers: ['A. Honolulu', 'B. Topeka', 'C. Little Rock'],
			marks: [true, false, false],
			answer: 'Honolulu'
		}
		var q9 = {
			question: 'What is the capital of New Jersey?',
			possibleAnswers: ['A. Santa Fe', 'B. Trenton', 'C. Saint Paul'],
			marks: [false, true, false],
			answer: 'Trenton'
		}
		var q10 = {
			question: 'What is the capital of Nevada?',
			possibleAnswers: ['A.Boston', 'B. Denver', 'C. Carson City'],
			marks: [false, false, true],
			answer: 'Carson City'
		}
		var q11 = {
			question: 'What is the capital of Maine?',
			possibleAnswers: ['A.Helena', 'B. Augusta', 'C. Carson City'],
			marks: [false, true, false],
			answer: 'Augusta'
		}
		var q12 = {
			question: 'What is the capital of Missipi?',
			possibleAnswers: ['A.Jackson', 'B. Lincoln', 'C. Cancord'],
			marks: [true, false, false],
			answer: 'Jackson'
		}
		var q13 = {
			question: 'What is the capital of Missouri?',
			possibleAnswers: ['A.Jackson', 'B. Lincoln', 'C. Jefferson City'],
			marks: [false, false, true],
			answer: 'Jefferson City'
		}
		var q14 = {
			question: 'What is the capital of New York?',
			possibleAnswers: ['A.Albany', 'B. Lansing', 'C. Atlanta'],
			marks: [true, false, false],
			answer: 'Albany'
		}
		var q15 = {
			question: 'What is the capital of New Mexico?',
			possibleAnswers: ['A.Jackson', 'B. Helena', 'C. Santa Fe'],
			marks: [false, false, true],
			answer: 'Santa Fe'
		}
		var q16 = {
			question: 'What is the capital of Massachusetts?',
			possibleAnswers: ['A.Albany', 'B. Boston', 'C. Atlanta'],
			marks: [false, true, false],
			answer: 'Boston'
		}
		var q17 = {
			question: 'What is the capital of Kansas?',
			possibleAnswers: ['A.Topeka', 'B. Lansing', 'C. Montgomery'],
			marks: [true, false, false],
			answer: 'Topeka'
		}
		var q18 = {
			question: 'What is the capital of Iowa?',
			possibleAnswers: ['A.Indianapolis', 'B. Des Maines', 'C. Denver'],
			marks: [false, true, false],
			answer: 'Des Maines'
		}
		var q19 = {
			question: 'What is the capital of Nebraska?',
			possibleAnswers: ['A.Albany', 'B. Helena', 'C. Lincoln'],
			marks: [false, false, true],
			answer: 'Lincoln'
		}
		var q20 = {
			question: 'What is the capital of Minessota?',
			possibleAnswers: ['A.Saint Paul', 'B. Lansing', 'C. Atlanta'],
			marks: [true, false, false],
			answer: 'Saint Paul'
		}
		// Below code gets the questions to display on page.
		var questionArr = [
			q1,
			q2,
			q3,
			q4,
			q5,
			q6,
			q7,
			q8,
			q9,
			q10,
			q11,
			q12,
			q13,
			q14,
			q15,
			q16,
			q17,
			q18,
			q19,
			q20
		]
		function shuffle(array) {
			for (let i = 0; i < array.length - 1; i++) {
				let j = i + Math.floor(Math.random() * (array.length - i))

				var shuffledArray = array[j]
				array[j] = array[i]
				array[i] = shuffledArray
			}
			return array
		}
	}
	// function countdown(secs, elem) {
	// 	var element = $('elem')
	// }
	$('.answerSelection').on('click', nextQuestion)
	function nextQuestion() {
		index++
		//if counter >= 5 ==> end game
		displayQuestion(index)
	}
	function startTimer() {
		var time = 80
		$('.time').text(time)

		var counter = setInterval(function() {
			time--
			$('.time').text(time)
			if (time === 0) {
				$('.time').fadeOut('fast')
				clearInterval(counter)
			}
		}, 1000)
		if (time === 0) {
			alert('Game Over!')
		}
	}
	// function startTimer() {
	// 	var timer = setInterval(function() {
	// 		$('.timer').text(timer--)
	// 		if (timer === 120) {
	// 			$('.timer').fadeOut('fast')
	// 			clearInterval(timer)
	// 		}
	// 	}, 1000)
	// 	if (timer === 0) {
	// 		alert('Game Over!')
	// 	}
	// }
	// $('.answerSelection').on('click', nextQ)
	// function nextQ() {
	// 	index++
	// 	//if counter >= 5 ==> end game
	// 	displayQuestion(index)
	// }

	function beginGame() {
		index = 0
		$('.question').append('<button id="startButton">Start</button>')
		$('#startButton').on('click', function() {
			$(this).hide()
			displayQuestion(index)
			startTimer(index)
			shuffle(questionArr)
		})
	}
	function displayQuestion(selectQuestion) {
		$('.question').html(questionArr[selectQuestion].question)
		$('#buttonA')
			.text(questionArr[selectQuestion].possibleAnswers[0])
			.show()
		$('#buttonB')
			.text(questionArr[selectQuestion].possibleAnswers[1])
			.show()
		$('#buttonC')
			.text(questionArr[selectQuestion].possibleAnswers[2])
			.show()
	}

	function selectAnswer() {
		$('.answerSelection').on('click', function() {
			$('.question').text('')
			$('#buttonA').text('')
			$('#buttonB').text('')
			$('#buttonC').text('')
			displayQuestion()
		})
	}
	// How do I get this function to show a checkmark instead of using an alert.

	function correctAnswer() {
		var correctAnswer = 0
		if (answerSelected === 'A' && questionArr[i].marks[0] === true) {
			alert('correct')
		} else {
			alert('Try again!')
		}
		if (answerSelected === 'B' && questionArr[i].marks[1] === true) {
			aler('correct!')
		} else {
			alert('Try again!')
		}
		if (answerSelected === 'C' && questionArr[i].marks[2] === true) {
			alert('correct!')
		} else {
			alert('Try again!')
		}
	}
	// function wrongAnswer()
	$('.answerSelection').on('click', function() {
		if (this.id === 'buttonA') {
			var answerSelected = 'A'
		} else if (this.id === 'buttonB') {
			answerSelected = 'B'
		} else if (this.id === 'buttonC') {
			answerSelected = 'C'
		}
	})
	beginGame()
})
