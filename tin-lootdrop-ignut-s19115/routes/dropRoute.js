const express = require('express');
const router = express.Router();

const dropController = require('../controllers/dropController');

router.get('/', dropController.showdropList);
router.get('/add', dropController.showdropForm);
router.get('/details/:dropId', dropController.showdropDetails);

module.exports = router;