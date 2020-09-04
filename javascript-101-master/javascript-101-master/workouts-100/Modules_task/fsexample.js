const fs = require('fs');
const arun = require('./mymodule');

fs.readFile('./file.txt', 'utf-8', (err, data) => {
  if(err) { throw err; }
  console.log('data: ', data);
});

console.log(arun.add2(5));
console.log(arun.myvar); // fix this
console.dir(arun);


