const four = require('../model/carModel');



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
    return four
    .find({},{__v:0})
    .sort({[sort]: direction})
    .skip((page-1)*pageSize)
    .limit(pageSize);
};

const getCount = () =>{
    return four.count();
};

const getById =(id) =>{
    return four.findOne({_id:id},{__v: 0});
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
    getCount,
    getById,
    create,
    remove,
    update,
    patch
};