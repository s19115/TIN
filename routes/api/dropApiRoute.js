const express = require('express');
const router = express.Router();

const dropApiController = require('../../api/dropAPI');

router.get('/', dropApiController.getDrops);
router.get('/:drop_id', dropApiController.getDropById);
router.post('/', dropApiController.createDrop);
router.put('/:drop_id', dropApiController.updateDrop);
router.delete('/:drop_id', dropApiController.deleteDrop);

module.exports = router