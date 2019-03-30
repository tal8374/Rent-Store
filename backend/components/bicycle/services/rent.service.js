const bicycleService = require('./bicycle.service');
const Bicycle = require('../models/bicycle.model');
const Rent = require('../../rent/models/rent.model');
const async = require('async');
const _ = require('lodash');

function createSearchBicycleQuery(payload, callback) {
    payload.query = {_id: payload.req.params.bicycleId};

    callback(null, payload);
}

function createBicycleRent(payload, callback) {
    const bicycle = payload.bicycle;

    bicycle.rents.push(payload.newRent);

    bicycle
        .save()
        .then((bicycle) => {
            payload.bicycle = bicycle;

            callback(null, payload);
        })
        .catch((err) => {
            callback(err);
        });
}

function createRent(payload, callback) {
    const newRent = new Rent.RentModel(payload.req.body);

    console.log('here')

    return newRent
        .save()
        .then((newRent) => {
            payload.newRent = newRent;
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
        createSearchBicycleQuery,
        bicycleService.get,
        createRent,
        createBicycleRent
    ], function (err, result) {
        if (err) {
            callback(err)
        } else {
            callback(null, payload);
        }
    });
}

function remove(payload, callback) {
    Rent.RentModel
        .remove({_id: payload.req.params.rentId}, function (err, removedRent) {
            if (err) {
                callback(err)
            } else {
                payload.removedRent = removedRent;
                callback(null, payload);
            }
        });
}

function get(payload, callback) {
    Rent.RentModel
        .findOne({_id: payload.req.params.rentId})
        .then((bicycleRent) => {
            payload.bicycleRent = bicycleRent;

            callback(null, payload);
        })
        .catch((err) => {
            callback(err);
        });
}

function update(payload, callback) {

    Rent.RentModel
        .update({_id: payload.req.params.rentId},
            payload.req.body, function (err, updatedRent) {
                if (err) {
                    callback(err)
                } else {
                    payload.updatedRent = updatedRent;
                    callback(null, payload);
                }
            });
}


module.exports = {
    create,

    remove,

    get,

    update,
};
