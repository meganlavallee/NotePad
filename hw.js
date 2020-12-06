
const bodyParser = require('body-parser');
const express = require('express')
const app = express()
const PORT = 3000;
// * GET `/notes` - Should return the `notes.html` file.
app.get('/notes', function(req, res){
    res.send('GET request to the notes html')
})
//   * GET `*` - Should return the `index.html` file
app.get('/*', function(req, res){
    res.send('GET request to the index html')
})
app.post('/', function (req, res) {
    res.send('POST request to the homepage')
})

// * GET `/api/notes` - Should read the `db.json` file and return all saved notes as JSON.
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const note = require("./Develop/public/notes.html");
module.exports = function(app) {
    app.get("/api/notes", function(req,res){
        res.json(note);
    })
    //   * POST `/api/notes` - Should receive a new note to save on the request body, add it to the `db.json` file, and then return the new note to the client.
    app.post("/api/notes", function (req, res){
        console.log(req.body)
        res.json(note)
        res.send()
    })
    module.exports = notesArray;
}

require("./routes/apiRoutes.js")(app);
require("./routes/htmlRoutes.js")(app);

app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
})


//   * DELETE `/api/notes/:id` - Should receive a query parameter containing the id of a note to delete. This means you'll need to find a way to give each note a unique `id` when it's saved. In order to delete a note, you'll need to read all notes from the `db.json` file, remove the note with the given `id` property, and then rewrite the notes to the `db.json` file.
app.delete('/api/notes/:id', (request, response) => {
    const notesArray = Number(request.params.id);
    const newAccounts = accounts.filter((account) => account.id != notesArray);
  
    if (!newAccounts) {
      response.status(500).send('Account not found.');
    } else {
      accounts = newAccounts;
      response.send(accounts);
    }
  });