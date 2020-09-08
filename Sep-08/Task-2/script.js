var request=new XMLHttpRequest();
// var url_string='https://api.domainsdb.info/v1/domains/search?domain=facebook&zone=com';
try {
	reques.open('GET','https://dog.ceo/api/breeds/list/all',true); // Throws Error due to 'reques'
	request.onload=function() {
		var data=JSON.parse(this.response);
		console.log(data);
	}
	request.send();
}
catch(error) {
	console.log("Found Error:",error.description);
}