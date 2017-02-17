var apiKey = require('./../.env').apiKey;

function backEndConstructor(){}

backEndConstructor.prototype.getRepos = function (username, displayCallBack){

    $.get('https://api.github.com/users/'+username+'/repos'+'?access_token='+
    apiKey).then(function(response){

    displayCallBack(username, response);

    }).fail(function(error){
      console.log(error.responseJSON.message);
    });
  };

exports.backEndFunctionsModule = backEndConstructor;
