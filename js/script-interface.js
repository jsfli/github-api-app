var username;
var apiKey = require('./../.env').apiKey;
var backEndConstructor = require('./../js/script.js').backEndFunctionsModule;

var collectUserName = function(){
      username = $("#usernameInput").val();
      $("#usernameInput").val("");
      $("#showUsernameInput").text("Your Github username is "+username);
    };

$(document).ready(function(){
    $("#usernameSubmit").click(function(event){
      event.preventDefault();

      collectUserName();

      var newBackEndMagic = new backEndConstructor();
      newBackEndMagic.displayUserName();

      //collect API this is back end
      $.get('https://api.github.com/users/'+username+'/repos'+'?access_token='
      + apiKey).then(function(response){
      console.log(response);
      }).fail(function(error){
      console.log(error.responseJSON.message);
      });

      console.log("line after API");






    });
});
