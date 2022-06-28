const  mongoose = require('mongoose');
const Schema = mongoose.Schema;



const hotelSchema = new Schema({

    name:{type:String, required: true},
    location:{type:String, required: true},
    rooms:{type:Number, required: true},
    price:{type:Number, required: true},
    checkIN:{type:String, required: true},
    checkout:{type:String, required: true},
    discount:{type:Number, default: 0},
    createdAt:{type: Date},
    updatedAt:{type:Date, default: Date.now}

});

module.exports = mongoose.model('home', hotelSchema);