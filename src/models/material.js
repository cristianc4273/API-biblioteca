const mongoose = require("mongoose");

const materialSchema = mongoose.Schema({ // mogose hace la coneccion 
    name: {
        type: String,
        required: true
    },
    tipo: {
        type: String,
        required: true
    },
    cantidad: {
        type: Number,
        required: true
    },
});
module.exports = mongoose.model('material',materialSchema);