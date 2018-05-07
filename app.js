// to check if the file started
console.log('Starting app.js')

// loading fs model into fs variable
//Loading notes.js file.
const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const argv = yargs.argv;
var commandName = process.argv[2];

if (commandName === 'add') {
  notes.addNote(argv.title, argv.body);
} else if (commandName === 'list') {
  notes.getAll();
} else if (commandName === 'read') {
  notes.getNote(argv.title);
} else if (commandName === 'remove') {
  notes.removeNote(argv.title);
} else {
  console.log('Command entered was not recognized');
}
