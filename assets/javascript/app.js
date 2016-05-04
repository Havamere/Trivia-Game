//object block question and answer
var trivia = [
	{number: 0, question: "What mountain would you go to, to be closest to space?", answer: "Mount Chimborazo"},
	{number: 1, question: "In what country can you weigh less, just by living there?", answer: "Canada"},
	{number: 2, question: "How fast are you spinning around the Earth's core when you are standing on the equator?", answer: "1000 MPH"},
	{number: 3, question: "How long would a day on Earth be without the moon??", answer: "6-8 HRS"},
	{number: 4, question: "Which volcano is so active, it is constantly erupting and has been nicknamed 'The Lighthouse of the Mediterranean?", answer: "Stromboli Volcano"},
	{number: 5, question: "This phenomena is only found on Earth, but, what life sustaining substance is naturally found in 3 states of matter?", answer: "Water"},
	{number: 6, question: "Death valley is the current record holder for 'Hottest Place on Earth', but just how hot did it get?", answer:"134\&#8457"},
	{number: 7, question: "Antartica, of course, is the coldest spot on the planet, but can you guess the lowest temperature it has reached?", answer: "-128\&#8457"},
]

//object block stores other answers
var notAnswers = [
	["Mount Kilimanjaro", "Mount Everest", "Mount McKinley"],
	["Europe", "Chile", "Japan"],
	["300 MPH", "500 MPH", "2000 MPH"],
	["48-50 HRS", "12 HRS", "2-4 HRS"],
	["Mount Etna", "Santa Margarida Volcano", "Ischia Island"],
	["Soil", "Air", "Fire"],
	["125\&#8457","150\&#8457","128\&#8457"],
	["-101\&#8457","-121\&#8457","-118\&#8457"],
]

//randomizer for answer placement
function possAnswers(array) {
	for (var n=array.length-1; n >=0; n--){
	 	var randomIndex = Math.floor(Math.random()*n+1);
		var itemAtIndex = array[randomIndex];
		array[randomIndex] = array[n];
		array[n] = itemAtIndex;
	}
	return array;
}

//builds question form
function question(array1,array2) {
	for (var i=0; i<array1.length; i++){
		array2[i].push(array1[i].answer);
		$('#questionaire').append("<p id="+"Q"+i+">"+array1[i].question+"</p>");
		array2[i] = possAnswers(array2[i]);
		for(var j=0; j<array2[i].length; j++){
		 	$('#questionaire').append("<input type="+"radio"+" name="+"question"+i+" value="+"\""+array2[i][j]+"\""+" id="+"question"+i+">"+array2[i][j]+"</input>");
		}
	}
	// $('#questionaire').append("<div><button id="+"submit"+" name="+"submit"+" value="+"Submit>"+"Submit"+"</button></div>")
}
question(trivia,notAnswers);

//time conversion mechanic
function timeConverter (t) {
    var minutes = Math.floor(t/60);
    var seconds = t - (minutes * 60);
    if (seconds < 10){
      seconds = "0" + seconds;
    }
    if (minutes === 0){
      minutes = "00";
    } else if (minutes < 10){
      minutes = "0" + minutes;
    }
    return minutes + ":" + seconds;
 }
//timer for questionaire
$(document).ready(function(){
	setTimeout(function(){
		alert("You are about to test your knowledge of some of Planet Earth's strange facts.");
		alert("Once you clear this message, you will have 2 minutes to answer 8 questions.  Good luck!")
	},1000);
	time = 120
	$("#timer").html("02:00");
	function countDown(){
		time--;
		currentTime = timeConverter(time);
		$("#timer").html(currentTime);
		//Time's Up mechanic
		if (time == 0) {
			// Checks user answers versus
			for (var e=0; e<trivia.length; e++){
				if ($('#question'+e+':checked').val() == trivia[e].answer){
					correctAnswers++;
				} else if ($('#question'+e+':checked').val() == undefined){
					notAnswered++;
				} else {
					incorrectAnswers++;
				}
			}
			// clears html of timer and questions and displays results of quiz
			$('#main-section').empty();
			$('#main-section').append("<h1>Time\'s Up!</h1>");
			$('#main-section').append("<p>You got "+correctAnswers+" correct answers!</p>");
			$('#main-section').append("<p>You got "+incorrectAnswers+" incorrect answers.</p>");
			$('#main-section').append("<p>You got "+notAnswered+" unanswered answers.</p>");
		}
	} 
	//Sumbit button mechanic
	// $('#submit').on('click', function(){
	// 	time = 0;
	// });
	counter = setInterval(countDown,1000);
})

//stores player selections into array
var correctAnswers = 0;
var incorrectAnswers = 0;
var notAnswered = 0;
