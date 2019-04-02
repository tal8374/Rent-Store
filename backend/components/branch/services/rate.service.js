const Branch = require("../models/branch.model");
const Rate = require("../../rate/models/rate.model");
const async = require('async');

function createRate(payload, callback) {
    const newRate = new Rate.RateModel(payload.req.body);

    newRate
        .save()
        .then((newRate) => {
            payload.newRate = newRate;
            callback(null, payload);
        })
        .catch((err) => {
            callback(err);
        });
}


function addToBranchRate(payload, callback) {
    Branch.BranchModel.findOneAndUpdate(
        {_id: payload.req.params.branchId},
        {$push: {rates: payload.newRate._id}},
    )
        .then((branch) => {
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
        createRate,
        addToBranchRate
    ], function (err, result) {
        if (err) {
            callback(err)
        }

        callback(null, payload);
    });
}

function removeFromBranch(payload, callback) {
    Branch.BranchModel
        .findByIdAndUpdate(
            {"_id": payload.req.params.branchId},
            {"$pull": {"rates": payload.req.params.rateId}},
            function (err, branch) {
                if (err) {
                    callback(err);
                } else {
                    payload.branch = branch;
                    callback(null, payload);
                }
            }
        )
}

function removeRate(payload, callback) {
    Rate.RateModel
        .findByIdAndRemove(
            {"_id": payload.req.params.rateId},
            function (err, branch) {
                if (err) {
                    callback(err);
                } else {
                    payload.branch = branch;
                    callback(null, payload);
                }
            }
        )
}

function remove(payload, callback) {
    async.waterfall([
        function (callback) {
            callback(null, payload);
        },
        removeFromBranch,
        removeRate
    ], function (err, result) {
        if (err) {
            callback(err)
        }

        callback(null, payload);
    });
}

function update(payload, callback) {
    Rate.RateModel
        .findByIdAndUpdate({_id: payload.req.params.rateId}, payload.req.body)
        .exec()
        .then((updatedRate) => {
            payload.updatedRate = updatedRate;
            callback(null, payload);
        })
        .catch((err) => {
            callback(err);
        });
}

module.exports = {
    create,

    remove,

    update
};
