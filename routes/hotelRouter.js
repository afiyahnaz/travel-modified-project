const express = require('express');
const hotelCtrl = require('../controllers/hotelCtrl'); 
const router = express.Router();


router.get('/',hotelCtrl.get);
router.get('/page/:page/size/:size',hotelCtrl.get);
router.get('/:id',hotelCtrl.getById);
router.post('/',hotelCtrl.post);
router.delete('/:id',hotelCtrl.remove);
router.put('/:id',hotelCtrl.update);
router.patch('/:id',hotelCtrl.patch);


module.exports = router;