const express = require('express');
const router = express.Router();

const weaponApiController = require('../../api/weaponAPI');

router.get('/', weaponApiController.getweapones);
router.get('/:weapon_id', weaponApiController.getweaponById);
router.post('/', weaponApiController.createweapon);
router.put('/:weapon_id', weaponApiController.updateweapon);
router.delete('/:weapon_id', weaponApiController.deleteweapon);

module.exports = router