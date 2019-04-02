const User = require("../models/user.model");
const View = require("../../view/models/view.model");
const async = require('async');

function createView(payload, callback) {
    const newView = new View.ViewModel(payload.req.body);

    newView
        .save()
        .then((newView) => {
            payload.newView = newView;
            callback(null, payload);
        })
        .catch((err) => {
            callback(err);
        });
}


function addViewToUser(payload, callback) {
    User.UserModel.findOneAndUpdate(
        {_id: payload.req.params.userId},
        {$push: {views: payload.newView._id}},
    )
        .then((user) => {
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
        createView,
        addViewToUser
    ], function (err, result) {
        if (err) {
            callback(err)
        }

        callback(null, payload);
    });
}

function removeFromUser(payload, callback) {
    User.UserModel
        .findByIdAndUpdate(
            {"_id": payload.req.params.userId},
            {"$pull": {"views": payload.req.params.viewId}},
            function (err, user) {
                if (err) {
                    callback(err);
                } else {
                    payload.user = user;
                    callback(null, payload);
                }
            }
        )
}

function removeView(payload, callback) {
    View.ViewModel
        .findByIdAndRemove(
            {"_id": payload.req.params.viewId},
            function (err, user) {
                if (err) {
                    callback(err);
                } else {
                    payload.user = user;
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
        removeFromUser,
        removeView
    ], function (err, result) {
        if (err) {
            callback(err)
        }

        callback(null, payload);
    });
}

function update(payload, callback) {
    View.ViewModel
        .findByIdAndUpdate({_id: payload.req.params.viewId}, payload.req.body)
        .exec()
        .then((updatedView) => {
            payload.updatedView = updatedView;
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
