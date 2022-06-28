hotelRepositories = require('../repositories/hotelRepositories');
const logger = require('../utils/appLogger');


const getOptions = (req) => {
    const pageSize = +req.params.size || 10;
    const page = +req.params.page || 1;

    const search = req.query.search || '';
    let sort = req.query.sort;
    let dir = req.query.dir || '';


    if(!sort){
        sort = 'updatedAt';
    if(!dir){
        dir = 'DESC'
         }
    }

    return {
        page, 
        pageSize, 
        sort,
        dir,
        search
     };
    }

const get = async(req,res) =>{
    logger.info('Get Request made');
    try{
     
         const options =  getOptions(req);
        const data = await hotelRepositories.get(options);
        const totalRecords = await hotelRepositories.getCount();
        const totalPages = Math.ceil( totalRecords / options.pageSize);
        const response = {
            metadata:{
                totalRecords,
                totalPages,

            },
          
            data

        };
        logger.info({msg:'data successfully fetched',data: data});
        res.status(200);
        res.json(response);
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
        req.body.createdAt = new Date();
        await hotelRepositories.create(req.body);
        res.status(201);
        res.send();
    }catch(err){
        logger.error(err);
        if(err && err.message.indexOf('validation failed') >-1){
            res.status(400);
            res.send('err');
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