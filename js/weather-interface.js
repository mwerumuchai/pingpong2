var apiKey = "dc65db5802e508eea01bd88137a5a9e1";
var apiKey = require('./../.env').apiKey;
var Weather = require('./../js/weather.js').weatherModule;

$(document).ready(function() {
  $('#weatherLocation').click(function() {
    var city = $('#location').val();
    $('#location').val("");
    $('.showWeather').text("The city you have chosen is " + city + ".");
    $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey).then(function(response) {
      $('.showWeather').text("The humidity in " + city + " is " + response.main.humidity + "%");
    }).fail(function(error) {
      $('.showWeather').text(error.responseJSON.message);
    });

  });
});

//Asynchronous prevents the user interface from locking up during long-running events like AJAX requests
//when the AJAX request has been made, the code after it will run beforethe callBack code
//e.g 1: console.log("The humidity in " + city + " is " + response.main.humidity + "%");
//2: console.log("Notice: The GET request has been made.");
//uses then() method which accpets a functionthat will be invoked when the promise has been fulfilled
//.fail() method is called when a promise enters the rejected state. An object representing the erroris passed into the fail method if it is called

$(document).ready(function() {
  var currentWeatherObject = new Weather();
  currentWeatherObject.getWeather();
});
