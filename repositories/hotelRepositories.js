const hotel = require('../model/hotelModel');



const get = () =>{
    return hotel.find({},{_v:0});
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
    getById,
    create,
    remove,
    update,
    patch
}