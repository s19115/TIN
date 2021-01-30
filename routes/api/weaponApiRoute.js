const express = require('express');
const router = express.Router();

const weaponApiController = require('../../api/weaponAPI');

router.get('/', weaponApiController.getWeapons);
router.get('/:weapon_id', weaponApiController.getWeaponById);
router.post('/', weaponApiController.createWeapon);
router.put('/:weapon_id', weaponApiController.updateWeapon);
router.delete('/:weapon_id', weaponApiController.deleteWeapon);

module.exports = router