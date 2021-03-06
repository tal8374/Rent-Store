const Branch = require("../models/branch.model");
const async = require('async');

function list(payload, callback) {
    const requestQuery = payload.req.query;

    if ('carId' in requestQuery) {
        requestQuery['cars'] = {"$in": [requestQuery['carId']]};
    }

    Branch.BranchModel
        .find(requestQuery)
        .exec()
        .then((branches) => {
            payload.branches = branches;
            callback(null, payload);
        })
        .catch((err) => {
            callback(err);
        });
}

function get(payload, callback) {
    const query = {_id: payload.req.params.branchId};
    const requestQuery = payload.req.query;

    Branch.BranchModel
        .findOne(query)
        .populate('cars')
        .populate('rates')
        .populate('views')
        .exec()
        .then((branch) => {
            payload.branch = branch;
            callback(null, payload);
        })
        .catch((err) => {
            callback(err);
        });
}


function create(payload, callback) {
    const newBranch = new Branch.BranchModel(payload.req.body);

    newBranch
        .save()
        .then((newBranch) => {
            payload.newBranch = newBranch;
            callback(null, payload);
        })
        .catch((err) => {
            callback(err);
        });
}

function remove(payload, callback) {
    Branch.BranchModel
        .findByIdAndRemove({_id: payload.req.params.branchId})
        .exec()
        .then((removedBranch) => {
            payload.removedBranch = removedBranch;
            callback(null, payload);
        })
        .catch((err) => {
            callback(err);
        });
}

function update(payload, callback) {
    Branch.BranchModel
        .findByIdAndUpdate({_id: payload.req.params.branchId}, payload.req.body)
        .exec()
        .then((updatedBranch) => {
            payload.updatedBranch = updatedBranch;
            callback(null, payload);
        })
        .catch((err) => {
            callback(err);
        });
}

module.exports = {
    list,

    get,

    create,

    remove,

    update
};
