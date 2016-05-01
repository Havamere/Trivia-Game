//object block question and answer
var trivia = [
	{number: 0, question: "Where is the highest point in the world?", answer: "Mount Chimborazo"},
	{number: 1, question: "In what country can you weigh less, just by living there?", answer: "Canada"},
	{number: 2, question: "Hurg de gurge in flibben flabben?", answer: "Foobar"},
	{number: 3, question: "How are you feeling?", answer: "Great"}
]

//object block stores other answers
var notAnswers = [
	["Mount Kilimanjaro", "Mount Everest", "Mount McKinley"],
	["Europe", "Chile", "Japan"],
	["Bass", "Heliotrope", "Teppanyaki"],
	["Tired", "Bad", "Malcontent"]
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
		 	$('#questionaire').append("<input type="+"radio"+" name="+"question"+i+" value="+array2[i][j]+">"+array2[i][j]+"</input>")
		}
	}
}
question(trivia,notAnswers);

//stores player selections into array
var correctAnswers = 0;
var incorrectAnswers = 0;
var notAnswered = 0;

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
		alert("Once you clear this message, you will have 5 minutes to answer 10 questions.  Good luck!")
	},2000);
	time = 300
	$("#timer").html("05:00");
	function countDown(){
		time--;
		currentTime = timeConverter(time);
		$("#timer").html(currentTime);
	} 
	counter = setInterval(countDown,1000);
//Time's Up mechanic
})

//checks player answers against correct answers
	// for (var a=0; a<trivia.length; a++) {
	// 	if ($("name="+"question"+a)){}
	// }