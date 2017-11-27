const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const trailsSchema = new Schema ({
    name: { type: string, reqired: true}
    image_source: { type string, required: true}
})

const Trails = mongoose.model("Trails", trailsSchema);
