// Find method
var find = function (array, size) {
    for (var index = 0; index < size; index++) {
        if (array[index] >= 18) {
            return array[index];
        }
    }
};
console.log('FIND Method: ');
var arr = [15, 21, 18, 35, 16];
console.log("Input array: " + arr);
var findResult = find(arr, 5);
console.log("The implementation of FIND method to find the number immediately greater than 18 is " + findResult + " .");
// ForEach method
var forEach = function (array, number) {
    for (var index = 0; index < array.length; index++) {
        array[index] = array[index] * number;
    }
    return array;
};
console.log('FOREACH Method: ');
var arr1 = [10, 20, 30, 40, 50];
console.log("Input array: " + arr1);
var forEachResult = forEach(arr1, 10);
console.log("The implementation of FOREACH method to multiply the array with 10 is " + forEachResult);
// Concat method
var concat = function (array1, array2) {
    return array1 + ',' + array2;
};
console.log('CONCAT Method: ');
var arr2 = [1, 2, 3, 4, 5];
var arr3 = [6, 7, 8, 9];
console.log("Input array1: " + arr2);
console.log("Input array2: " + arr3);
var concatResult = concat(arr2, arr3);
console.log("The implementation of CONCAT method after concatenating the above two arrays are " + concatResult);
// Filter method
var filter = function (array, limit) {
    var new_array = [];
    for (var index = 0; index < array.length; index++) {
        if (array[index] >= limit) {
            new_array.push(array[index]);
        }
    }
    return new_array;
};
console.log('FILTER Method');
var arr4 = [16, 25, 36, 20, 17];
console.log("Input array: " + arr4);
var filterResult = filter(arr4, 18);
console.log("The implementation of FILTER method to find all the ages above 18 is " + filterResult);
// Map method
var map = function (array, number) {
    for (var index = 0; index < array.length; index++) {
        array[index] = Math.pow(array[index], number);
    }
    return array;
};
console.log('MAP Method');
var arr5 = [1, 2, 3, 4, 5];
console.log("Input array: " + arr5);
var mapResult = map(arr5, 2);
console.log("The implementation of MAP method to find the square of an entire array is " + mapResult);
// Reduce method
var reduce = function (array, total) {
    for (var index = 0; index < array.length; index++) {
        total += array[index];
    }
    return total;
};
console.log('REDUCE Method');
var arr6 = [10, 20, 30, 40, 50];
console.log("Input array is " + arr6);
var reduceResult = reduce(arr6, 0);
console.log("The implementation of REDUCE method to find the sum of array is " + reduceResult);
