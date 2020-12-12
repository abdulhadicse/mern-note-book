const notesRouter = require('express').Router();
const auth = require('../Middleware/auth');
const notes = require('../Controller/noteController');

notesRouter.route('/')
.get(auth, notes.getNotes)
.post(auth, notes.createNotes)

notesRouter.route('/:id')
.get(auth, notes.getNote)
.put(auth, notes.updateNote)
.delete(auth,notes.deleteNote)


module.exports = notesRouter;