var request=new XMLHttpRequest();
request.open('GET','http://api.openweathermap.org/data/2.5/weather?q=Ooty,india&APPID=890f03a59198b102bc8834a8f3bc5d46',true);
request.onload=function() {
	var data=JSON.parse(this.response);
	console.log(data);
}
request.send();