const express = require('express');
const router = express.Router();

const dropApiController = require('../../api/dropAPI');

router.get('/', dropApiController.getdropes);
router.get('/:drop_id', dropApiController.getdropById);
router.post('/', dropApiController.createdrop);
router.put('/:drop_id', dropApiController.updatedrop);
router.delete('/:drop_id', dropApiController.deletedrop);

module.exports = router