//object block question and answer
var trivia = [
	{number: 0, question: "What mountain would you go to, to be closest to space?", answer: "Mount Chimborazo"},
	{number: 1, question: "In what country can you weigh less, just by living there?", answer: "Canada"},
	{number: 2, question: "How fast are you spinning around the Earth's core when you are standing on the equator?", answer: "1000 MPH"},
	{number: 3, question: "How long would a day on Earth be without the moon??", answer: "6-8 HRS"},
	{number: 4, question: "Which volcano is so active, it is constantly erupting and has been nicknamed 'The Lighthouse of the Mediterranean?", answer: "Stromboli Volcano"},
	{},
	{},
	{},
]

//object block stores other answers
var notAnswers = [
	["Mount Kilimanjaro", "Mount Everest", "Mount McKinley"],
	["Europe", "Chile", "Japan"],
	["300 MPH", "500 MPH", "2000 MPH"],
	["48-50 HRS", "12 HRS", "2-4 HRS"],
	["Mount Etna", "Santa Margarida Volcano", "Ischia Island"],
	[],
	[],
	[],
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
	for (var i=0; i<4; i++){
		array2[i].push(array1[i].answer);
		$('#questionaire').append("<p id="+"Q"+i+">"+array1[i].question+"</p>");
		array2[i] = possAnswers(array2[i]);
		for(var j=0; j<array2[i].length; j++){
		 	$('#questionaire').append("<input type="+"radio"+" name="+"question"+i+" value="+"\""+array2[i][j]+"\""+" id="+"question"+i+">"+array2[i][j]+"</input>");
		}
	}
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
// $(document).ready(function(){
// 	setTimeout(function(){
// 		alert("You are about to test your knowledge of some of Planet Earth's strange facts.");
// 		alert("Once you clear this message, you will have 5 minutes to answer 10 questions.  Good luck!")
// 	},1000);
// 	time = 10
// 	$("#timer").html("05:00");
// 	function countDown(){
// 		time--;
// 		currentTime = timeConverter(time);
// 		$("#timer").html(currentTime);
// 		//Time's Up mechanic
// 		if (time == 0) {
//			// Checks user answers versus
// 			for (var e=0; e<trivia.length; e++){
// 				if ($('#question'+e+':checked').val() == trivia[e].answer){
// 					correctAnswers++;
// 				} else if ($('#question'+e+':checked').val() == undefined){
// 					notAnswered++;
// 				} else {
// 					incorrectAnswers++;
// 				}
// 			}
// 			$('#main-section').empty();
// 			$('#main-section').append("<h1>Time\'s Up!</h1>");
// 			$('#main-section').append("<p>You got "+correctAnswers+" correct answers!</p>");
// 			$('#main-section').append("<p>You got "+incorrectAnswers+" incorrect answers.</p>");
// 			$('#main-section').append("<p>You got "+notAnswered+" unanswered answers.</p>");
// 		}
// 	} 
// 	counter = setInterval(countDown,1000);
// })

//stores player selections into array
var correctAnswers = 0;
var incorrectAnswers = 0;
var notAnswered = 0;
