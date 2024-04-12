const fs = require('fs');

let input = fs.readFileSync('file/input.txt', 'utf-8');

console.log(" Here is the file content \n" + input);


// if the output file is not present then it creates for you
fs.writeFileSync('file/output.txt', "Hello I am an output file");
