const  mongoose = require('mongoose');
const Schema = mongoose.Schema;



const hotelSchema = new Schema({

    name:String,
    location:String,
    carNumber:String,
    price:Number,
   persons:String,

});

module.exports = mongoose.model('car', hotelSchema);