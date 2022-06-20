

////registring downloaded files
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const config = require('./config/index');


const app = express();
app.use(bodyParser.json());


const PORT=3000;
app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`);
});

mongoose.connect(config.dbConStr, (err,result)=>{
  if(!err)  console.log('connected to db');
  else      console.log(err);
});


//registering routers....................
const homeRouter = require('./routes/homeRouter');
const flightRouter = require('./routes/flightRouter');
const hotelRouter = require('./routes/hotelRouter');
const carRouter = require('./routes/carRouter');




app.use('/',homeRouter);
app.use('/api/flight',flightRouter);
app.use('/api/hotel',hotelRouter);
app.use('/api/car',carRouter);