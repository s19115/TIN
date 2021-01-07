const express = require('express');
const router = express.Router();

const dropController = require('../controllers/dropController');

router.get('/', dropController.showDropList);
router.get('/add', dropController.showDropForm);
router.get('/details/:dropId', dropController.showDropDetails);
router.get('/edit/:dropId', dropController.showDropEdit);
router.get('/delete/:dropId',dropController.deleteDrop)
router.post('/edit/:dropId', dropController.updateDrop);
router.post('/add', dropController.createDrop);


module.exports = router;