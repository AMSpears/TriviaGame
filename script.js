$('document').ready(function() {
	// $('#timer').countdown(finalMinutes,{elapse:true})
	// .on('update.countdown'),function(evt){
	//   if (evt.elapse){
	//     elapse: true
	//   } else {
	//     countdown
	//   }
	// }
	// $('#timer').countdown(finalMinutes,{defer:}).on('update.countdown',
	//  function(){
	//   alert('Game Over!')
	// })
	//
	// countdown.('start')
	var correctAnswer = 0
	var wrongAnswer = 0
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
	// Below code gets the questions to display on page.
	var questionArr = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10]
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
	function beginG() {
		index = 0
		$('.question').append('<button id="buttonStart">Start</button>')
		$('#buttonStart').on('click', function() {
			$(this).hide()
			displayQuestion(index)
		})
	}

	function selectAnswer() {
		'.answerSelection'.on('click', function() {
			index++
			$('.question').text('')
			$('#buttonA').text('')
			$('#buttonB').text('')
			$('#buttonC').text('')
			displayQuestion()
		})
	}
	// How do I get these two functions to show a checkmark instead of using an alert.
	function correctAnswer() {
		correct++
	}
	function wrongAnswer() {
		wrong++
	}
	beginG()
	$('.answerSelection').on('click', function() {
		if (this.id === 'buttonA') {
			var answerSelected = 'A'
		} else if (this.id === 'buttonB') {
			answerSelected = 'B'
		} else if (this.id === 'buttonC') {
			answerSelected = 'C'
		}
	})

	if (answerSelected === 'A' && questionArr[i].marks[0] === true) {
		correctAnswer()
	} else {
		wrongAnswer()
	}
	if (answerSelected === 'B' && questionArr[i].marks[1] === true) {
		correctAnswer()
	} else {
		wrongAnswer()
	}
	if (answerSelected === 'C' && questionArr[i].marks[2] === true) {
		correctAnswer()
	} else {
		wrongAnswer()
	}
})
