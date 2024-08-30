const mongoose = require("mongoose");
const databaseURL = require("../Database/db");



const schema = new mongoose.Schema({
    user_name: { type: String },
    mobile_number: { type: String },
}, {
    timestamps: true,
})

const Practice_Schema = databaseURL.model("Practice", schema);

module.exports = { Practice_Schema };