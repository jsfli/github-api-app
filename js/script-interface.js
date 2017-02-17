var username;
var apiKey = require('./../.env').apiKey;
var backEndConstructor = require('./../js/script.js').backEndFunctionsModule;
var data;

var collectUserName = function(){
      username = $("#usernameInput").val();
      $("#usernameInput").val("");
      $("#showUsernameInput").text("Your Github username is "+username);
    };

var displayCallBack = function(username, response) {
  console.log(response);
  console.log(response[0].name);
  console.log(response.length);
};

$(document).ready(function(){
  $("#usernameSubmit").click(function(event){
  event.preventDefault();

  collectUserName();

  var newBackEndMagic = new backEndConstructor();
  newBackEndMagic.getRepos(username, displayCallBack);

  console.log("last line");



    });
});
