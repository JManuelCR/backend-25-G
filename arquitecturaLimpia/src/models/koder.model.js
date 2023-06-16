const { response } = require("express");
const mongoose = require("mongoose");
/**
 * Esquema de mongoose
 * Modelo
 */

const koderSchema = new response.Schema({
    name: {
        type: String,
        minlength: 3,
        maslength: 20,
        required: true
    },
    module: {
        type: String
    },
    generation: {
        type: String
    },
    age: {
        type: Number,
        nim: 18,
        max: 100
    },
    sex: {
        type: String,
        enum: ["f", "m", "o"]
    },
});
module.exports = mongoose.model("koders", koderSchema, "koders");