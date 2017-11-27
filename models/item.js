const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const itemSchema = new Schema({
    name: { type: String, required: true },
    image_source: { type: String, required: true }
})

const items = mongoose.model("items", itemSchema);

module.exports = items;
