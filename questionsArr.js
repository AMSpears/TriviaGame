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
		question: 'What is the capital of Mississippi?',
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
		question: 'What is the capital of Minnesota?',
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
		question: 'What is the capital of North Dakota?',
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
		question: 'What is the capital of Pennsylvania?',
		possibleAnswers: ['A. Harrisburg', 'B. Atlanta', 'C. Salem'],
		marks: [true, false, false],
		answer: 'Harrisburg'
	},
	{
		question: 'What is the capital of Rhode Island',
		possibleAnswers: ['A. Harrisburg', 'B. Atlanta', 'C. Providence'],
		marks: [false, false, true],
		answer: 'Providence'
	},
	{
		question: 'What is the capital of South Carolina?',
		possibleAnswers: ['A. Oklahoma City', 'B. Columbia', 'C. Harrisburg'],
		marks: [false, true, false],
		answer: 'Columbia'
	},
	{
		question: 'What is the capital of South Dakota?',
		possibleAnswers: ['A. Salem', 'B. Providence', 'C. Pierre'],
		marks: [false, false, true],
		answer: 'Pierre'
	},
	{
		question: 'What is the capital of Tennessee?',
		possibleAnswers: ['A. Nashville', 'B. Pierre', 'C. Salem'],
		marks: [false, false, true],
		answer: 'Nashville'
	},
	{
		question: 'What is the capital of Texas?',
		possibleAnswers: ['A. Nashville', 'B. Austin', 'C. Providence'],
		marks: [false, true, false],
		answer: 'Austin'
	},
	{
		question: 'What is the capital of Utah?',
		possibleAnswers: ['A. Salt Lake City', 'B. Salem', 'C. Austin'],
		marks: [true, false, false],
		answer: 'Salt Lake City'
	},
	{
		question: 'What is the capital of Vermont?',
		possibleAnswers: ['A. Austin', 'B. Montpelier', 'C. Austin'],
		marks: [false, true, false],
		answer: 'Montpelier'
	},
	{
		question: 'What is the capital of Virginia?',
		possibleAnswers: ['A. Richmond', 'B. Harrisburg', 'C. Atlanta'],
		marks: [true, false, false],
		answer: 'Richmond'
	},
	{
		question: 'What is the capital of Washington?',
		possibleAnswers: ['A. Olympia', 'B. Salem', 'C. Austin'],
		marks: [true, false, false],
		answer: 'Olympia'
	},
	{
		question: 'What is the capital of West Virginia?',
		possibleAnswers: ['A. Little Rock', 'B. Charleston', 'C. Atlanta'],
		marks: [false, true, false],
		answer: 'Charleston'
	},
	{
		question: 'What is the capital of Wisconsin?',
		possibleAnswers: ['A. Salt Lake City', 'B. Salem', 'C. Madison'],
		marks: [false, false, true],
		answer: 'Madison'
	},
	{
		question: 'What is the capital of Wyoming?',
		possibleAnswers: ['A. Little Rock', 'B. Cheyenne', 'C. Austin'],
		marks: [false, true, false],
		answer: 'Cheyenne'
	}
]
// Good job seperating your questions into a seperate file.  
