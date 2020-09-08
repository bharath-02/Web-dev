//Declare the callback function
function something(operation,array) {
	var value1=100,value2=20;
	var result=array[operation](value1,value2);
	console.log(result);
}
// Define the different calculative function
function add(a,b) {
	return a+b;
}
function sub(a,b) {
	return a-b;
}
function mul(a,b) {
	return a*b;
}
function div(a,b) {
	return a/b;
}
//define the array of all the functions included in it
var arr=[add,sub,mul,div];
something(0,arr) // 120
something(1,arr) // 80
something(2,arr) // 2000
something(3,arr) // 5


