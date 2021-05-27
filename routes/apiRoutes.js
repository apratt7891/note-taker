const fs = require("fs");
const notesAdded = require('../db/db.json');

module.exports = app => {


function savedNotes (notes) {
    notes = JSON.stringify(notes);
    fs.writeFileSync('./db/db.json', notes, function(err) {
        if (err) throw err;
        return true;
        }
    )    

app.get("/api/notes", (req, res) => {
    res.join(notesAdded);
});

app.post("/api/notes", (req, res) => {
    req.body.id = notesAdded.length.toString();

    notesAdded.push(req.body);

    savedNotes(notesAdded);

    res.json(req.body);
});