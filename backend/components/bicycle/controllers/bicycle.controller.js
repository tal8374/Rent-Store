const bicycleService = require('../services/bicycle.service');
const async = require('async');

function list(req, res) {
    async.waterfall([
        function (callback) {
            callback(null, {req: req});
        },
        bicycleService.list
    ], function (err, payload) {
        if (err) {
            res.send({backendErrorData:{mongoDBError: err}})
        }
        res.send({responseData: payload.bicycles});
    });
}

function get(req, res) {
    async.waterfall([
        function (callback) {
            callback(null, {req: req});
        },
        bicycleService.get
    ], function (err, payload) {
        if (err) {
            res.send({backendErrorData:{mongoDBError: err}})
        }
        res.send({responseData: payload.bicycle});
    });
}

function create(req, res) {
    async.waterfall([
        function (callback) {
            callback(null, {req: req});
        },
        bicycleService.create
    ], function (err, payload) {
        if (err) {
            res.send({backendErrorData:{mongoDBError: err}})
        }
        res.send({responseData: payload.newBicycle});
    });
}

function remove(req, res) {
    async.waterfall([
        function (callback) {
            callback(null, {req: req});
        },
        bicycleService.remove
    ], function (err, payload) {
        if (err) {
            res.send({backendErrorData:{mongoDBError: err}})
        }
        res.send({responseData: payload.removedBicycle});
    });
}

function update(req, res) {
    async.waterfall([
        function (callback) {
            callback(null, {req: req});
        },
        bicycleService.update
    ], function (err, payload) {
        if (err) {
            res.send({backendErrorData:{mongoDBError: err}})
        }
        res.send({responseData: payload.updatedBicycle});
    });
}

module.exports = {
    list,

    get,

    create,

    remove,

    update
};
