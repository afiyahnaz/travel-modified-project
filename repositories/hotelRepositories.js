const hotel = require('../model/hotelModel');



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
    return hotel
    .find({},{__v:0})
    .sort({[sort]: direction})
    .skip((page-1)*pageSize)
    .limit(pageSize);
};
const getCount = () =>{
    return  hotel.count();
};

const getById =(id) =>{
    return hotel.findOne({_id:id},{_v: 0});
};

const create = (body) =>{
    const home = new hotel(body);
    return home.save();
};
const remove = (id) =>{
    return hotel.deleteOne({_id:id});
};

const update = (id,body) =>{
    return hotel.findOneAndUpdate({_id:id},{

        name:body.name,
        location:body.location,
        rooms:body.rooms,
        price:body.price,
        checkIN:body.checkIN,
        checkout:body.checkout,
 });
};

const patch = (id,body) =>{
    return hotel.findOneAndUpdate({_id:id},body);
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