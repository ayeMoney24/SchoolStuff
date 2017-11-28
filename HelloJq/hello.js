function MyApp(){
	
	this.start = function(){
		$("#button").click(function(){

		DoStuff();
	});
	};
}
	

$(function() {
	window.app = new MyApp();
	window.app.start();
});




function DoStuff(){
	$(".p1").addClass("updated");
	$("#p2").text("New Hampshire");
}