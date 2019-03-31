const express = require('express');
const router = express.Router();

const appHelper = require('../../../util/app');
const messageController = require('../controllers/message.controller');

router
    .get(appHelper.createPath('message', 'message', false), messageController.list)
    .post(appHelper.createPath('message', 'message', false), messageController.create);

router
    .put(appHelper.createPath('message', 'message', true), messageController.update)
    .delete(appHelper.createPath('message', 'message', true), messageController.remove);

module.exports = router;
