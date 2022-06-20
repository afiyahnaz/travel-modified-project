const four = require('../model/carModel');



const get = () =>{
    return four.find({},{_v:0});
};

const getById =(id) =>{
    return four.findOne({_id:id},{_v: 0});
};

const create = (body) =>{
    const top = new four(body);
    return top.save();
};

const remove = (id) =>{
    return four.deleteOne({_id:id});
};

const update = (id,body) =>{
    return four.findOneAndUpdate({_id:id},{
        name:body.name,
        location:body.location,
        carNumber:body.carNumber,
        price:body.price,
       persons:body.persons,
    
 });
};
const patch = (id,body) =>{
    return four.findOneAndUpdate({_id:id},body);
};



module.exports = {
    get,
    getById,
    create,
    remove,
    update,
    patch
};