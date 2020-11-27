var request=new XMLHttpRequest();
request.open('GET','https://www.googleapis.com/gmail/v1/users',true);
request.onload=function() {
	var data=JSON.parse(this.response);
	console.log(data);
}
request.send();

// https://dog.ceo/api/breeds/list/all