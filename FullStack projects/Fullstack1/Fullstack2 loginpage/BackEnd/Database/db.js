const mongoose = require("mongoose");

const databaseURL = ()=>{
    let db = mongoose.createConnection(process.env.DB_URL);
    return db;
}

module.exports = databaseURL();