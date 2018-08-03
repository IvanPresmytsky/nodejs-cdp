const express = require('express');
const mongoose = require('mongoose');
const SwaggerExpress = require('swagger-express-mw');

const citiesData = require('./mock/cities.json');
const productsData = require('./mock/products.json');
const routes = require('./routes/appRoutes');
const usersData = require('./mock/users.json');
const { importData } = require('./helpers');
const { config } = require('./config');
const { cookieParser, qsParser } = require('./middlewares');
const { Cities, Products, Users } = require('./models');

const app = express();
const bodyParser = express.json();

mongoose.Promise = global.Promise;
mongoose.connect(config.db)
  .then(() => console.log(`DB ${config.dbName} successfully connected to MongoDB on ${config.url}`))
  .catch(err => console.log(`There was a db connection error\n ${err}`));

importData(Cities, citiesData);
importData(Products, productsData);
importData(Users, usersData);

app.use(bodyParser);

app.use(cookieParser());

app.use(qsParser());

routes(app);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

module.exports = app;
