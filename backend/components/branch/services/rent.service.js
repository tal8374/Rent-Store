const Branch = require("../models/branch.model");
const async = require('async');

function getBranch(payload, callback) {
    Branch.BranchModel
        .findOne({_id: payload.req.params.branchId})
        .exec()
        .then((branch) => {
            payload.branch = branch;
            callback(null, payload);
        })
        .catch((err) => {
            callback(err);
        });
}

function addToRent(payload, callback) {
    const branch = payload.branch;
    const body = payload.req.body;

    for (let property in body) {
        if (body.hasOwnProperty(property)) {
            branch[property].push(body[property])
        }
    }

    branch
        .save()
        .then((updatedBranch) => {
            payload.updatedBranch = updatedBranch;
            callback(null, payload);
        })
        .catch((err) => {
            callback(err);
        });
}

function create(payload, callback) {
    async.waterfall([
        function (callback) {
            callback(null, payload);
        },
        getBranch,
        addToRent
    ], function (err, payload) {
        if (err) {
            callback(err);
        } else {
            callback(null, payload);
        }
    });
}

function removeFromPackage(payload, callback) {
    const branch = payload.branch;
    const query = payload.req.query;

    for (let property in query) {
        if (query.hasOwnProperty(property)) {
            let id = query[property];
            const index = branch[property].indexOf(id);

            branch[property].splice(index, 1);
        }
    }

    branch
        .save()
        .then((updatedBranch) => {
            payload.updatedBranch = updatedBranch;
            callback(null, payload);
        })
        .catch((err) => {
            callback(err);
        });
}

function remove(payload, callback) {
    async.waterfall([
        function (callback) {
            callback(null, payload);
        },
        getBranch,
        removeFromPackage
    ], function (err, payload) {
        if (err) {
            callback(err);
        } else {
            callback(null, payload);
        }
    });
}


module.exports = {
    remove,

    create
};
