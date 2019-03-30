const Bicycle = require("../models/bicycle.model");
const async = require('async');

function list(payload, callback) {
    Bicycle.BicycleModel
        .find({})
        .populate({
            path: 'rents',
            model: 'Rent'
        })
        .exec()
        .then((bicycles) => {
            payload.bicycles = bicycles;
            callback(null, payload);
        })
        .catch((err) => {
            callback(err);
        });
}

function get(payload, callback) {
    const query = {_id: payload.req.params.bicycleId, ...payload.req.query};

    Bicycle.BicycleModel
        .findOne(query)
        .populate({
            path: 'rents',
            model: 'Rent'
        })
        .exec()
        .then((bicycle) => {
            payload.bicycle = bicycle;
            callback(null, payload);
        })
        .catch((err) => {
            callback(err);
        });
}

function create(payload, callback) {
    const newBicycle = new Bicycle.BicycleModel(payload.req.body);

    newBicycle
        .save()
        .then((newBicycle) => {
            payload.newBicycle = newBicycle;
            callback(null, payload);
        })
        .catch((err) => {
            callback(err);
        });
}

function remove(payload, callback) {
    Bicycle.BicycleModel
        .remove({_id: payload.req.params.bicycleId})
        .exec()
        .then((removedBicycle) => {
            payload.removedBicycle = removedBicycle;
            callback(null, payload);
        })
        .catch((err) => {
            callback(err);
        });
}

function update(payload, callback) {
    Bicycle.BicycleModel
        .findByIdAndUpdate({_id: payload.req.params.bicycleId}, payload.req.body)
        .exec()
        .then((updatedBicycle) => {
            payload.updatedBicycle = updatedBicycle;
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
