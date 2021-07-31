//Niko Icardo 7/30/21
const express = require("express"); //returns a function
const bodyParser = require("body-parser");

const app = express(); // returns an express object

app.use(bodyParser.urlencoded({ extended: false }));
/* this will parse any incoming requests and extract any data in the body that is of the type urlencoded, it will also call next() for us
Notice the difference between the plainNodeServer.js methodology and this methodology. Express allowed us to completely bypass all of the extraction code and did it for us. */

app.post("/user", (req, res, next) => {
  return res.send("<h1>User: " + req.body.username + "</h1>"); // this will grab the username from the input field below
});

app.get("/", (req, res, next) => {
  res.send(
    '<form action="/user" method="POST"><input type="text" name="username"><button type="submit">Create User Account</button></input></form>'
  );
});

app.listen(5000); //no need to call a server
