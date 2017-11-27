const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bodiesSchema = new Schema ({
    name: { type: string, reqired: true}
    image_source: { type string, required: true}
})

const Bodies = mongoose.model("Bodies", bodiesSchema);
