const express = require('express');
const router = express.Router();

const bossController = require('../controllers/DataControllers/bossController');
const authUtils = require("../util/authUtils");

router.get('/', bossController.showBossList);
router.get('/add', authUtils.permitLoggedUser, bossController.showBossForm);
router.get('/details/:bossId', bossController.showBossDetails);
router.get('/edit/:bossId', authUtils.permitLoggedUser, bossController.showBossEdit);
router.get('/delete/:bossId', authUtils.permitLoggedUser, bossController.deleteBoss)
router.post('/edit/:bossId', authUtils.permitLoggedUser, bossController.updateBoss);
router.post('/add', authUtils.permitLoggedUser, bossController.createBoss);

module.exports = router;