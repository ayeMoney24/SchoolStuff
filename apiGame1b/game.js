function MyApp(){
	var version = " ver 2.0";
	
	this.start = function(){
		var PPoints = 0;
		var OppPoints = 0;
		$("h1").append(version);
		
		
		$("#start").on("click" , function(){
			init();			
		});
		
		$("#win").on("click" , function(){
			WinHand(PPoints);
			PPoints = increment(PPoints);			
		});
		
		$("#lose").on("click" , function(){
			LoseHand(OppPoints);
			OppPoints = increment(OppPoints);
		});
		
		$("#restart").on("click" , function(){
			restart();			
		});
		

	};
	
	function init(){
		$.ajax({
			url: "https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1",
			dataType: "json"
		})
			.done(function(data) {processData(data)})
			.fail(function() {
				$("#tools").text("ERROR")
			});
			
		$.ajax({
			url: "https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1",
			dataType: "json"
		})
			.done(function(data) {	$("#OppCards").append(0); })
			.fail(function() {
				$("#tools").text("ERROR")
			});
	}
	
	function processData(data){
		$("#playerCards").append(0); 
		var DeckId = data.deck_id;
		$("#draw").on("click" , function(){
			draw(DeckId);			
		});
		
	}
	
	function draw(DeckId){
		$.ajax({
			url: "https://deckofcardsapi.com/api/deck/7keenwohs9ia/draw/?count=1",
			dataType: "json"
		})
			.done(function(data1) {cardsFunction(data1)})
			.fail(function() {
				$("#tools").text("ERROR")
			});
		$.ajax({
			url: "https://deckofcardsapi.com/api/deck/xsinll2o341z/draw/?count=1",
			dataType: "json"
		})
			.done(function(data2) {cardsFunction2(data2) })
			.fail(function() {
				$("#tools").text("ERROR")
			});
	}
	
	function cardsFunction(data1){
		$("#drawSpot").text("You drew a " + data1.cards[0].value + " of " + data1.cards[0].suit);
		$("#PCard").attr("src",data1.cards[0].image);
		$("#PCard").removeClass("hidden");
	}
	
	function cardsFunction2(data2){
		$("#OppdrawSpot").text("CPU drew a " + data2.cards[0].value + " of " + data2.cards[0].suit);
		$("#oppcard").attr("src",data2.cards[0].image);
		$("#oppcard").removeClass("hidden");
	}
	
	function WinHand(PPoints){

		switch(PPoints){
			case 0:
				$("#playerCards").text("Player Points: 1");
				break;
			case 1:
				$("#playerCards").text("Player Points: 2");
				break;
			case 2:
				$("#playerCards").text("Player Points: 3");
				break;
			case 3:
				$("#playerCards").text("Player Points: 4");
				break;
			case 4:
				$("#playerCards").text("Player Points: 5");
				break;
			case 5:
				$("#playerCards").text("Player Points: 6");
				break;
			case 6:
				$("#playerCards").text("Player Points: 7");
				break;
			case 7:
				$("#playerCards").text("Player Points: 8");
				break;
			case 8:
				$("#playerCards").text("Player Points: 9");
				break;
			case 9:
				$("#playerCards").text("10, you win the game!");
				$("#restart").removeClass("hidden");
				break;
		}
		
	}
	
	function LoseHand(OppPoints){

		switch(OppPoints){
			case 0:
				$("#OppCards").text("CPU Points: 1");
				break;
			case 1:
				$("#OppCards").text("CPU Points: 2");
				break;
			case 2:
				$("#OppCards").text("CPU Points: 3");
				break;
			case 3:
				$("#OppCards").text("CPU Points: 4");
				break;
			case 4:
				$("#OppCards").text("CPU Points: 5");
				break;
			case 5:
				$("#OppCards").text("CPU Points: 6");
				break;
			case 6:
				$("#OppCards").text("CPU Points: 7");
				break;
			case 7:
				$("#OppCards").text("CPU Points: 8");
				break;
			case 8:
				$("#OppCards").text("CPU Points: 9");
				break;
			case 9:
				$("#OppCards").text("10, CPU wins the game!");
				$("#restart").removeClass("hidden");
				break;
		}
		
	}
	function increment(n){
		n++;
		return n;
	}
	
	function restart(){
		location.reload();
	}

}
	

$(function() {
	window.app = new MyApp();
	window.app.start();
});




