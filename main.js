const fs = require('fs');

// TODO: Write the message "Hello, World!" to the file "output.txt"

const message = "Hello, World!";
const fileName = 'output.txt';

function writeMessageToFile(message, fileName) {
    fs.writeFile(fileName, message, (err) => {
        if (err) {
            console.error("An error occurred during the file writing process:", err);
            throw err;
        }
        console.log(message);
    });
}

writeMessageToFile(message, fileName);