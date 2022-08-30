const minCells = 1;
const maxCells = 10;

const location2 = Math.floor(Math.random() * (maxCells - minCells) + minCells);
const location1 = location2 - 1;
const location3 = location2 + 1;
var guess;
var hits = 0;
var guesses = 0;
var isSunk = false;
let hitCollection = [];

//Объявления переменных
while (isSunk == false) {
	guess = prompt (`Ready, aim, fire! (enter a number ${minCells}-${maxCells}):`);
	
	if (guess < minCells || guess > maxCells) {
		alert ("Please enter a valid cell number!");
	} else {
		guesses = guesses + 1;

		if (hitCollection.includes(guess)) {
			alert ("You already shot here");
		} 

		if (!hitCollection.includes(guess) && (guess == location1 || guess == location2 || guess == location3)) {

			alert ("HIT!");

			hits = hits + 1;
			hitCollection.push(guess);

	         if (hits == 3) {
	         	isSunk = true;
	         	alert ("You sank my battleship!");
	         }
	    } else {
	    	alert ("MISS")
	    }
	}

}
var stats = "You took " + guesses + " guesses to sink the battleship, " + 
             "which means your shooting accuracy was " + (3/guesses);
alert(stats);