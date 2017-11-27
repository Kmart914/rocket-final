const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cratesSchema = new Schema ({
    name: { type: string, reqired: true}
    image_source: { type string, required: true}
})

const Crates = mongoose.model("Crates", cratesSchema);
