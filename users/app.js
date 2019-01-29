const express = require('express');
const user = require('./api/v1/users')

let app = express();

app.get('/api/v1/users/', user.getUsers);

app.get('/api/v1/users/:userId', user.getUserById);

module.exports = app;