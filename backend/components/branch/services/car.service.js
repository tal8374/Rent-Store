const Car = require("../../car/models/car.model");
const Branch = require("../models/branch.model");
const branchService = require('./branch.service');
const async = require('async');

function create(payload, callback) {
    Branch.BranchModel
        .update(
            {_id: payload.req.params.branchId},
            {$addToSet: {cars: {$each: [payload.req.body.carId]}}}
        ).then((newCar) => {
        payload.newCar = newCar;

        callback(null, payload);
    })
        .catch((err) => {
            callback(err);
        });
}

function remove(payload, callback) {
    const branchId = payload.req.params.branchId;
    const carId = payload.req.params.carId;

    Branch.BranchModel
        .update(
            {"_id": branchId},
            {"$pull": {"cars": carId}},
            {"multi": true},
            function (err, removedCar) {
                if (err) {
                    callback(err);
                } else {
                    payload.removedCar = removedCar;
                    callback(null, payload);
                }
            }
        )
}

module.exports = {
    create,

    remove,
};
