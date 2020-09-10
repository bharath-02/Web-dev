

//use arrow functions to calculate the sum of all elements in the array
(function(array) {
	var sum=0;
	for(var itr=0;itr<array.length;itr++) {
		sum+=array[itr];
	} 
	console.log('Total sum: ',sum);
})([1,2,3,4,5]);
