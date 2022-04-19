const mongoose = require("mongoose");

const materialSchema = mongoose.Schema({ // mogose hace la coneccion 
    _id: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    tipo: {
        type: Number,
        required: true
    },
    cantidad: {
        type: Number,
        required: true
    },
});
module.exports = mongoose.model('material',materialSchema);