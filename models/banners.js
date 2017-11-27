const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bannersSchema = new Schema ({
    name: { type: string, reqired: true}
    image_source: { type string, required: true}
})

const Banners = mongoose.model("Banners", bannersSchema);
