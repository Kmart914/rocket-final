const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const itemSchema = new Schema({
    name: { type: string, required: true }
    image_source: { type: string, required: true }
})

const item = mongoose.model("item", itemSchema);
