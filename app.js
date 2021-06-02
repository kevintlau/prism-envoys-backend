const express = require('express');
const logger = require('morgan');
const cors = require("cors");

const charactersRouter = require('./routes/characters');

require("dotenv").config();
require("./config/database");

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.use('/api/characters', charactersRouter);

module.exports = app;
