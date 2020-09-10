//declare an array
var number_array=[2,6,15,230,25,33,37];
//define a function to tell whether a number is prime or not
var is_prime=function(number) {
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
};

var prime_check=function(array) {
	var prime_array=[];
	//loop through the number_array
	for(var itr=0;itr<array.length;itr++) {
		//check whether each number is prime or not and add only the prime numbers to the prime_array 
		if(is_prime(array[itr])) {
			prime_array.push(array[itr]);
		}
	}
	return prime_array;
};

var final_array=prime_check(number_array);
console.log(final_array);