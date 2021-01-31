const express = require('express');
const router = express.Router();

const userController = require('../controllers/DataControllers/userController');

router.get('/', userController.showUserList);
router.get('/add', userController.showUserForm);
router.get('/details/:userId', userController.showUserDetails);
router.get('/edit/:userId', userController.showUserEdit);
router.get('/delete/:userId',userController.deleteUser)
router.post('/edit/:userId', userController.updateUser);
router.post('/add', userController.createUser);

module.exports = router;