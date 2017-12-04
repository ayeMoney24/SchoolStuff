function MyApp(){
	var version = " ver 1.0";
	
	this.start = function(){
		$("h1").append(version);
		
		
		$("#start").on("click" , function(){
			init();			
		});
		
		$("#win").on("click" , function(){
			WinHand();			
		});
		
		$("#lose").on("click" , function(){
			LoseHand();			
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
		console.log(DeckId);
		$.ajax({
			url: "https://deckofcardsapi.com/api/deck/fzg03owwpsth/draw/?count=1",
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
			.done(function(data2) {$("#OppdrawSpot").text("CPU drew a " + data2.cards[0].value + " of " + data2.cards[0].suit); })
			.fail(function() {
				$("#tools").text("ERROR")
			});
	}
	
	function cardsFunction(data1){
		$("#drawSpot").text("You drew a " + data1.cards[0].value + " of " + data1.cards[0].suit);
		
	}
	
	function WinHand(){
		var OldVal = $("#playerCards").val();
		console.log(OldVal);
		//switch(
		
	}
	
}
	

$(function() {
	window.app = new MyApp();
	window.app.start();
});




