hotelRepositories = require('../repositories/hotelRepositories');


const get = async(req,res) =>{
    try{
        const home = await hotelRepositories.get();
        res.status(200);
        res.json(home);
    }catch(err){
        res.status(500);
        res.send('Internal error');
    }
};

//getById http://localhost/api/flight/:id
 
const getById = async (req, res) =>{
    const id = req.params.id;
    const home = await hotelRepositories.getById(id);
    res.status(200);
    res.json(home);
};

//POST http://localhost/api/flight
const post = async(req,res) =>{
    try{
        await hotelRepositories.create(req.body);
        res.status(201);
        res.send();
    }catch(err){
        if(err && err.message.indexOf('validation failed') >-1){
            res.status(500);
            res.send('Internal server Error');
        } else{
            res.status(500);
            res.send(err);
        }

    } 
        
    };
    //DELETE http://localhost:3000/api/flight/:id

       const remove = async (req,res) =>{
        const  id = req.params.id;
        await hotelRepositories.remove(id);
        res.status(204);
        res.send();
    };

    //PUT http://localhost/api/flight:id {body}

    const update = async (req,res) =>{
    const {id} = req.params;
    const {body} = req;
    await hotelRepositories.update(id,body);
    res.status(204);
    res.send();
};

//PATCH http://localhost:3000/api/flight:id {body}

const patch = async (req,res) =>{
    const {id} = req.params;
    const {body} = req;
    await  hotelRepositories.patch(id,body);
    res.status(204);
    res.send();
};

      module.exports = {
    get,
    getById,
    post,
    remove,
    update,
    patch
    };