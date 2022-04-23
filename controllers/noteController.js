
//schema
const Note = require('../models/note')
//seed data
const seed = require("../models/productseed")

module.exports = {
    index, newNote, showNote, editNote, updateNote, createNote, deleteNote, seedNotes
}

// INDUCES - Index, New, Delete, Update, Create, Edit, Show

//index function displays index page
async function index(req, res) {
    try {
        let noteDatabaseContents = await Note.find({}) //pulls all, maybe try to organize by updated?
        res.render('index.ejs', {
            notes: noteDatabaseContents
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
    try {
        await Note.findByIdAndUpdate(req.params.id, req.body)
        res.redirect(`/notes`)
    } catch (err) {
        res.send(err)
    }
}

//create note
async function createNote(req, res) {
    try {
        let newNote = await Note.create(req.body)
        res.redirect(`/notes/`)
    } catch (err) {
        res.send(err)
    }
}

//delete note
async function deleteNote(req, res) {
    try {
        await Note.findByIdAndDelete(req.params.id)
        res.redirect('/notes')
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

