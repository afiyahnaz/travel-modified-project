

////registring downloaded files
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const fs = require('fs');
const path = require('path');

//registering routers....................
const homeRouter = require('./routes/homeRouter');
const flightRouter = require('./routes/flightRouter');
const hotelRouter = require('./routes/hotelRouter');
const carRouter = require('./routes/carRouter');
const config = require('./config/index');
const logger = require('./utils/appLogger');


const app = express();
app.use(bodyParser.json());

const dir = path.join(__dirname, 'logs');
if(!fs.existsSync(dir)) {

  fs.mkdirSync(dir);
}

const filePath = path.join(__dirname, 'logs', 'request.log');
const stream = fs.createWriteStream(filePath, {flags: 'a'});


app.use(morgan ('combined', {stream:stream}));  //login on request
app.use(morgan('combined')); //login on console




   
   const PORT = process.env.PORT || 3000;

app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`);
});

logger.info('App has started running');

mongoose.connect(config.dbConStr, (err,result)=>{
  if(!err)  console.log('connected to db');
  else      console.log(err);
});







app.use('/',homeRouter);
app.use('/api/flight',flightRouter);
app.use('/api/hotel',hotelRouter);
app.use('/api/car',carRouter);
