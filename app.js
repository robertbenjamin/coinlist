const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const compression = require('compression');
const morgan = require('morgan');
const routes = require('./api/routes');

const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use(compression());

if (process.env.NODE_ENV !== 'test') {
  app.use(morgan('dev'));
}

routes(app);

module.exports = app;
