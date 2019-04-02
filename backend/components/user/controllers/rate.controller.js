const rateService = require('../services/rate.service');
const async = require('async');

function create(req, res) {
    async.waterfall([
        function (callback) {
            callback(null, {req: req});
        },
        rateService.create
    ], function (err, payload) {
        if (err) {
            res.send({backendErrorData:{mongoDBError: err}})
        }
        res.send({responseData: payload.newRate});
    });
}

function remove(req, res) {
    async.waterfall([
        function (callback) {
            callback(null, {req: req});
        },
        rateService.remove
    ], function (err, payload) {
        if (err) {
            res.send({backendErrorData:{mongoDBError: err}})
        }
        res.send({responseData: payload.user});
    });
}

function update(req, res) {
    async.waterfall([
        function (callback) {
            callback(null, {req: req});
        },
        rateService.update
    ], function (err, payload) {
        if (err) {
            res.send({backendErrorData:{mongoDBError: err}})
        }
        res.send({responseData: payload.updatedRate});
    });
}

module.exports = {
    create,

    remove,

    update
};
