const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const itemSchema = new Schema({
    name: { type: String, required: true },
    image_source: { type: String, required: true }
})

const item = mongoose.model("item", itemSchema);
