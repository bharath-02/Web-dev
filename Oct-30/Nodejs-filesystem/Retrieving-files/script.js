// Importing required packages 
var fs = require('fs');
var path = require('path');
var http = require('http');

// Creating the server
var server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    // Reading the directory
    fs.readdir('D:\Task', (err, files) => {
        if (err) throw err;
        var myString = '';
        files.forEach((item) => {
            // Finding the type of files
            var extensiontype = path.extname(item);
            if (extensiontype === '.png') {
                myString += `<div><img src="https://bit.ly/32qUflZ" width="20px" height="20px"> ${item}</div>`;
            } else if (extensiontype === '.jpg') {
                myString += `<div><img src="https://bit.ly/36anrig" width="20px" height="20px"> ${item}</div>`;
            } else if (extensiontype === '.pdf') {
                myString += `<div><img src="https://bit.ly/36hbnfe" width="20px" height="20px"> ${item}</div>`;
            } else if (extensiontype === '.pptx') {
                myString += `<div><img src="https://bit.ly/2U9hXys" width="20px" height="20px"> ${item}</div>`;
            } else if (extensiontype === '.mp3') {
                myString += `<div><img src="https://bit.ly/38lNmX1" width="20px" height="20px"> ${item}</div>`;
            }
        });
        res.end(`<div>${myString}</div>`);
    });
});

// Listening to the server
server.listen(3300, () => {
    console.log('Listening on port 3300');
});

// "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTQvMLUgJIuTaNRAHoUUVgEyCp3ts_By9MFdQ&usqp=CAU"
// "https://bit.ly/32qUflZ"