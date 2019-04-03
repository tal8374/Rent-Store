const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CancellationSchema = new Schema({
    byUser: {type: Schema.Types.ObjectId, ref: 'User'},
    byBranch: {type: Schema.Types.ObjectId, ref: 'Branch'},
    reason: {type: Schema.Types.String},
});

module.exports = {
    CancellationSchema: CancellationSchema,
    CancellationModel: mongoose.model('Cancellation', CancellationSchema)
};
