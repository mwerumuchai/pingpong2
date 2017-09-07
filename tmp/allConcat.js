var Calculator = require('./../js/pingpong.js').calculatorModule;

$(document).ready(function() {
  $('#ping-pong-form').submit(function(event) {
    event.preventDefault();
    var goal = $('#goal').val();
    var simpleCalculator = new Calculator("hot pink");
    var output = simpleCalculator.pingPong(goal);
    output.forEach(function(element) {
      $('#solution').append("<li>" + element + "</li>");
    });
  });
});

$(document).ready(function(){
  $('#signup').submit(function(event){
    event.preventDefault();
    var email = $('#email').val();
    $('#signup').hide();
    $('#solution').prepend('<p>Thank you, ' + email + ' has been added to our list!</p>');
  });
});

$(document).ready(function(){
  $('#time').text(moment());
});

var Weather = require('./../js/weather.js').weatherModule;

$(document).ready(function() {
  var currentWeatherObject = new Weather();
  $('#weatherLocation').click(function() {
    var city = $('#location').val();
    $('#location').val("");
    currentWeatherObject.getWeather(city);
  });
});

//Asynchronous prevents the user interface from locking up during long-running events like AJAX requests
//when the AJAX request has been made, the code after it will run beforethe callBack code
//e.g 1: console.log("The humidity in " + city + " is " + response.main.humidity + "%");
//2: console.log("Notice: The GET request has been made.");
//uses then() method which accpets a functionthat will be invoked when the promise has been fulfilled
//.fail() method is called when a promise enters the rejected state. An object representing the erroris passed into the fail method if it is called
