const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const LocationSchema = new Schema({
    country: {type: Schema.Types.String},
    city: {type: Schema.Types.String},
    street: {type: Schema.Types.String},
    latitude: {type: Schema.Types.String},
    longitude: {type: Schema.Types.Number},
});

module.exports = {
    LocationSchema: LocationSchema,
    LocationModel: mongoose.model('Location', LocationSchema)
};
