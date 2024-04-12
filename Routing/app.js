
const fs = require('fs');
const http = require('http');
const html = fs.readFileSync('index.html', 'utf-8');


// Creating a server 


const server = http.createServer((request, response) => {
    // we get the URL Path in the request param so 

    let path = request.url;

    if(path === '/' || path.toLowerCase() === '/home'){
        response.end(html.replace('{{%CONTENT%}}', 'You are in Home Page'));
    }
    else if(path.toLocaleLowerCase() === '/products'){
        response.end(html.replace('{{%CONTENT%}}', 'You are in Products Page'));
    } 
    else {
        response.statusCode = 404;
        response.end('404 Not Found');
    }
    //response.end(html);
    console.log("Request received : "+ path);
});

// Configuring the server to listen on this ip:port
server.listen(8443, '127.0.0.1', () => {
    console.log("Server started");
});
