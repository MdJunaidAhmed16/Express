
// how to read and output to the terminal

const readline = require('readline');

const r1 = readline.createInterface({
    input:process.stdin,
    output : process.stdout,
});

r1.question('Enter your name : ', (name)=>{
    console.log("Welcome to the Node : "+name);
    r1.close();
})

r1.on('close', ()=>{
    console.log('Read Line closed');
})