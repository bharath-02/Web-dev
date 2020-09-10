var word_array=['racecar','abcd','tattarrattat'];
//use the function-palindrome_check to find the palindromic strings
var palindrome_check=((array)=> {
	var palindrome_array=[];
	//loop through the array elements
	for(var itr=0;itr<array.length;itr++) {
		//store the first word
		var word=array[itr];
		//reverse and store the same word in reverse_word variable 
		var reverse_word=word.split('').reverse().join('');
		//check if the two strings are same and push it to the palindrome_array
		if(word==reverse_word) {
			palindrome_array.push(word);
		}
	}
	return palindrome_array;
});

var new_array=palindrome_check(word_array);
console.log('The palindromic word are: ',new_array);