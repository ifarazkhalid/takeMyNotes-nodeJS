console.log("Starting notes.js");

// loading fs
const fs = require('fs');

var fetchNotes = () => {
  try {
    var notesString = fs.readFileSync('notes-data.json');
    return JSON.parse(notesString);
  } catch (e){
    return [];
  }
};

var saveNotes = (notes) => {
  fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};

// DESCRIPTION OF ADDNOTE
// Add note function that adds note in the array
// notes array that has all the notes. note variable stores the single note sent by user.
// try-catch to check if file exists. if it does, load all notes in notes array.
// checking for duplicateNotes
var addNote = (title, body) => {
  var notes = fetchNotes();
  var note = {
    title,
    body
  };

// checks for duplicateNotes
var duplicateNotes = notes.filter((note) => {
  return note.title === title;
});

if (duplicateNotes.length === 0) {
  notes.push(note);
  saveNotes(notes);
  return note;
}

};

var getAll = () => {
  console.log("Getting all notes.")
};

var getNote = () => {
  console.log("LOLOL note");
};

var removeNote = (title) => {
  var notes = fetchNotes();
  // console.log(notes);
  var filteredNotes = notes.filter((note) => note.title !== title);
  saveNotes(filteredNotes);

return notes.length !== filteredNotes.lengths;
};

module.exports = {
  addNote,
  getAll,
  getNote,
  removeNote
};
