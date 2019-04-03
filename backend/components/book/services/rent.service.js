const bookService = require('./book.service');
const Rent = require('../../rent/models/rent.model');
const async = require('async');
const _ = require('lodash');

function createSearchBookQuery(payload, callback) {
    payload.query = {_id: payload.req.params.bookId};

    callback(null, payload);
}

function createBookRent(payload, callback) {
    const book = payload.book;

    book.rents.push(payload.newRent);

    book
        .save()
        .then((book) => {
            payload.book = book;

            callback(null, payload);
        })
        .catch((err) => {
            callback(err);
        });
}

function createRent(payload, callback) {
    const newRent = new Rent.RentModel(payload.req.body);

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
        createSearchBookQuery,
        bookService.get,
        createRent,
        createBookRent
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
        .then((bookRent) => {
            payload.bookRent = bookRent;

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
