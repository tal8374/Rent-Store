const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MessageSchema = new Schema({
    byUser: {type: Schema.Types.ObjectId, ref: 'User'},
    forUser: {type: Schema.Types.ObjectId, ref: 'User'},
    byBranch: {type: Schema.Types.ObjectId, ref: 'Branch'},
    forBranch: {type: Schema.Types.ObjectId, ref: 'Branch'},
    createdAt: {type: Schema.Types.Date, default: Date.now()},
    readAt: {type: Schema.Types.Date},
    content: {type: Schema.Types.String},
});

module.exports = {
    MessageSchema: MessageSchema,
    MessageModel: mongoose.model('Message', MessageSchema)
};
