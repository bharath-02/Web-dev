/*--REDUCE

  Return the sum of all the elements in an array 
  plus an optional initial value.

  For example: reduce([1, 2, 3], 10) returns 16
*/

var reduce;

reduce = function(arr, initial) {
	
	if(isNaN(initial))
	{
		initial = 0;
	}
	for(var i=0;i<arr.length;i++ )
		{
			initial+=arr[i];
			console.log(initial);
		}
		
  return initial;
};

/*--Mocha Testing--*/


module.exports = reduce;
