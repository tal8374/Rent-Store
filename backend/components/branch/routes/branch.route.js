const express = require('express');
const router = express.Router();

const appHelper = require('../../../util/app');
const branchController = require('../controllers/branch.controller');

router
    .get(appHelper.createPath('branch', 'branch', false), branchController.list)
    .post(appHelper.createPath('branch', 'branch', false), branchController.create);

router
    .get(appHelper.createPath('branch', 'branch', true), branchController.get)
    .put(appHelper.createPath('branch', 'branch', true), branchController.update)
    .delete(appHelper.createPath('branch', 'branch', true), branchController.remove);

module.exports = router;
