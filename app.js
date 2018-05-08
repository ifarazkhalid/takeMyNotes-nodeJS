// to check if the file started
console.log('Starting app.js')

// loading fs model into fs variable
//Loading notes.js file.
const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const titleOptions = {
    describe: 'Title',
    demand: true,
    alias: 't'
  };

const bodyOptions = {
  describe: 'Body of the note',
  demand: true,
  alias: 'b'
}

// using yargs, setting up required feilds for our commands.
const argv = yargs
.command('add', 'Add a new note', {
title: titleOptions, body: bodyOptions

}).command('list', 'list all')
.command('read', 'read a note', {
  title: titleOptions
  }
)
.command('remove', 'remove note', {
  title: titleOptions
  }
)
.help()
.argv;
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
  var note = notes.getAll();
  for (var i = 0; i < note.length; i++) {
    notes.logNote(note[i]);
  }
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
