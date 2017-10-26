$('document').ready(function() {
	$('.answerSelected').hide()
	// $('.right').text('Right!')
	// $('.wrong').text('Wrong!')
	var score = 0
	var questionArr = [
		{
			question: 'What is the capital of Alabama?',
			possibleAnswers: ['A. Denver', 'B. Montgomery', 'C. Juneau'],
			marks: [false, true, false],
			answer: 'Montgomery'
		},
		{
			question: 'What is the capital of Arizona?',
			possibleAnswers: ['A. Phoenix', 'B. Sacramento', 'C. Little Rock'],
			marks: [true, false, false],
			answer: 'Phoenix'
		},
		{
			question: 'What is the capital of California?',
			possibleAnswers: ['A. Atlanta', 'B. Denver', 'C. Sacramento'],
			marks: [false, false, true],
			answer: 'Sacramento'
		},
		{
			question: 'What is the capital of Connecticut?',
			possibleAnswers: ['A. Topeka', 'B. Hartfort', 'C. Sacramento'],
			marks: [false, true, false],
			answer: 'Hartfort'
		},
		{
			question: 'What is the capital of Delaware?',
			possibleAnswers: ['A. Dover', 'B. Frankfort', 'C. Little Rock'],
			marks: [true, false, false],
			answer: 'Dover'
		},
		{
			question: 'What is the capital of Georgia?',
			possibleAnswers: ['A. Tallahassee', 'B. Atlanta', 'C. Denver'],
			marks: [false, true, false],
			answer: 'Atlanta'
		},
		{
			question: 'What is the capital of Florida?',
			possibleAnswers: ['A. Indianapolis', 'B. Tallahassee', 'C. Springfield'],
			marks: [false, true, false],
			answer: 'Tallahasse'
		},
		{
			question: 'What is the capital of Hawaii?',
			possibleAnswers: ['A. Honolulu', 'B. Topeka', 'C. Little Rock'],
			marks: [true, false, false],
			answer: 'Honolulu'
		},
		{
			question: 'What is the capital of New Jersey?',
			possibleAnswers: ['A. Santa Fe', 'B. Trenton', 'C. Saint Paul'],
			marks: [false, true, false],
			answer: 'Trenton'
		},
		{
			question: 'What is the capital of Nevada?',
			possibleAnswers: ['A.Boston', 'B. Denver', 'C. Carson City'],
			marks: [false, false, true],
			answer: 'Carson City'
		},
		{
			question: 'What is the capital of Maine?',
			possibleAnswers: ['A.Helena', 'B. Augusta', 'C. Carson City'],
			marks: [false, true, false],
			answer: 'Augusta'
		},
		{
			question: 'What is the capital of Missipi?',
			possibleAnswers: ['A.Jackson', 'B. Lincoln', 'C. Cancord'],
			marks: [true, false, false],
			answer: 'Jackson'
		},
		{
			question: 'What is the capital of Missouri?',
			possibleAnswers: ['A.Jackson', 'B. Lincoln', 'C. Jefferson City'],
			marks: [false, false, true],
			answer: 'Jefferson City'
		},
		{
			question: 'What is the capital of New York?',
			possibleAnswers: ['A.Albany', 'B. Lansing', 'C. Atlanta'],
			marks: [true, false, false],
			answer: 'Albany'
		},
		{
			question: 'What is the capital of New Mexico?',
			possibleAnswers: ['A.Jackson', 'B. Helena', 'C. Santa Fe'],
			marks: [false, false, true],
			answer: 'Santa Fe'
		},
		{
			question: 'What is the capital of Massachusetts?',
			possibleAnswers: ['A.Albany', 'B. Boston', 'C. Atlanta'],
			marks: [false, true, false],
			answer: 'Boston'
		},
		{
			question: 'What is the capital of Kansas?',
			possibleAnswers: ['A.Topeka', 'B. Lansing', 'C. Montgomery'],
			marks: [true, false, false],
			answer: 'Topeka'
		},
		{
			question: 'What is the capital of Iowa?',
			possibleAnswers: ['A.Indianapolis', 'B. Des Maines', 'C. Denver'],
			marks: [false, true, false],
			answer: 'Des Maines'
		},
		{
			question: 'What is the capital of Nebraska?',
			possibleAnswers: ['A.Albany', 'B. Helena', 'C. Lincoln'],
			marks: [false, false, true],
			answer: 'Lincoln'
		},
		{
			question: 'What is the capital of Arkansas?',
			possibleAnswers: ['A. Little Rock', 'B. Lansing', 'C. Atlanta'],
			marks: [true, false, false],
			answer: 'Little Rock'
		},
		{
			question: 'What is the capital of Alaska?',
			possibleAnswers: ['A. Little Rock', 'B. Juneau', 'C. Dover'],
			marks: [false, true, false],
			answer: 'Juneau'
		},
		{
			question: 'What is the capital of Colorado?',
			possibleAnswers: ['A. Denver', 'B. Lansing', 'C. Monolulu'],
			marks: [true, false, false],
			answer: 'Denver'
		},
		{
			question: 'What is the capital of Idaho?',
			possibleAnswers: ['A. Little Rock', 'B. Baise', 'C. Phoenix'],
			marks: [false, true, false],
			answer: 'Baise'
		},
		{
			question: 'What is the capital of Illinois?',
			possibleAnswers: ['A. Little Rock', 'B. Botton Rouge', 'C. Springfield'],
			marks: [false, false, true],
			answer: 'Springfield'
		},
		{
			question: 'What is the capital of Indiana?',
			possibleAnswers: ['A. Indianapolis', 'B. Tallahasse', 'C. Monolulu'],
			marks: [true, false, false],
			answer: 'Indianapolis'
		},
		{
			question: 'What is the capital of Kentucky?',
			possibleAnswers: ['A. Frankfort', 'B. Lansing', 'C. Atlanta'],
			marks: [true, false, false],
			answer: 'Frankfort'
		},
		{
			question: 'What is the capital of Lousiana?',
			possibleAnswers: ['A. Little Rock', 'B. Botton Rouge', 'C. Atlanta'],
			marks: [false, true, false],
			answer: 'Botton Rouge'
		},
		{
			question: 'What is the capital of Maryland?',
			possibleAnswers: ['A. Lincoln', 'B. Lansing', 'C. Annapolis'],
			marks: [false, false, true],
			answer: 'Annapolis'
		},
		{
			question: 'What is the capital of Michigan?',
			possibleAnswers: ['A. Little Rock', 'B. Lansing', 'C. Atlanta'],
			marks: [false, true, false],
			answer: 'Lansing'
		},
		{
			question: 'What is the capital of Minessota?',
			possibleAnswers: ['A. Saint Paul', 'B. Helena', 'C. Consord'],
			marks: [true, false, false],
			answer: 'Saint Paul'
		},
		{
			question: 'What is the capital of Montana?',
			possibleAnswers: ['A. Little Rock', 'B. Lansing', 'C. Helena'],
			marks: [false, false, true],
			answer: 'Helena'
		},
		{
			question: 'What is the capital of New Hampshire?',
			possibleAnswers: ['A. Concord', 'B. Boston', 'C. Trenton'],
			marks: [true, false, false],
			answer: 'Concord'
		},
		{
			question: 'What is the capital of North Carolina?',
			possibleAnswers: ['A. Raleigh', 'B. Lansing', 'C. Atlanta'],
			marks: [true, false, false],
			answer: 'Raleigh'
		},
		{
			question: 'What is the capital of North Dokota?',
			possibleAnswers: ['A. Oklahoma City', 'B. Raleigh', 'C. Bismarck'],
			marks: [false, false, true],
			answer: 'Bismarck'
		},
		{
			question: 'What is the capital of Ohio?',
			possibleAnswers: ['A. Columbus', 'B. Bismarck', 'C. Raleigh'],
			marks: [true, false, false],
			answer: 'Columbus'
		},
		{
			question: 'What is the capital of Oklahoma?',
			possibleAnswers: ['A. Atlanta', 'B. Oklahoma City', 'C. Ohio'],
			marks: [false, true, false],
			answer: 'Oklahoma City'
		},
		{
			question: 'What is the capital of Oregon?',
			possibleAnswers: ['A. Oklahoma City', 'B. Atlanta', 'C. Salem'],
			marks: [false, false, true],
			answer: 'Salem'
		},
		{
			question: 'What is the capital of Virginia?',
			possibleAnswers: ['A. Richmond', 'B. Harrisburg', 'C. Atlanta'],
			marks: [true, false, false],
			answer: 'Richmond'
		},
		{
			question: 'What is the capital of West Virginia?',
			possibleAnswers: ['A. Little Rock', 'B. Charleston', 'C. Atlanta'],
			marks: [false, true, false],
			answer: 'Charleston'
		}
	]
	var index = 0
	//shuffle found on: https://stackoverflow.com/questions/11935175/sampling-a-random-subset-from-an-array
	function shuffle(array) {
		for (let i = 0; i < array.length - 1; i++) {
			let j = i + Math.floor(Math.random() * (array.length - i))

			var shuffledArray = array[j]
			array[j] = array[i]
			array[i] = shuffledArray
		}
	}
	function startTimer() {
		var time = 10
		$('.time').text(time)
		// timer found on: https://stackoverflow.com/questions/3785029/jquery-countdown-timer
		var counter = setInterval(function() {
			time--
			$('.time').text(time)
			if (time === 0) {
				alert('Game Over!')
				$('.time').fadeOut('fast')
				clearInterval(counter)
			}
		}, 1000)
	}

	$('.answerSelected').on('click', nextQuestion)
	function nextQuestion() {
		// index++
		if (index >= questionArr.length) alert('Game Over!')
		displayQuestion(index)
	}

	function beginGame() {
		index = 0
		$('.container').append('<button id="startButton">Start</button>')
		$('#startButton').on('click', function() {
			$(this).hide()
			startTimer(index)
			shuffle(questionArr)
			displayQuestion(index)
		})
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

	function correctAnswer(element) {
		// console.log(this.id)
		var answerSelected
		if (element.id === 'buttonA') {
			answerSelected = 'A.'
		} else if (element.id === 'buttonB') {
			answerSelected = 'B.'
		} else if (element.id === 'buttonC') {
			answerSelected = 'C.'
		}

		console.log(answerSelected)
		console.log(questionArr[index - 1])

		// console.log(answerSelected)
		// console.log(questionArr, index)
		var correctAnswer = true
		if (answerSelected === 'A.' && questionArr[index - 1].marks[0] === true) {
			// score++
			// console.log(score)
			console.log('correct!')
		} else if (
			answerSelected === 'B.' &&
			questionArr[index - 1].marks[1] === true
		) {
			// score++
			// console.log(score)
			console.log('correct!')
		} else if (
			answerSelected === 'C.' &&
			questionArr[index - 1].marks[2] === true
		) {
			// score++
			// console.log(score)
			console.log('correct!')
		} else {
			correctAnswer = false
			console.log('Incorrect!')
		}
	}

	beginGame()
})
