const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const decalsSchema = new Schema ({
    name: { type: string, reqired: true}
    image_source: { type string, required: true}
})

const Decals = mongoose.model("Decals", decalsSchema);
