
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
app.use(express.json());
app.listen(PORT, () => console.log('express server currently running on port $(PORT)'));

//   * POST `/api/notes` - Should receive a new note to save on the request body, add it to the `db.json` file, and then return the new note to the client.

//   * DELETE `/api/notes/:id` - Should receive a query parameter containing the id of a note to delete. This means you'll need to find a way to give each note a unique `id` when it's saved. In order to delete a note, you'll need to read all notes from the `db.json` file, remove the note with the given `id` property, and then rewrite the notes to the `db.json` file.