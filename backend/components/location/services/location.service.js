const Comment = require("../../comment/models/comment.model");
const userService = require('./user.service');
const locationService = require('../../comment/services/comment.service');
const async = require('async');

function getUserComments(payload, callback) {
    const user = payload.user;

    if (user && user.comments) {
        payload.userComments = user.comments;
    } else {
        payload.userComments = [];
    }

    callback(null, payload);
}

function createSearchUserQuery(payload, callback) {
    payload.query = {_id: payload.req.params.userId};

    callback(null, payload);
}

function list(payload, callback) {
    async.waterfall([
        function (callback) {
            callback(null, payload);
        },
        createSearchUserQuery,
        userService.get,
        getUserComments,
    ], function (err, result) {
        if (err) {
            callback(err)
        }
        callback(null, result);
    });
}


function addCommentToUser(payload, callback) {
    const user = payload.for;
    const newComment = payload.newComment;

    user.comments.push(newComment._id);

    return user
        .save()
        .then((comment) => {
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
        locationService.create,
        addCommentToUser
    ], function (err, result) {
        if (err) {
            callback(err)
        }

        callback(null, payload);
    });
}

function removeComment(payload, callback) {
    Comment.CommentModel
        .remove(payload.query)
        .exec()
        .then((removedComment) => {
            payload.removedComment = removedComment;
            callback(null, payload)
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
        createSearchForCommentQuery,
        removeComment,
    ], function (err, result) {
        if (err) {
            callback(err)
        }
        callback(null, payload);
    });
}

function createSearchForCommentQuery(payload, callback) {
    payload.query = {_id: payload.req.params.commentId};

    callback(null, payload);
}

function updateComment(payload, callback) {
    Comment.CommentModel
        .findByIdAndUpdate(payload.query, payload.req.body)
        .exec()
        .then((updatedComment) => {
            payload.updatedComment = updatedComment;
            callback(null, payload)
        })
        .catch((err) => {
            callback(err);
        });
}

function update(payload, callback) {
    async.waterfall([
        function (callback) {
            callback(null, payload);
        },
        createSearchForCommentQuery,
        updateComment
    ], function (err, result) {
        if (err) {
            callback(err)
        }
        callback(null, payload);
    });
}

module.exports = {
    list,

    create,

    remove,

    update
};
