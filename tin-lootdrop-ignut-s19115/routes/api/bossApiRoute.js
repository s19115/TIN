const express = require('express');
const router = express.Router();

const bossApiController = require('../../api/bossAPI');

router.get('/', bossApiController.getBosses);
router.get('/:boss_id', bossApiController.getBossById);
router.post('/', bossApiController.createBoss);
router.put('/:boss_id', bossApiController.updateBoss);
router.delete('/:boss_id', bossApiController.deleteBoss);

module.exports = router