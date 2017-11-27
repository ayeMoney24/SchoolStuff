function WeatherWidget($widget)
{
	 this.update = function()
	 {
	 $(".results", $widget).hide();
	 $(".loading", $widget).show();
	 getWeatherReport();
	 };
	 
	function getWeatherReport()
	{
		if (navigator.geolocation)
		{
			navigator.geolocation.getCurrentPosition(
			function(position)
			{
				var lat = $("#latitude").val();
				var lon = $("#longitude").val();
				
				var coords  = lat + "," + lon;
				$.ajax({
					url: "https://api.weather.gov/points/" + coords + "/forecast",
					dataType: "json"
				})
				.done(function(data) { populateWeather(data); })
				.fail(function(jqXHR, textStatus, errorThrown) {
					$("#controls .error")
					.text("ERROR")
				});
			},
			function(error)
			{
				$("#controls .error")
					.text("ERROR: " + error.message)
					.slideDown();
			});
		}
	}
	 
	 	 function populateWeather(data) {


		 $(".results header img", $widget).attr("src",
		 data.properties.periods[1].icon);
		 $(".location>span", $widget).text(data.properties.periods[1].name);
		 $("#cond", $widget).text(data.properties.periods[1].shortForecast);
		 $("#temp", $widget).text(data.properties.periods[1].temperature);
		 $("#info", $widget).text(data.properties.periods[1].detailedForecast);
		 $("#wind", $widget).text(data.properties.periods[1].windSpeed + " "
		 	+ data.properties.periods[1].windDirection);


		 $(".loading", $widget).fadeOut(function ()
		 {
		 $(".results", $widget).fadeIn();
		 });
	 }
	 
}
