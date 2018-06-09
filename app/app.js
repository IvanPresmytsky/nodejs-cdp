const express = require('express');
const { cookieParser, qsParser } = require('./middlewares');

const app = express();
const bodyParser = express.json();
const router = express.Router();

router.get('/api', (req, res) => {
  res.json({ ok: true });
});

app.use(bodyParser);

app.use(cookieParser());

app.use(qsParser());

app.use('/', router);

module.exports = app;
