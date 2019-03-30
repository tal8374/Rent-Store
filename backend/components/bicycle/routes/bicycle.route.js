const express = require('express');
const router = express.Router();

const appHelper = require('../../../util/app');
const bicycleController = require('../controllers/bicycle.controller');

router
    .get(appHelper.createPath('bicycle', 'bicycle', false), bicycleController.list)
    .post(appHelper.createPath('bicycle', 'bicycle', false), bicycleController.create);

router
    .get(appHelper.createPath('bicycle', 'bicycle', true), bicycleController.get)
    .put(appHelper.createPath('bicycle', 'bicycle', true), bicycleController.update)
    .delete(appHelper.createPath('bicycle', 'bicycle', true), bicycleController.remove);

module.exports = router;
