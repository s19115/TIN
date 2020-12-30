const express = require('express');
const router = express.Router();

const bossController = require('../controllers/bossController');

router.get('/', bossController.showBossList);
router.get('/add', bossController.showBossForm);
router.get('/details/:bossId', bossController.showBossDetails);

module.exports = router;