const fs = require("fs");
const path = require('path');

module.exports = app => {

    fs.readFile("db/db.json", "utf8", (err, data) => {
        if (err) throw err;

        let notes = JSON.parse(data);



app.get("/api/notes", (req, res) => {
    res.join(notes);
});

app.post("/api/notes", (req, res) => {

    let addNote = req.body;
    notes.push(addNote);
    noteAdded();
    return console.log("The note" + addNote.title + "was added");

});

app.get("/api/notes/:id", (req, res) => {
    res.json(notes[req.params.id]);
});

app.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "../public.notes.html"));
});

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../public.index.html"));
});
