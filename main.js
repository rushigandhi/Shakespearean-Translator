var btn = document.getElementById('btn');
var translation = document.getElementById('translation');


btn.addEventListener("click", function(){

var textAreaString = document.getElementById('myTextArea').value;

var stringArr = textAreaString.split(".");

var translationStringArr = [];

for(var i = 0; i < stringArr.length; i++){

var urlString = 'http://api.funtranslations.com/translate/shakespeare.json?text=' + stringArr[i] + '.';

var request = new XMLHttpRequest();
request.open('GET', urlString);

request.onload = function() {

	// console.log(request.responseText);
	// console.log(textAreaString);
	var data = JSON.parse(request.responseText);
	// console.log(data.contents.translated);
	translationStringArr.push(data.contents.translated);

};

request.send();

}

var translationString = '';

for(var j = 0; j < translationStringArr.length; j++){

	translationString += translationStringArr[j];
}

	translation.innerHTML = translationString;

});





