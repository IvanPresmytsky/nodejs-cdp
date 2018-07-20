const express = require('express');

const routes = require('./routes/appRoutes');
const { cookieParser, qsParser } = require('./middlewares');

const app = express();
const bodyParser = express.json();

app.use(session({
  secret: 'secret',
  resave: false,
  saveUninitialized: true,
}));

app.use(bodyParser);

app.use(cookieParser());

app.use(qsParser());

routes(app);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

module.exports = app;
