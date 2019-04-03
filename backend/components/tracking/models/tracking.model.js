const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Location = require('../../location/models/location.model');

const TrackingSchema = new Schema({
    status: {type: Schema.Types.String},
    estimateDelivery: {type: Schema.Types.Boolean},
    currentLocation: {type: Location.LocationSchema},
});

module.exports = {
    TrackingSchema: TrackingSchema,
    TrackingModel: mongoose.model('Tracking', TrackingSchema)
};
