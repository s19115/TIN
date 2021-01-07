const express = require('express');
const router = express.Router();

const weaponController = require('../controllers/weaponController');

router.get('/', weaponController.showWeaponList);
router.get('/add', weaponController.showWeaponForm);
router.get('/details/:weaponId', weaponController.showWeaponDetails);
router.get('/edit/:weaponId', weaponController.showWeaponEdit);
router.get('/delete/:weaponId',weaponController.deleteWeapon);
router.post('/edit/:weaponId', weaponController.updateWeapon);
router.post('/add', weaponController.updateWeapon);

module.exports = router;