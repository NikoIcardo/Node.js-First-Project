/*
Niko Icardo 7/29/21
The following is an example of why plain node.js is painful for creating servers. 
Examine the Post response and how to extract a username from the data inputted. Its painful... 
This leads into why one would use Express (or other frameworks).
*/
const http = require("http");

const server = http.createServer((req, res) => {
  console.log("INCOMING REQUEST");
  console.log(req.method, req.url); // gives the http method, and URL that was used for the incoming request

  if (req.method === "POST") {
    let body = ''; 
    req.on('end', () => {
      const userName = body.split('=')[1]; 
      res.end('<h1>' + userName + '</h1>')
    });

    // event listener for incoming data, which will come in on chunks
    req.on('data', (chunk) => { 
      body += chunk;
    });
    
  } else {
    res.setHeader("Content-Type", "text/html"); //this will have the response sent as the type specied, html, plain, etc.
    res.end(
      '<form method="POST"><input type="text" name="username"><button type="submit">Create User</button></form>'
    ); // response method to send response back. The end method can accept a message to display on the web page, with html included.
  }
});

server.listen(5000); //This will start an ongoing listener that will wait for ongoing requests, will be able to handle multiple requests simultaneously
