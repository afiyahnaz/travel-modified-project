const flight = require('../model/flightModel');



const get = () =>{
    return flight.find({},{_v:0});
};

const getById =(id) =>{
    return flight.findOne({_id:id},{_v: 0});
};

const create = (body) =>{
    const fly = new flight(body);
    return fly.save();
};

const remove = (id) =>{
    return flight.deleteOne({_id:id});
};

const update = (id,body) =>{
       return flight.findOneAndUpdate({_id:id},{

        rank:body.rank,
        location:body.location,
        TakeOff:body.TakeOff,
        airlines:body.airlines,
        flightNumber:body. flightNumber,
    });
};

const patch = (id,body) =>{
    return flight.findOneAndUpdate({_id:id},body);
};




module.exports = {
    get,
    getById,
    create,
    remove,
    update,
    patch
}