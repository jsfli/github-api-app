// var apiKey = require('./../.env').apiKey;

function backEndConstructor(){

}


backEndConstructor.prototype.displayUserName = function (){
    console.log("hello");
};


exports.backEndFunctionsModule = backEndConstructor;
