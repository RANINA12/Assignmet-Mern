const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    uuid: {
        type: String,
        unique: true
    },
    Name: {
        type: String,
        require
    },
    Email: {
        type: String,
        require
    },
    Mobile: {
        type: Number,
        require
    },
    City: {
        type: String,
        require
    },
    SubscribeStatus: {
        type: String,
        enum: ["Not", "Yes"],
        default: "Not",
    }

})

const User = mongoose.model("User", UserSchema);
module.exports = User;
