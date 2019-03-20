const loginService = require('../services/login.service');
const async = require('async');

function login(req, res) {
    async.waterfall([
        function (callback) {
            callback(null, {req: req});
        },
        loginService.login,
    ], function (err, payload) {
        if (err) {
            res.send({backendErrorData:{mongoDBError: err}})
        }
        res.send({responseData: payload.user})
    });
}

module.exports = {
    login,
};
