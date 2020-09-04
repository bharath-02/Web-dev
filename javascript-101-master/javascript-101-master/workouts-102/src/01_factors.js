/*--FACTORS

  Write a function that returns an array 
  containing all of the factors of a number.

  For example: factors(10) returns [1, 2, 5, 10]
*/

var factors;

factors = function(num) {
	if(num<0)
	{
		return "null";
	}
	dummy = []
	for(i=1;i<=num;i++)
		if(num%i==0)
		{
			dummy.push(i);
		}
  return dummy;
};

/*--Mocha Testing--*/


module.exports = factors;
