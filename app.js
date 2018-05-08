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
  var note = notes.addNote(argv.title, argv.body);

  if (note) {
    console.log("Note created");
    notes.logNote(note);
  } else {
    console.log("Note title already taken.")
  }

}

else if (commandName === 'list') {
  notes.getAll();
}

else if (commandName === 'read') {
  var note = notes.getNote(argv.title);
  // console.log(note);
  if (note) {
    notes.logNote(note);
  } else {
    console.log('No note found.');
  }
}

else if (commandName === 'remove') {
  var noteRemoved = notes.removeNote(argv.title);
  var message = noteRemoved ? 'Note was removed' : 'Note not found!'
  console.log(message);
}

else {
  console.log('Command entered was not recognized');
}
