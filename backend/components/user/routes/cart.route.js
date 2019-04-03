const express = require('express');
const router = express.Router();

const appHelper = require('../../../util/app');
const cartController = require('../controllers/cart.controller');

router
    .get(appHelper.createPath('user', 'cart', false), cartController.get)
    .post(appHelper.createPath('user', 'cart', false), cartController.create)
    .delete(appHelper.createPath('user', 'cart', false), cartController.remove);

module.exports = router;
