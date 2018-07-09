const express = require('express');
const passport = require('passport');
const routes = require('./routes/appRoutes');
const session = require('express-session');
const db = require('./db');
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

app.use(passport.initialize());
app.use(passport.session());

routes(app);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

module.exports = app;
