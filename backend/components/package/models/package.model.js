const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PackageSchema = new Schema({
    cars: [{type: Schema.Types.ObjectId, ref: 'Car'}],
    books: [{type: Schema.Types.ObjectId, ref: 'Book'}],
    bicycles: [{type: Schema.Types.ObjectId, ref: 'Bicycle'}],
});

module.exports = {
    PackageSchema: PackageSchema,
    PackageModel: mongoose.model('Package', PackageSchema)
};
