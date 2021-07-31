//Niko Icardo 7/30/21 , written as a replica of the plainNodeServer.js not using Express advantages. 
const express = require("express"); //returns a function

const app = express(); // returns an express object

app.use((req, res, next) => {
  let body = '';
  req.on('end', () => {
    const userName = body.split('=')[1];
    if (userName) {
      req.body = { name: userName };
    }
    next(); //forwards request to next 'middle-ware' where mw in this context are groups of functions handling requests and responses, or just the next app.use.
  });
  req.on('data', chunk => {
    body += chunk;
  });
});

app.use((req, res, next) => {
  if (req.body) {
    console.log('here');
    return res.send('<h1>' + req.body.name + '</h1>');
  }
  res.send(
    '<form method="POST"><input type="text"><button type="submit">Create User Account</button></input></form>'
  );
});

app.listen(5000); //no need to call a server
