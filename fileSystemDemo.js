//Niko Icardo 7/29/21

const fs = require('fs'); // create a filesystem object

const userName = 'Niko'; 

console.log(userName);

fs.writeFile('user-data.txt', 'Name: ' + userName, (err) => {
  if (err) {
    console.log(err); 
    return;
  }
  console.log('WROTE FILE');
}); // write file is asynchronous 