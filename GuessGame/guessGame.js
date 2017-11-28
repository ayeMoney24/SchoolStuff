function myFunction() {
	//var txt = document.getElementById("input");
	var output = document.getElementById("output");
	output.innerHTML = "Player 2 now tries to guess the number";
	
	
}

function guess(){
	var num1 = parseInt(document.getElementById("input").value);
	var num2 = parseInt(document.getElementById("input2").value);
	var output = document.getElementById("output");
	if(num2 > num1){
		output.innerHTML = "Guess was too high";
		document.getElementById("input2").value = ' ';
	}
	if(num2 < num1){
		output.innerHTML = "Guess was too low";
	}
	if(num2 == num1){
		output.innerHTML = "You guessed the number! Player 1 can select a new number";
		document.getElementById("input").value = ' ';
		document.getElementById("input2").value = null;
	}
}	