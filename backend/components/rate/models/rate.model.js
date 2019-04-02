const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RateSchema = new Schema({
    rate: {type: Schema.Types.Number},
    byUser: {type: Schema.Types.ObjectId, ref: 'User'},
    byBranch: {type: Schema.Types.ObjectId, ref: 'Branch'},
    createdAt: {type: Schema.Types.Date, default: Date.now()},

});

module.exports = {
    RateSchema: RateSchema,
    RateModel: mongoose.model('Rate', RateSchema)
};
