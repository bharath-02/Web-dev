//use the IIFE functions and print the odd numbers from the given array
(function(array) {
	for(var itr=0;itr<array.length;itr++) {
		if((array[itr]%2)!==0) {
			console.log(array[itr]);
		}
	}
})([1,2,3,4,5,6,7,8,9,10]);

