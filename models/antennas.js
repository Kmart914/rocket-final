const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const atennaSchema = new Schema({
    name: { type: string, required: true }
    image_source: { type: string, required: true }
})

const Antenna = mongoose.model("Antenna", antennaSchema);
