const express = require('express');
const notes = require('./api/v1/notes');

let app = express();

app.get('/api/v1/notes/',notes.getNotesForUserId);

module.exports = app;
