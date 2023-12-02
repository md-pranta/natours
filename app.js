const express = require('express');
const morgan = require('morgan');

const tourRouter = require('./routes/tourRoutes');
const userRouter = require('./routes/userRoutes');

const app = express();

//first middleware
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}
app.use(express.json());
app.use((req, res, next) => {
  // console.log('from middleware');
  req.requestTime = new Date().toISOString();
  next();
});

//all routes handeler

app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/users', userRouter);
//our server start
module.exports = app;
