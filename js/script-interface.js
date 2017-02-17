var username;
var apiKey = require('./../.env').apiKey;
var backEndMagic = require('./../js/script.js').backEndFunctionsModule;

var newBackEndMagic = new backEndMagic();



var collectUserName = function(){
      username = $("#usernameInput").val();
      $("#usernameInput").val("");
      $("#showUsernameInput").text("Your Github username is "+username);
    };

$(document).ready(function(){
    $("#usernameSubmit").click(function(event){
      event.preventDefault();

      collectUserName();

      //collect API this is back end
      $.get('https://api.github.com/users/'+username+'?access_token=' + apiKey).then(function(response){
      console.log(JSON.stringify(response));
      }).fail(function(error){
      console.log(error.responseJSON.message);
      });

      console.log("problem");






    });
});
