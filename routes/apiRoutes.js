const fs = require("fs");
const path = require('path');

module.exports = app => {

    fs.readFile("db/db.json","utf8", (err, data) => {
        if (err) throw err;

        let notes = JSON.parse(data);



        app.get("/api/notes", (req, res) => {
            res.join(notes);
        });

        app.post("/api/notes", (req, res) => {

            let newNote = req.body;
            notes.push(newNote);
            updateNote();
            return console.log("The note" + newNote.title + "was added");

        });

        app.get("/api/notes/:id", (req, res) => {
            res.json(notes[req.params.id]);
        });

        app.delete("/api/notes/:id", (req,res) => {
            notes.splice(req.params.id, 1);
            updateNote();
            console.log("The note was deleted");
        });

        app.get("/notes", (req, res) => {
            res.sendFile(path.join(__dirname, "../public.notes.html"));
        });

        app.get("/", (req, res) => {
            res.sendFile(path.join(__dirname, "../public.index.html"));
        });

        function updateNote() {
            fs.readFile("db/db.json", JSON.stringify(notes,'\t'), err  => {
                if (err) throw err;
                return true;
        });
    }
})}