const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const wheelsSchema = new Schema ({
    name: { type: string, reqired: true}
    image_source: { type string, required: true}
})

const Wheels = mongoose.model("Wheels", wheelsSchema);
