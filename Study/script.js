var obj1={'name':'Bharath','id':8};
var obj2={'id':8,'name':'Bharath'};

var flag=0;
if(Object.keys(obj1).length===Object.keys(obj2).length) {
	for(var key in obj1) {
		if(obj1[key]===obj2[key]) {
			flag=1;
		}
		else {
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