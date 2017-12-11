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
			PPoints = increment(PPoints);
			$("#playerCards").text("Player Points: "+ PPoints);			
			if(PPoints == 10){
				$("#restart").removeClass("hidden");
				$("#playerCards").text("Player Wins!");			
			}	
		});
		
		$("#lose").on("click" , function(){
			OppPoints = increment(OppPoints);
			$("#OppCards").text("CPU Points: "+ OppPoints);
			if(OppPoints == 10){
				$("#restart").removeClass("hidden");
				$("#OppCards").text("CPU Wins!");
			}
			
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
			url: "https://deckofcardsapi.com/api/deck/"+ DeckId+"/draw/?count=1",
			dataType: "json"
		})
			.done(function(data1) {cardsFunction(data1)})
			.fail(function() {
				$("#tools").text("ERROR")
			});
		$.ajax({
			url: "https://deckofcardsapi.com/api/deck/new/draw/?count=1",
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




