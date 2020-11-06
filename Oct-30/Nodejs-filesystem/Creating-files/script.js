// Importing the file system package
var fs = require('fs');

// Creating the date object
var date = new Date();

// Creating the folder
fs.mkdir('Date-and-time', (err) => {
    // Checking for errors
    if (err) throw err;
    // Creating the files
    fs.writeFile('Date-and-time/date-time.txt', date, (err) => {
        // Checking for errors
        if (err) {
            console.log('Error Occured');
        }
    });
});