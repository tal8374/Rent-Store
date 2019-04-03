const Message = require("../models/message.model");

function list(payload, callback) {
    Message.MessageModel
        .find({$or: [payload.req.query]})
        .populate('byBranch')
        .populate('forBranch')
        .populate('byUser')
        .populate('forUser')
        .exec()
        .then((messages) => {
            payload.messages = messages;
            callback(null, payload);
        })
        .catch((err) => {
            callback(err);
        });
}

function create(payload, callback) {
    const newMessage = new Message.MessageModel(payload.req.body);

    newMessage
        .save()
        .then((newMessage) => {
            payload.newMessage = newMessage;
            callback(null, payload);
        })
        .catch((err) => {
            callback(err);
        });
}

function remove(payload, callback) {
    Message.MessageModel
        .remove({_id: payload.req.params.messageId})
        .exec()
        .then((removedMessage) => {
            payload.removedMessage = removedMessage;
            callback(null, payload);
        })
        .catch((err) => {
            callback(err);
        });
}

function update(payload, callback) {
    Message.MessageModel
        .findByIdAndUpdate({_id: payload.req.params.messageId}, payload.req.body)
        .exec()
        .then((updatedMessage) => {
            payload.updatedMessage = updatedMessage;
            callback(null, payload);
        })
        .catch((err) => {
            callback(err);
        });
}


module.exports = {
    list,

    remove,

    update,

    create
};
