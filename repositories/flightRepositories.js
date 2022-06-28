const flight = require('../model/flightModel');



const get = (options) =>{


    const {page, pageSize, sort, dir} =options;
    
    let direction;
    
    switch(dir.toLowerCase()){
        case 'asc' :
            direction = 1;
            break;
        case 'desc' :
            direction = -1;
            break;
        default:
            direction = 1;
            break;

    };

    return flight
    .find({},{__v:0})
    .sort({[sort]: direction})
    .skip((page-1)*pageSize)
    .limit(pageSize);
};

const getCount = () =>{
    return flight.count();
}

const getById =(id) =>{
    return flight.findOne({_id:id},{__v: 0});
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
    getCount,
    getById,
    create,
    remove,
    update,
    patch
}