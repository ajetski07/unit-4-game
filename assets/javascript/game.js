//var for generating random number

var computerChoice = Math.floor(Math.random() * 100) +20;

//vars to generat number values for each crystal//

var crystalOne = Math.floor(Math.random() * 12);
var crystalTwo = Math.floor(Math.random() * 12);
var crystalThree = Math.floor(Math.random() * 12);
var crystalFour = Math.floor(Math.random() * 12);

//var to track total score//

var totalScore = 0;

//vars for wins/losses//

var wins = 0;
var losses = 0;

//.ready to insure that the HTML loads on the page before JS//

$(document).ready(function(){

//consoled the var to confirm that math is working//

console.log(computerChoice);
console.log(crystalOne);
console.log(crystalTwo);
console.log(crystalThree);
console.log(crystalFour);

//changing the text to display the random number in the correct div//

$(".randomNumber").text(computerChoice);

//click functions for crystalls// ARE NOT WORKING???????????

//"push alert" is working so clicks are registering but math and display not working????????

$("#crystal-one").on("click", function(){
    alert("push");
    totalScore += crystalOne;
    $("#score-display").text(totalScore);
});

$("#crystal-two").on("click", function(){
    alert("push");
    totalScore += crystalTwo;
    $("#score-display").text(totalScore);
});

$("#crystal-three").on("click", function(){
    alert("push");
    totalScore += crystalThree;
    $("#score-display").text(totalScore);
});

$("#crystal-four").on("click", function(){
    alert("push");
    totalScore += crystalFour;
    $("#score-display").text(totalScore);
});

//Game Reset function//

function checker() {
    if (wins === 10) {
        alert("You Win!");
        $("#wins").html("<h3>0</h3>");
        $("#losses").html("<h3>0</h3>");
        wins = 0;
        losses = 0;
    };

    if (losses === 10) {
        alert("You Lose!");
        $("#wins").html("<h3>0</h3>");
        $("#losses").html("<h3>0</h3>");
        wins = 0;
        losses = 0;
    };
}

});
