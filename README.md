# takeMyNotes - A note taking application made using node.js

**takeMyNotes** is an application made to take notes. I made this appliation to get familiar with node.js as I wanted to dive deep in it. I hope to complete this in 2-3 days while I learn node.js.

# Final Update

- Folder Structure for application created.
- The application is now completed with all functions working.

# Overview of takeMyNotes

- Adding a note function using add command. To add a note, a **title** and **body** of note has to be provided.
 > **Example:** node app.js add -t Note1 -b "This is the body of the note"

- Listing all notes with title that exists in the database (JSON file).
 > **Example:** node app.js list

- Reading specific note when title is provided.
 > **Example** node app.js read -t "Note1"

- Removing a note from database (JSON file) provided a title as an argument.
 > **Example:** node app.js remove -t Note1