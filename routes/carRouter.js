const express = require('express');
const carCtrl = require('../controllers/carCtrl');
const router = express.Router();


router.get('/',carCtrl.get);
router.get('/:id',carCtrl.getById);
router.post('/',carCtrl.post);
router.delete('/:id',carCtrl.remove);
router.put('/:id',carCtrl.update);
router.patch('/:id',carCtrl.patch);


module.exports = router;