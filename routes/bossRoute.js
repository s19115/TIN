const express = require('express');
const router = express.Router();

const bossController = require('../controllers/DataControllers/bossController');

router.get('/', bossController.showBossList);
router.get('/add', bossController.showBossForm);
router.get('/details/:bossId', bossController.showBossDetails);
router.get('/edit/:bossId', bossController.showBossEdit);
router.get('/delete/:bossId',bossController.deleteBoss)
router.post('/edit/:bossId', bossController.updateBoss);
router.post('/add', bossController.createBoss);

module.exports = router;