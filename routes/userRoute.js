const express = require('express');
const router = express.Router();

const userController = require('../controllers/DataControllers/userController');
const authUtils = require("../util/authUtils");

router.get('/',authUtils.permitPrivilegedUser, userController.showUserList);
router.get('/add', userController.showUserForm);
router.get('/details/:userId',authUtils.permitOwnerUser, userController.showUserDetails);
router.get('/edit/:userId',authUtils.permitOwnerUser, userController.showUserEdit);
router.get('/delete/:userId',authUtils.permitPrivilegedUser,userController.deleteUser)
router.post('/edit/:userId',authUtils.permitOwnerUser, userController.updateUser);
router.post('/add', userController.createUser);

module.exports = router;