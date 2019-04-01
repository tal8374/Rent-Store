const express = require('express');
const router = express.Router();

const appHelper = require('../../../util/app');
const tradeController = require('../controllers/trade.controller');

router
    .get(appHelper.createPath('trade', 'trade', false), tradeController.list)
    .post(appHelper.createPath('trade', 'trade', false), tradeController.create);

router
    .get(appHelper.createPath('trade', 'trade', true), tradeController.get)
    .put(appHelper.createPath('trade', 'trade', true), tradeController.update)
    .delete(appHelper.createPath('trade', 'trade', true), tradeController.remove);

module.exports = router;
