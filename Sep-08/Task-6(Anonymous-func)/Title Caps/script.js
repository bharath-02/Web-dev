
//declare a string
var string='indian ocean is huge';
//declare the arrow function for making the each word of a sentence to upper-case
var title_caps_string=function(word) {
	//split the string int seperate words and store it in a array
	var array=word.split(' ');
	var str='';
	//loop through the words
	for(var itr=0;itr<array.length;itr++) {
		//split the words to letters and store it in another array
	    var letter=array[itr].split('');
	    //loop through th letters array
	    for(var j=0;j<letter.length;j++) {
	    	//transform only the first letter to uppercase and add them to the str variable
	        if(j==0) {
	            str+=letter[j].toUpperCase();
	        }
	        else {
	            str+=letter[j];
	        }
	    }
	    //add a space between the words
	    str+=' ';
	}
	return str;
};
var final=title_caps_string(string);
console.log('The title-caps string is: ',final);