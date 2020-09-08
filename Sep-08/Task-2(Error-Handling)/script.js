//Create a new http request using XMLHttpRequest object.
var request=new XMLHttpRequest();

//Surround the fetching process inside the try block for smooth running of the code
try {
	reques.open('GET','https://dog.ceo/api/breeds/list/all',true); // Throws Error due to 'reques'
	request.onload=function() {
		var data=JSON.parse(this.response);
		console.log(data);
	}
	request.send();
}
//catch the error and print it in required form.
catch(error) {
	console.log("Found Error:",error.message);
}