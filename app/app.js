const express = require('express');
const passport = require('passport');
const session = require('express-session');

const productsData = require('./data/products.json');
const routes = require('./routes/appRoutes');
const usersData = require('./data/users.json');

const { cookieParser, qsParser } = require('./middlewares');
const { importProducts, importUsers } = require('./controllers/app');

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

if (usersData.length) {
  usersData.forEach(user => {
    importUsers(user)
      .spread((item, created) => {
        console.log(item.get({ plain: true }), created);
      })
      .catch(err => {
        console.log(err);
      });
  });
}

if (productsData.length) {
  productsData.forEach(product => {
    importProducts(product)
      .spread((item, created) => {
        console.log(item.get({ plain: true }), created);
      })
      .catch(err => {
        console.log(err);
      });
  });
}

module.exports = app;
