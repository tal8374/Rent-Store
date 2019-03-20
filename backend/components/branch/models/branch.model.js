const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Location = require('../../location/models/location.model');

const BranchSchema = new Schema({
    name: {type: Schema.Types.String},
    location: {type: Location.LocationSchema},
    cars: [{type: Schema.Types.ObjectId, ref: 'Car'}],
});

module.exports = {
    BranchSchema: BranchSchema,
    BranchModel: mongoose.model('Branch', BranchSchema)
};
