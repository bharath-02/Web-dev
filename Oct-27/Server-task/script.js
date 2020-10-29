const http = require('http');
const fs = require('fs');
const path = require('path');

let extensionTypes = {
    pdf: "pdf.png",
    ppt: 'ppt.jpg',
    image: 'image.jpg'
}

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'content-Type': 'text/html' });
    fs.readdir('D:/Task', function(err, files) {
        if (err) {
            return err;
        } else {
            let link = '';
            if (path.extname(`${files}` === '.jpg') || path.extname(`${files}` === '.png')) {
                link = extensionTypes.image;
            } else if (path.extname(`${files}` === '.pdf')) {
                link = extensionTypes.pdf;
            } else if (path.extname(`${files}` === '.pptx')) {
                link = extensionTypes.ppt;
            }
        }
        let str = '';
        files.forEach((item) => {
            str += `<img src=${link}><li>${item}</li>`;
        });
        res.end(`<ul>${str}</ul>`);
    });
});
server.listen(5000);