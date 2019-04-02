const viewService = require('../services/view.service');
const async = require('async');

function create(req, res) {
    async.waterfall([
        function (callback) {
            callback(null, {req: req});
        },
        viewService.create
    ], function (err, payload) {
        if (err) {
            res.send({backendErrorData:{mongoDBError: err}})
        }
        res.send({responseData: payload.newView});
    });
}

function remove(req, res) {
    async.waterfall([
        function (callback) {
            callback(null, {req: req});
        },
        viewService.remove
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
        viewService.update
    ], function (err, payload) {
        if (err) {
            res.send({backendErrorData:{mongoDBError: err}})
        }
        res.send({responseData: payload.updatedView});
    });
}

module.exports = {
    create,

    remove,

    update
};
