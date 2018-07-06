const express = require('express');
const routes = require('./routes/routes');
const { cookieParser, qsParser } = require('./middlewares');

const app = express();
const bodyParser = express.json();

app.use(bodyParser);

app.use(cookieParser());

app.use(qsParser());

routes(app);

module.exports = app;
