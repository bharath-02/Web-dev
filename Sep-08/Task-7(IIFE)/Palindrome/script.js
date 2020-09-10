//use the function-palindrome_check to find the palindromic strings
(function(array) {
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
	console.log('The palindromic word are: ',palindrome_array);
})(['racecar','abcd','tattarrattat']);
