const bodyParser = require('body-parser');
const express = require('express');
const bookRoutes = require('./routes/bookRoutes');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/', bookRoutes);

module.exports = app;
