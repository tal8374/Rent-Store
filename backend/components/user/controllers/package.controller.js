const packageService = require('../services/package.service');
const async = require('async');

function create(req, res) {
    async.waterfall([
        function (callback) {
            callback(null, {req: req});
        },
        packageService.create,
    ], function (err, payload) {
        if (err) {
            res.send({backendErrorData:{mongoDBError: err}})
        } else {
            res.send({responseData: payload.updatedUser})
        }
    });
}

async function remove(req, res) {
    async.waterfall([
        function (callback) {
            callback(null, {req: req});
        },
        packageService.remove,
    ], function (err, payload) {

        if (err) {
            res.send({backendErrorData:{mongoDBError: err}})
        } else {
            res.send({responseData: payload.updatedUser});
        }
    });
}

module.exports = {
    remove,

    create
};
