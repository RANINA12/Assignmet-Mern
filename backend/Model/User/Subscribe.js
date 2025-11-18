const mongoose = require("mongoose");

const SubsribeSchema = new mongoose.Schema({
    uuid: {
        type: String,
        unique: true
    },
    Email: {
        type: String,
        unique: true,
        require
    },

})

const Subscribe = mongoose.model("Subscribe", SubsribeSchema);
module.exports = Subscribe;
