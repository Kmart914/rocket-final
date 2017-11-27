const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const explosionsSchema = new Schema ({
    name: { type: string, reqired: true}
    image_source: { type string, required: true}
})

const Explosions = mongoose.model("Explosions", explosionsSchema);
