const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const toppersSchema = new Schema ({
    name: { type: string, reqired: true}
    image_source: { type string, required: true}
})

const Toppers = mongoose.model("Toppers", toppersSchema);
