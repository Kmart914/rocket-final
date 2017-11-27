const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const paintSchema = new Schema ({
    name: { type: string, reqired: true}
    image_source: { type string, required: true}
})

const Paint = mongoose.model("Paint", paintSchema);
