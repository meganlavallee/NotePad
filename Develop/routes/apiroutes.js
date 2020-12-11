
var Data = require("../db/db.json");
// var waitListData = require("../data/waitinglistData");


// ROUTING

module.exports = function(app) {
  // API GET Requests
  
  app.get("/api/notes", function(req, res) {
    res.json(Data);
  });

//   app.get("/api/waitlist", function(req, res) {
    // res.json(waitListData);
  };

  // API POST Requests

  app.post("/api/tables", function(req, res) {
    
    if (Data.length < 5) {
      Data.push(req.body);
      res.json(true);
    }
    else {
      waitListData.push(req.body);
      res.json(false);
    }
  });

 
  // Clearning Application

  app.delete("/api/delete", function(req, res) {
    // Empty out the arrays of data
    Data.length = 0;
    waitListData.length = 0;

    res.json({ ok: true });
  });
;
