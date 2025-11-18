const mongoose = require("mongoose");

const ClientSchema = new mongoose.Schema({
    uuid: {
        type: String,
        unique: true
    },
    CName: {
        type: String,
        require
    },
    CDescription: {
        type: String,
        require
    },
    CDesignation: {
        type: String,
        require
    },
    CImagepath: {
        type: String,
    }
})

const Client = mongoose.model("Client", ClientSchema);
module.exports = Client;
