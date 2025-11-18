const mongoose = require("mongoose");

const AdminSchema = new mongoose.Schema({

    userId: { type: String },
    password: { type: String },
    role: { type: String, default: "admin" }
})

const Admin = mongoose.model("Admin", AdminSchema);
module.exports = Admin;
