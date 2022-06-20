const  mongoose = require('mongoose');
const Schema = mongoose.Schema;



const hotelSchema = new Schema({

    name:String,
    location:String,
    rooms:Number,
    price:Number,
    checkIN:String,
    checkout:String,


});

module.exports = mongoose.model('home', hotelSchema);