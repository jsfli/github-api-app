var username;
// var apiKey = require('./../.env').apiKey;
var backEndConstructor = require('./../js/script.js').backEndFunctionsModule;
var data;
var info;

var collectUserName = function(){
      username = $("#usernameInput").val();
      $("#usernameInput").val("");
      $("#usernameDisplay").text("Your Github username is "+username);
    };

var displayCallBack = function(username, response) {
  info = response;
  console.log(info.length);
  $('#infoDisplay').append("<li>"+username+" currently has "+info.length+" repos.</li>"+
                           "<li> The name of the first repo is "+info[0].name+" .</li>"+
                           "<li> The description of my first repo is  "+info[0].description+" .</li>"+
                           "<li> My outstanding tasks are putting API array info back into an array for .name and .description and display it on the page, but ran out of time.</li>"
                            );
  console.log(info[0].name);
};

$(document).ready(function(){
  $("#usernameSubmit").click(function(event){
  event.preventDefault();

  collectUserName();

  var newBackEndMagic = new backEndConstructor();
  newBackEndMagic.getRepos(username, displayCallBack);
  });
});
