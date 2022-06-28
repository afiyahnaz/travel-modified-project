const express = require('express');
const flightCtrl = require('../controllers/flightCtrl');
const router = express.Router();


router.get('/',flightCtrl.get);
router.get('/page/:page/size/:size',flightCtrl.get);

router.get('/:id',flightCtrl.getById);

router.post('/',flightCtrl.post);
router.delete('/:id',flightCtrl.remove);
router.put('/:id',flightCtrl.update);
router.patch('/:id',flightCtrl.patch);

module.exports = router;