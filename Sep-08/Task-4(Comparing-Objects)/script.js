//Create two objects for comparing each of them with different ordering
var obj1={'name':'Bharath','id':8};
var obj2={'id':8,'name':'Bharath'};

var flag=0;

//First check the length of the given two arraysand consider it as the base case and enter the if condition
if(Object.keys(obj1).length===Object.keys(obj2).length) {
	for(var key in obj1) {
		//Check whether the selected key of the object are same for the both
		if(obj1[key]===obj2[key]) {
			flag=1;
		}
		else {
			//if any is not same then break the loop
			flag=0;
			break;
		}
	}
}
else {
	flag=0;
}
if(flag===0) {
	console.log('The Objects are not equal');
}
else {
	console.log('The Objects are equal');
}