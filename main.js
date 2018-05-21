var btn = document.getElementById('btn');
var translation = document.getElementById('translation');


btn.addEventListener("click", function(){

var textAreaString = document.getElementById('myTextArea').value;

var urlString = 'http://api.funtranslations.com/translate/shakespeare.json?text=' + textAreaString;

var request = new XMLHttpRequest();
request.open('GET', urlString);

request.onload = function() {

	// console.log(request.responseText);
	// console.log(textAreaString);
	var data = JSON.parse(request.responseText);
	// console.log(data.contents.translated);
	translation.innerHTML = data.contents.translated;

};

request.send();

});





