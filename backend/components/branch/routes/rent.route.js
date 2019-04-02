const express = require('express');
const router = express.Router();

const appHelper = require('../../../util/app');
const rentController = require('../controllers/rent.controller');

router
    .post(appHelper.createPath('user', 'rent', false), rentController.create)
    .delete(appHelper.createPath('user', 'rent', false), rentController.remove);

module.exports = router;
