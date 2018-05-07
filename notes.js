console.log("Starting notes.js");

// loading fs
const fs = require('fs');

// DESCRIPTION OF ADDNOTE
// Add note function that adds note in the array
// notes array that has all the notes. note variable stores the single note sent by user.
// try-catch to check if file exists. if it does, load all notes in notes array.
// checking for duplicateNotes
var addNote = (title, body) => {
  var notes = [];
  var note = {
    title,
    body
  };

try {
  var notesString = fs.readFileSync('notes-data.json');
  notes = JSON.parse(notesString);
} catch (e){

}

// checks for duplicateNotes
var duplicateNotes = notes.filter((note) => {
  return note.title === title;
});

if (duplicateNotes.length === 0) {
  notes.push(note);
  fs.writeFileSync('notes-data.json', JSON.stringify(notes));
}

};

var getAll = () => {
  console.log("Getting all notes.")
};

var getNote = () => {
  console.log("LOLOL note");
};

var removeNote = () => {
  console.log("Removing note");
};

module.exports = {
  addNote,
  getAll,
  getNote,
  removeNote
};
