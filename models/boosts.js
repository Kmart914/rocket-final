const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const boostsSchema = new Schema ({
    name: { type: string, reqired: true}
    image_source: { type string, required: true}
})

const Boosts = mongoose.model("Boosts", boostsSchema);
