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
		console.log(array2[i]);
		$('#questionaire').append("<p id="+"Q"+i+">"+array1[i].question+"</p>");
		array2[i] = possAnswers(array2[i]);
		console.log(array2[i]);
		for(var j=0; j<array2[i].length; j++){
		 	$('#questionaire').append("<input type="+"radio"+" name="+"question"+i+" value="+array2[i][j]+">"+array2[i][j]+"</input>")
		}
	}
}

question(trivia,notAnswers);
//stores player selections into array

//checks player answers against correct answers



//timer for questionaire

	//Time's Up mechanic

//time conversion mechanic
var timeConverter = function(t){
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