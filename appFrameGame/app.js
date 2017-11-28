"use strict";

// using a function contructor form to create an object
function MyApp(){
	var version = "v1.0";

	function setStatus(message){
		$("#app>footer").text(message);
	}

	this.start = function(){
		$("#app>header").append(version);
		setStatus("ready");
		$("#button1").click(function(){
		myFunction();
		});
		$("#button2").click(function(){
		guess();
		});
	};
	
	
	
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

function myFunction() {
	//var txt = document.getElementById("input");
	var output = document.getElementById("output");
	output.innerHTML = "Player 2 now tries to guess the number";
	
	
}
} // end MyApp

$(function() {
	window.app = new MyApp();
	window.app.start();
});
