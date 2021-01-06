var { writeFile } = require("fs");
var Data = require("../db/db.json");
var uuid = require("uuid");

// Main Function
module.exports = function (app) {

  // Write New Notes Function
  function newNotes() {
    // Write to file method
    writeFile("./db/db.json", JSON.stringify(Data), err => {
      if (err) {
        console.log(err);
      }
    })
  }

  // GET Request
  app.get("/api/notes", (req, res) => res.json(Data));

  // POST Request
  app.post("/api/notes", (req, res) => {

    // UNIQUE ID
    let newNote = req.body;
    // Using uuid method to generate unique id
    newNote.id = uuid.v1();

    // Push new note to data base
    Data.push(newNote);
    // Rewrite  data base file with new array
    newNotes();

    // Send new note back
    res.json(newNote);
  });

  // DELETE
  app.delete("/api/notes/:id", (req, res) => {
    // Loop through da base to find note with id that supposed to delete
    for (let i = 0; i < Data.length; i++) {
      if (Data[i].id == req.params.id) {
        // Use splice method to divide data base array in 2 parts
        Data.splice(i, 1);
        break;
      }
    }
    // Rewrite  data base file with new array
    newNotes();
    // Send From Back to Front
    res.json(Data);
  });


};

