const reviewRepositories = require('../repositories/reviewRepositories');
const logger = require('../utils/appLogger');

const post =async  (req, res) => {
    try{
      const data = req.body;
      data.createdAt = new Date();
      await  reviewRepositories.create(data);

         res.status(201);
         res.send();
    } catch  (error) {
          logger.error(err);
          res.status(500);
          res.send('Internal Server Error');
    }
};


module.exports = { post };