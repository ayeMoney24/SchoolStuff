function MyApp()
{
 var version = "1.0"
 
 this.start = function()
	{
		$("h1").append(version);
		var $weather = $('#weather-widget');
		var weatherWidget = new WeatherWidget($weather);
	
		$("#getWeather").on("click" , function(){
			weatherWidget.update();
		});
	};
 
}
$(function() {
	window.app = new MyApp();
	window.app.start();
});
