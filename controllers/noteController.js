
//schema
const Note = require('../models/Note')
//seed data
const seed = require("../models/noteseed")

module.exports = {
    index, newNote, showNote, editNote, updateNote, createNote, deleteNote, seedNotes, search
}

// INDUCES - Index, New, Delete, Update, Create, Edit, Show

//index function displays index page
async function index(req, res) {
    try {
        let noteDatabaseContents = await Note.find({}).sort({"updatedAt": -1}) //pulls all, maybe try to organize by updated?
        console.log(noteDatabaseContents)
        res.render('index.ejs', {
            notes: noteDatabaseContents
        })
        // res.send("bang")
    } catch (err) {
        res.send(err)
    }
}
//search
async function search(req, res) {
    // console.log("req.body",req.body)
    // { search: 'asdfdsf' }
    try {
        // Customer.find({ email: /foo\.bar/ }).find({ age: { $gte: 30 } });
        let mySearch = req.body.search
        let noteSearchResults = await Note.find({body: (/,mySearch,/)}).sort({"updatedAt": -1}) 
        console.log(noteSearchResults)
        res.render('results.ejs', {
            notes: noteSearchResults
        })
        // res.send("bang")
    } catch (err) {
        res.send(err)
    }
}

//displays to add a new note
function newNote(req, res) {
    res.render('new.ejs') //this should be the code for the overlay
}

//displays to show an individual note
async function showNote(req, res) {
    try {
        let foundNote = await Note.findById(req.params.id)
        res.render('show.ejs', { note: foundNote })
    } catch (err) {
        res.send(err)
    }
}

//displays edit note
async function editNote(req, res) {
    try {
        let note = await Note.findById(req.params.id)
        res.render('edit.ejs', { note })
    } catch (err) {
        res.send(err)
    }
}

//commit note edit
async function updateNote(req, res) {
    console.log("req body", req.body)
    try {
        await Note.findByIdAndUpdate(req.params.id, req.body)
        // res.redirect(`/notes`)
        res.header('HX-Refresh', "true")
        res.send("");
    } catch (err) {
        res.send(err)
    }
}

//try this
// app.put("/todo/:id", async (req,res) => {
//     //get id
//     let id = req.params.id
//     //get todos
//     const todo = await Todo.findById(id)
//     //complete todo
//     todo.completed = true
//     todo.save() //saves changes
// })

//create note
async function createNote(req, res) {
    try {
        let newNote = await Note.create(req.body)
        // res.redirect(`/notes/`)
        res.header('HX-Refresh', "true")
        res.send("");
    } catch (err) {
        res.send(err)
    }
}

//delete note
async function deleteNote(req, res) {
    try {
        await Note.findByIdAndDelete(req.params.id)
        res.header('HX-Refresh', "true")
        res.send();
    } catch (err) {
        res.send(err)
    }
}

//seed notes
function seedNotes(req, res) {
    try {
        Note.deleteMany({}, (error, allNotes) => {
            Note.create(seed) //can i take this out of here? move it down
        })
    } catch (err) {
        res.send(err)
    }
}

