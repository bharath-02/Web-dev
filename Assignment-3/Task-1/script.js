var request=new XMLHttpRequest();
request.open('GET','https://dog.ceo/api/breeds/list/all',true);
request.onload=function() {
	var data=JSON.parse(this.response);
	console.log(data);
}
request.send();
