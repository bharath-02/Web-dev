
//declare the IIFE construct
(function(array) {
	var prime_array=[];
	//loop through the number_array
	for(var itr=0;itr<array.length;itr++) {
		//check whether each number is prime or not and add only the prime numbers to the prime_array 
		if((function(number) {
			var count=0;
			for(var itr=1;itr<=number;itr++) {
				if((number%itr)==0) {
					count++;
				}
			}		
			//if a number's factor count is 2 then it is a prime number
			if(count==2) {
				return true;
			}
			else {
				return false;
			}
			})(array[itr])) {
			prime_array.push(array[itr]);
		}
	}
	console.log(prime_array);
})([2,6,15,23,5,33,37]);
