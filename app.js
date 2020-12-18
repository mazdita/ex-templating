const path = require('path');
const express = require('express');
const hbs = require('hbs');
const logger = require('morgan')

// Create app server
const app = express();

// Configure hbs as view engine
app.set('view', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.info(`App listening at port ${port}`);
})
