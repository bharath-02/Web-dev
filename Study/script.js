console.log("Hello");
var request=new XMLHttpRequest();
request.open('GET','https://restcountries.eu/rest/v2/all',true);
request.onload=function() {
	// console.log(this.response);
	var data=JSON.parse(this.response);
	console.log(data);
}
request.send();