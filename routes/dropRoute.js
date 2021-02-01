const express = require('express');
const router = express.Router();

const dropController = require('../controllers/DataControllers/dropController');
const authUtils = require("../util/authUtils");

router.get('/', dropController.showDropList);
router.get('/add',authUtils.permitLoggedUser, dropController.showDropForm);
router.get('/details/:dropId', dropController.showDropDetails);
router.get('/edit/:dropId', authUtils.permitLoggedUser,dropController.showDropEdit);
router.get('/delete/:dropId',authUtils.permitLoggedUser,dropController.deleteDrop)
router.post('/edit/:dropId',authUtils.permitLoggedUser, dropController.updateDrop);
router.post('/add',authUtils.permitLoggedUser, dropController.createDrop);


module.exports = router;