const Book = require("../models/book.model");
const async = require('async');

function list(payload, callback) {
    Book.BookModel
        .find({})
        .populate({
            path: 'rents',
            model: 'Rent'
        })
        .exec()
        .then((books) => {
            payload.books = books;
            callback(null, payload);
        })
        .catch((err) => {
            callback(err);
        });
}

function get(payload, callback) {
    const query = {_id: payload.req.params.bookId, ...payload.req.query};

    Book.BookModel
        .findOne(query)
        .populate({
            path: 'rents',
            model: 'Rent'
        })
        .exec()
        .then((book) => {
            payload.book = book;
            callback(null, payload);
        })
        .catch((err) => {
            callback(err);
        });
}

function create(payload, callback) {
    const newBook = new Book.BookModel(payload.req.body);

    newBook
        .save()
        .then((newBook) => {
            payload.newBook = newBook;
            callback(null, payload);
        })
        .catch((err) => {
            callback(err);
        });
}

function remove(payload, callback) {
    Book.BookModel
        .remove({_id: payload.req.params.bookId})
        .exec()
        .then((removedBook) => {
            payload.removedBook = removedBook;
            callback(null, payload);
        })
        .catch((err) => {
            callback(err);
        });
}

function update(payload, callback) {
    Book.BookModel
        .findByIdAndUpdate({_id: payload.req.params.bookId}, payload.req.body)
        .exec()
        .then((updatedBook) => {
            payload.updatedBook = updatedBook;
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
