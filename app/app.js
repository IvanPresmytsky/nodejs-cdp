const express = require('express');
const mongoose = require('mongoose');

const citiesData = require('./mock/cities.json');
const productsData = require('./mock/products.json');
const routes = require('./routes/appRoutes');
const usersData = require('./mock/users.json');
const { config } = require('./config');
const { cookieParser, qsParser } = require('./middlewares');
const { Cities, Products, Users } = require('./models');

const app = express();
const bodyParser = express.json();

mongoose.Promise = global.Promise;
mongoose.connect(config.db)
  .then(() => console.log(`DB ${config.dbName} successfully connected to MongoDB on ${config.url}`))
  .catch(err => console.log(`There was a db connection error\n ${err}`));

Cities.collection.insertMany(citiesData, (err, data) => {
  console.log('cities data is inserted sucessfully');
  if (err) return;
});

Products.collection.insertMany(productsData, (err, data) => {
  console.log('products data is inserted sucessfully');
  if (err) return;
});

Users.collection.insertMany(usersData, (err, data) => {
  console.log('users data is inserted sucessfully');
  if (err) return;
});

app.use(bodyParser);

app.use(cookieParser());

app.use(qsParser());

routes(app);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

module.exports = app;
