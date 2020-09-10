//declare an array
var array=[1,2,3,4,5,6,7,8,9,10];
//use the arrow functions and filter the odd numbers from the given array
var odd_numbers=array.filter((numbers)=>(numbers%2!==0));
console.log(odd_numbers);