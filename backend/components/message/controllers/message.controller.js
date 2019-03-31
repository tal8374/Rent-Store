const messageService = require('../services/message.service');
const async = require('async');

function list(req, res) {
    async.waterfall([
        function (callback) {
            callback(null, {req: req});
        },
        messageService.list,
    ], function (err, payload) {
        if (err) {
            res.send({backendErrorData:{mongoDBError: err}})
        } else {
            res.send({responseData: payload.messages});
        }
    });
}

function create(req, res) {
    async.waterfall([
        function (callback) {
            callback(null, {req: req});
        },
        messageService.create,
    ], function (err, payload) {
        if (err) {
            res.send({backendErrorData:{mongoDBError: err}})
        } else {
            res.send({responseData: payload.newMessage})
        }
    });
}

async function remove(req, res) {
    async.waterfall([
        function (callback) {
            callback(null, {req: req});
        },
        messageService.remove,
    ], function (err, payload) {

        if (err) {
            res.send({backendErrorData:{mongoDBError: err}})
        } else {
            res.send({responseData: payload.removedMessage});
        }
    });
}

function update(req, res) {
    async.waterfall([
        function (callback) {
            callback(null, {req: req});
        },
        messageService.update,
    ], function (err, payload) {
        if (err) {
            res.send({backendErrorData:{mongoDBError: err}})
        } else {
            res.send({responseData: payload.updatedMessage});
        }
    });
}

module.exports = {
    list,

    remove,

    update,

    create
};
