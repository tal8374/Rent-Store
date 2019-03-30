const bicycleRentService = require('../services/rent.service');
const async = require('async');

function create(req, res) {
    async.waterfall([
        function (callback) {
            callback(null, {req: req});
        },
        bicycleRentService.create
    ], function (err, payload) {
        if (err) {
            res.send({backendErrorData: {mongoDBError: err}})
        } else {
            res.send({responseData: payload.newRent});
        }
    });
}

function get(req, res) {
    async.waterfall([
        function (callback) {
            callback(null, {req: req});
        },
        bicycleRentService.get
    ], function (err, payload) {
        if (err) {
            res.send({backendErrorData: {mongoDBError: err}})
        } else {
            res.send({responseData: payload.bicycleRent});
        }
    });
}

function remove(req, res) {
    async.waterfall([
        function (callback) {
            callback(null, {req: req});
        },
        bicycleRentService.remove
    ], function (err, payload) {
        if (err) {
            res.send({backendErrorData: {mongoDBError: err}})
        }
        res.send({responseData: payload.removedRent});
    });
}

function update(req, res) {
    async.waterfall([
        function (callback) {
            callback(null, {req: req});
        },
        bicycleRentService.update
    ], function (err, payload) {
        if (err) {
            res.send({backendErrorData: {mongoDBError: err}})
        } else {
            res.send({responseData: payload.updatedRent});
        }
    });
}

module.exports = {
    create,

    remove,

    get,

    update,
};
