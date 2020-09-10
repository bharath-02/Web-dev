
//declare an array
var number_array=[1,2,3,4,5];
//use arrow functions to calculate the sum of all elements in the array
var total=((array)=>{
	var sum=0;
	for(var itr=0;itr<array.length;itr++) {
		sum+=array[itr];
	} 
	return sum;
});
//store the returned value from the arrow function ina variable.
var sum_of_all_elements=total(number_array);
console.log('Total sum: ',sum_of_all_elements);