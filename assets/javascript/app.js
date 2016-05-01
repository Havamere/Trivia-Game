//object block question and answer
var trivia = [
	{number: 0, question: "Where is the highest point in the world?", answer: "Mount Chimborazo"},
	{number: 1, question: "In what country can you weigh less, just by living there?", answer: "Canada"},

]

//object block stores other answers
var notAnswers = [
	["Mount Kilimanjaro", "Mount Everest", "Mount McKinley"],
	["Europe", "Chile", "Japan"]
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
	for (var i=0; i<array2[i].length; i++){
		array2[i].push(array1[i].answer);
		$('#questionaire').append("<p id="+"Q"+i+">"+array1[i].question+"</p>");
		console.log(array2[i]);
		array2 = possAnswers(array2);
		for(var j=0; j<array2[i].length; j++){
		 	$('#questionaire').append("<input type='radio' name="+"question"+i+" value="+array2[i][j]+">"+array2[i][j]+"</input>")
		}
	}
	console.log(array2);
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