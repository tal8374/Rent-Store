const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ViewSchema = new Schema({
    rate: {type: Schema.Types.Number},
    byUser: {type: Schema.Types.ObjectId, ref: 'User'},
    byBranch: {type: Schema.Types.ObjectId, ref: 'Branch'},
    enteredAt: {type: Schema.Types.Date, default: Date.now()},
    leftAt: {type: Schema.Types.Date},
});

module.exports = {
    ViewSchema: ViewSchema,
    ViewModel: mongoose.model('View', ViewSchema)
};
