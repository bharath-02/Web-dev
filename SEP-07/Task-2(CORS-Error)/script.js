var request=new XMLHttpRequest();
var url_string='https://api.domainsdb.info/v1/domains/search?domain=facebook&zone=com';
var proxy_string='https://cors-anywhere.herokuapp.com/';
request.open('GET',proxy_string+url_string,true);
request.onload=function() {
	var data=JSON.parse(this.response);
	console.log(data);
}
request.send();
