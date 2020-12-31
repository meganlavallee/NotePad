// var waitListData = require("../data/waitinglistData");


//   // ROUTING

//   module.exports = function (app) {
//     // API GET Requests

//     app.get("/api/notes", function (req, res) {
//       res.json(Data);
//     });

//     //   app.get("/api/waitlist", function(req, res) {
//     // res.json(waitListData);
//   };

// // API POST Requests

// app.post("/api/tables", function (req, res) {

//   if (Data.length < 5) {
//     Data.push(req.body);
//     res.json(true);
//   }
//   else {
//     waitListData.push(req.body);
//     res.json(false);
//   }
// });


// // Clearning Application

// app.delete("/api/delete", function (req, res) {
//   // Empty out the arrays of data
//   Data.length = 0;
//   waitListData.length = 0;

//   res.json({ ok: true });
// });
// ;

// const bodyParser = require('body-parser');
// const note = require("./Develop/public/notes.html");
// module.exports = function (app) {
//   app.get("/api/notes", function (req, res) {
//     res.json(note);
//   })
//   //   * POST `/api/notes` - Should receive a new note to save on the request body, add it to the `db.json` file, and then return the new note to the client.
//   app.post("/api/notes", function (req, res) {
//     console.log(req.body)
//     res.json(note)
//     res.send()
//   })
//   module.exports = notesArray;
// }


// app.listen(PORT, function () {
//   console.log("App listening on PORT: " + PORT);
// })

// // * GET `/api/notes` - Should read the `db.json` file and return all saved notes as JSON.
// //   * DELETE `/api/notes/:id` - Should receive a query parameter containing the id of a note to delete. This means you'll need to find a way to give each note a unique `id` when it's saved. In order to delete a note, you'll need to read all notes from the `db.json` file, remove the note with the given `id` property, and then rewrite the notes to the `db.json` file.
// app.delete('/api/notes/:id', (request, response) => {
//   const notesArray = Number(request.params.id);
//   const newAccounts = accounts.filter((account) => account.id != notesArray);

//   if (!newAccounts) {
//     response.status(500).send('Account not found.');
//   } else {
//     accounts = newAccounts;
//     response.send(accounts);
//   }
// });