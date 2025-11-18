const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
    uuid: {
        type: String,
        unique: true
    },
    PName: {
        type: String,
        require
    },
    PDescription: {
        type: String,
        require
    },
    PImagepath: {
        type: String,
    }
})

const Product = mongoose.model("Product", ProductSchema);
module.exports = Product;
