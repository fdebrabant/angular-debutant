const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const {notFoundExceptionHandler, unhandledExceptionHandler} = require('./middleware/error');

const app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
require('./api')(app);
app.use(notFoundExceptionHandler);
app.use(unhandledExceptionHandler);

app.listen(8081);
console.log('Server started on http://localhost:8081');
