const express = require('express');
const router = express.Router();

const weaponController = require('../controllers/weaponController');

router.get('/', weaponController.showweaponList);
router.get('/add', weaponController.showweaponForm);
router.get('/details/:weaponId', weaponController.showweaponDetails);

module.exports = router;