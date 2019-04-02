const Branch = require("../models/branch.model");
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


function addViewToBranch(payload, callback) {
    Branch.BranchModel.findOneAndUpdate(
        {_id: payload.req.params.branchId},
        {$push: {views: payload.newView._id}},
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
        createView,
        addViewToBranch
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
            {"$pull": {"views": payload.req.params.viewId}},
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

function removeView(payload, callback) {
    View.ViewModel
        .findByIdAndRemove(
            {"_id": payload.req.params.viewId},
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
