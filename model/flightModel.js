const  mongoose = require('mongoose');
const Schema = mongoose.Schema;



const flightSchema = new Schema({

    
    rank:  {type:String, required:[true, 'rank is Manditory'], Minlength:[3, 'Min.3 characters'], Maxlength:[10, 'Max.10 characters']},
    location:{type: String, required : [true, 'Loctaion is required']},
    takeOff:{ type: String, required : [true, 'Takeoff required']},
    airlines:{type: String, required : [true, 'airlines is must']},
    flightNumber:{type:String,required:[true, 'manditory']},
    discount:{type:Number, default: 0},
    createdAt:{ type: Date},
    updatedAt:{ type:Date, default: Date.now}

});



module.exports = mongoose.model('Flight',flightSchema);