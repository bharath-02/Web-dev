var request=new XMLHttpRequest();
request.open('GET','https://api.domainsdb.info/v1/domains/search?domain=facebook&zone=com',true);
request.onload=function() {
	var data=JSON.parse(this.response);
	console.log(data);
}
request.send();