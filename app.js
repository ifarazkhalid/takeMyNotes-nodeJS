// to check if the file started
console.log('Starting the application')

// loading fs model into fs variable
const fs = require('fs');
// Loading os module.
const os = require('os');

//var user that calls userInfo to get information.
var user = os.userInfo();

//fs function appendFile that write to a file given a name.
fs.appendFile('greetings.txt', `Hello ${user.username}! How are you?`, function(err) {
  if (err) {
    console.log('Error has occured. Cannot write to file');
  }
});
