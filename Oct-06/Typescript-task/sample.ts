// Find method
let find=(array,size) => {
    for(let index=0;index<size;index++) {
        if(array[index] >= 18) {
            return array[index];
        }
    }
}
console.log('FIND Method: ');
let arr=[15,21,18,35,16];
console.log(`Input array: ${arr}`);
let findResult=find(arr,5);
console.log(`The implementation of FIND method to find the number immediately greater than 18 is ${findResult} .`);

// ForEach method
let forEach=(array,number) => {
    for(let index=0;index<array.length;index++) {
        array[index] = array[index] * number;
    }
    return array;
}
console.log('FOREACH Method: ');
let arr1=[10,20,30,40,50];
console.log(`Input array: ${arr1}`);
let forEachResult=forEach(arr1,10);
console.log(`The implementation of FOREACH method to multiply the array with 10 is ${forEachResult}`);

// Concat method
let concat=(array1,array2) => {
    return array1+','+array2;
}
console.log('CONCAT Method: ')
let arr2=[1,2,3,4,5];
let arr3=[6,7,8,9];
console.log(`Input array1: ${arr2}`);
console.log(`Input array2: ${arr3}`);
let concatResult=concat(arr2,arr3);
console.log(`The implementation of CONCAT method after concatenating the above two arrays are ${concatResult}`);

// Filter method
let filter=(array,limit) => {
    var new_array=[];
    for(let index=0;index<array.length;index++) {
        if(array[index] >= limit) {
            new_array.push(array[index]);
        }
    }
    return new_array;
}
console.log('FILTER Method');
let arr4=[16,25,36,20,17];
console.log(`Input array: ${arr4}`);
let filterResult=filter(arr4,18);
console.log(`The implementation of FILTER method to find all the ages above 18 is ${filterResult}`);

// Map method
let map=(array, number) => {
    for(let index=0;index<array.length;index++) {
        array[index] = array[index]**number;
    }
    return array;
}
console.log('MAP Method');
let arr5=[1,2,3,4,5];
console.log(`Input array: ${arr5}`);
let mapResult=map(arr5,2);
console.log(`The implementation of MAP method to find the square of an entire array is ${mapResult}`);

// Reduce method
let reduce=(array,total) => {
    for(let index=0;index<array.length;index++) {
        total+=array[index];
    }
    return total;
}
console.log('REDUCE Method');
let arr6=[10,20,30,40,50];
console.log(`Input array is ${arr6}`);
let reduceResult=reduce(arr6,0);
console.log(`The implementation of REDUCE method to find the sum of array is ${reduceResult}`);