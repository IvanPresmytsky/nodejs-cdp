const express = require('express');
const _ = require('lodash');
const { cookieParser, qsParser } = require('./middlewares');

const app = express();
const bodyParser = express.json();
const router = express.Router();
const data = {
  products: [
    {
      id: 'product1',
      reviews: [
        'review1',
        'review2',
      ]
    },
    {
      id: 'product2',
      reviews: [
        'review1',
        'review2',
        'review3',
      ]
    },
    {
      id: 'product3',
      reviews: [
        'review1',
      ]
    }
  ],
  users: [
    {
      id: 'user1',
      name: 'First User'
    },
    {
      id: 'user2',
      name: 'Second User'
    }
  ]
};

router.get('/api', (req, res) => {
  if (!data) {
    res.status(404)
      json({message: `api data not found`});
  }
  res.json(data);
});

router.get('/api/products', (req, res) => {
  const products = data.products;
  if (!products) {
    res.status(404)
      json({message: `products not found`});
  }
 
  res.json(products);
});

router.get('/api/products/:id', (req, res) => {
  const product = data.products && _.find(data.products, { id: req.params.id });
  if (!product) {
    res.status(404)
      json({message: `product with id ${req.params.id} not found`});
  }
   
  res.json(product);
});

router.get('/api/products/:id/reviews', (req, res) => {
  const product = data.products && _.find(data.products, { id: req.params.id });
  const reviews = product && product.reviews;

  if (!reviews) {
    res.status(404)
      json({message: `reviews for product with id ${req.params.id} not found`});
  }
     
  res.json(product);
});

router.post('/api/users', (req, res) => {
  const user = req.body;
  data.users && data.users.push(user);
  res.status(204).send();
});

router.get('/api/users', (req, res) => {
  const users = data.users;
  if (users) {
    res.status(404)
      json({message: `users not found`});
  }
   
  res.json(users);
});

router.get('/api/users/:id', (req, res) => {
  const user = data.users && _.find(data.users, { id: req.params.id });
  if (!user) {
    res.status(404)
      json({message: `user with id ${req.params.id} not found`});
  }

  res.json(user);
});

app.use(bodyParser);

app.use(cookieParser());

app.use(qsParser());

app.use('/', router);

module.exports = app;
