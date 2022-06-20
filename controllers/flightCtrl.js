flightRepositories = require('../repositories/flightRepositories');


const get = async(req,res) =>{
    try{
        const fly = await flightRepositories.get();
        res.status(200);
        res.json(fly);
    }catch(err){
        res.status(500);
        res.send('Internal error');
    }
};

//getById http://localhost/api/flight/:id
 
const getById = async (req, res) =>{
    const id = req.params.id;
    const fly = await  flightRepositories.getById(id);
    res.status(200);
    res.json(fly);
};


//POST http://localhost/api/flight
const post = async(req,res) =>{
    try{
        await flightRepositories.create(req.body);
        res.status(201);
        res.send();
    }catch(err){
        if(err && err.message.indexOf('validation failed') >-1){
            res.status(500);
            res.send('Internal Server error');  
        } else{
            res.status(500);
            res.send(err);
        }
        
    }
};
//DELETE http://localhost:3000/api/flight/:id

const remove = async (req,res) =>{
    const  id = req.params.id;
    await flightRepositories.remove(id);
    res.status(204);
    res.send();
};
//PUT http://localhost/api/flight:id {body}

const update = async (req,res) =>{
    const {id} = req.params;
    const {body} = req;
    await flightRepositories.update(id,body);
    res.status(204);
    res.send();
};

//PATCH http://localhost:3000/api/flight:id {body}

const patch = async (req,res) =>{
    const {id} = req.params;
    const {body} = req;
    await flightRepositories.patch(id,body);
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