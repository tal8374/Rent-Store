const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Location = require('../../location/models/location.model');
const branchPackage = require('../../package/models/package.model');

const BranchSchema = new Schema({
    name: {type: Schema.Types.String},
    location: {type: Location.LocationSchema},
    package: [{type: branchPackage.PackageSchema}],
    rates: [{type: Schema.Types.ObjectId, ref: 'Rate'}],
    views: [{type: Schema.Types.ObjectId, ref: 'View'}],
});

module.exports = {
    BranchSchema: BranchSchema,
    BranchModel: mongoose.model('Branch', BranchSchema)
};
