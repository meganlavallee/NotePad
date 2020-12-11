const fs = require('fs');
const { get } = require('http');
const { getEnabledCategories } = require('trace_events');
const util = require('util');

const writeFileAsync = util.promisify(fs.writeFile);

const readfile = util.promisify(fs.readFile);

module.exports = function (app){
    // Get Notes
    function getNotes () {
        return readfile("db.json", "utf8");
    }
    // Add Notes
    function addNotes () {
        return writeFileAsync("db.json", JSON.stringify (note))
    }
    // Delete Notes
    function deleteNotes (){
    }
}
// Read DB.JSON file
// Assign ID
// Find Right Note To Delete
// Replace with Empty String??