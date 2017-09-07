(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
exports.apiKey="dc65db5802e508eea01bd88137a5a9e1";

},{}],2:[function(require,module,exports){
function Calculator(skinName) {
  this.skin = skinName;
}
Calculator.prototype.pingPong = function(goal) {
  var output = [];
  for (var i = 1; i <= goal; i++) {
    if (i % 15 === 0) {
      output.push("ping-pong");
    } else if (i % 3 === 0) {
      output.push("ping");
    } else if (i % 5 === 0) {
      output.push("pong");
    } else  {
      output.push(i);
    }
  }
  return output;
};
exports.calculatorModule = Calculator;

},{}],3:[function(require,module,exports){
function Weather(){
}

Weather.prototype.getWeather = function() {
  console.log("Hi! I'm a weather object.");
}

exports.weatherModule = Weather;

},{}],4:[function(require,module,exports){
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

},{"./../.env":1,"./../js/pingpong.js":2,"./../js/weather.js":3}]},{},[4]);
