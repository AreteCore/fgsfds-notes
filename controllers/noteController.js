
//schema
const Note = require('../models/Note.js')
//seed data
const seed = require("../models/noteseed.js")
var md = require('markdown-it')();
module.exports = {
    index, 
    newNote, 
    // showNote, UNUSED ROUTE, show.ejs is not needed
    editNote, 
    updateNote, 
    createNote, 
    deleteNote, 
    seedNotes, 
    search, 
    nothing
}

// INDUCES - Index, New, Delete, Update, Create, Edit, Show

//index function displays index page
async function index(req, res) {
    try {
        let noteDatabaseContents = await Note.find({}).sort({"updatedAt": -1}) //pulls all, maybe try to organize by updated?
        console.log(noteDatabaseContents)
        res.render('index.ejs', {
            notes: noteDatabaseContents,
            md : md
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
    let regex = new RegExp(`${req.body.search}`, 'i')
    console.log(regex)
    try {
        let noteSearchResults = await Note.find({body: regex}).sort({"updatedAt": -1}) 
        // console.log(noteSearchResults)
        res.render('results.ejs', {
            notes: noteSearchResults
        })
    } catch (err) {
        res.send(err)
    }
}

//displays to add a new note
function newNote(req, res) {
    res.render('new.ejs') //this should be the code for the overlay
}

//displays to show an individual note 
//this is unused
//if there was a separate show.ejs page, this would be used
// async function showNote(req, res) {
//     try {
//         let foundNote = await Note.findById(req.params.id)
//         res.render('show.ejs', { note: foundNote })
//     } catch (err) {
//         res.send(err)
//     }
// }

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
        })
        Note.create(seed)
    } catch (err) {
        res.send(err)
    }
}

//nothing?
function nothing(req,res) {
    res.send()
}
