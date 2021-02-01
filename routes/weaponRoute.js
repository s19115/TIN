const express = require('express');
const router = express.Router();

const weaponController = require('../controllers/DataControllers/weaponController');
const authUtils = require("../util/authUtils");

router.get('/', weaponController.showWeaponList);
router.get('/add', authUtils.permitLoggedUser, weaponController.showWeaponForm);
router.get('/details/:weaponId', weaponController.showWeaponDetails);
router.get('/edit/:weaponId', authUtils.permitLoggedUser, weaponController.showWeaponEdit);
router.get('/delete/:weaponId', authUtils.permitLoggedUser, weaponController.deleteWeapon);
router.post('/edit/:weaponId', authUtils.permitLoggedUser, weaponController.updateWeapon);
router.post('/add', authUtils.permitLoggedUser, weaponController.createWeapon);

module.exports = router;