/*var request=new XMLHttpRequest();
request.open('GET','https://dog.ceo/api/breeds/list/all',true);
request.onload=function() {
	var data=JSON.parse(this.response);
	console.log(data);
}
request.send();*/
function f(a) {
	b = a + 10
	console.log(a);
	return 20;
}

function f1(w) {
	var dd = w(10)
	console.log(dd);
	return function(){console.log("check")}
}
var a11 = function(bb){return bb+10; } //10

var ff = f(10);
console.log(ff);
var xx = f1(a11)
xx();
