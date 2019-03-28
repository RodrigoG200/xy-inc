const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const DestinationSchema = new Schema({
    nomePoi: {
        type: String,
        required: true
    },
    cordX: {
        type: Number,
        required: true
    },
    cordY: {
        type: Number,
        required: true
    }
});
mongoose.model('Destination', DestinationSchema)