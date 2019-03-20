const Branch = require("../models/branch.model");
const async = require('async');
const branchService = require('./branch.service');
const _ = require('lodash');

function createSearchBranchQuery(payload, callback) {
    payload.query = {_id: payload.req.params.branchId};

    callback(null, payload);
}

function addLocationToBranch(payload, callback) {
    const branch = payload.branch;

    branch.location = payload.req.body;

    branch
        .save()
        .then((newLocation) => {
            payload.newLocation = newLocation;

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
        createSearchBranchQuery,
        branchService.get,
        addLocationToBranch
    ], function (err, result) {
        if (err) {
            callback(err)
        }

        callback(null, payload);
    });
}

function remove(payload, callback) {
    Branch.BranchModel
        .update(
            {_id: payload.req.params.branchId},
            {$unset: {location: 1}}
        ).then((removedLocation) => {
        payload.removedLocation = removedLocation;

        callback(null, payload);
    })
        .catch((err) => {
            callback(err);
        });
}

function updateLocation(payload, callback) {
    let branch = payload.branch;

    _.merge(branch.location, payload.req.body);

    branch.save(function (err, updatedLocation) {
        if (err) {
            callback(err)
        }

        payload.updatedLocation = updatedLocation;
        callback(null, payload);
    });
}

function update(payload, callback) {
    async.waterfall([
        function (callback) {
            callback(null, payload);
        },
        createSearchBranchQuery,
        branchService.get,
        updateLocation
    ], function (err, result) {
        if (err) {
            callback(err)
        } else {
            callback(null, payload);
        }
    });
}

function get(payload, callback) {
    Branch.BranchModel
        .findOne({_id: payload.req.params.branchId}
        ).then((branch) => {
        payload.location = branch.location;

        callback(null, payload);
    })
        .catch((err) => {
            callback(err);
        });
}


module.exports = {
    create,

    remove,

    update,

    get,
};
