const express = require('express');
const cors = require('cors');

const bonjour = require('bonjour')();

bonjour.publish({ name: 'hercules', type: 'hercules-http', port: 3000 });

// Rotas
const indexRouter = require('./routes/index');
const herculesRouter = require('./routes/hercules');

const app = express();

app.use(express.urlencoded({extended : true}));
app.use(express.json());
app.use(express.json({ type: 'application/vnd.api+json' }));
app.use(cors());

app.use(indexRouter);
app.use(herculesRouter);

module.exports = app;