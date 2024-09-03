const mongoose = require("mongoose");
const databaseURL = require("../Database/db");



const schema = new mongoose.Schema({
    user_name: { type: String },
    mobile_number: { type: String, unique: true },
    role: { type: String, default: "user", enum: ["user", "admin"] }
}, {
    timestamps: true,
})

const Practice_Schema = databaseURL.model("Practice", schema);

const getAllData = async (req, res) => {

    try {
        const { data } = req.body;
        if (data) {
            const users = await Practice_Schema.find({ user_name: data });
            res.status(200).json({ code: 200, data: users });
        }
        else {
            const users = await Practice_Schema.find();
            // console.log(users);
            res.status(200).json({ code: 200, data: users });
        }
    }
    catch (error) {
        // console.log(error);
        res.status(200).json({ code: 500, error: error.message })

    }
}

const getDataByName = async (req, res) => {
    try {
        const name = req.params.name;
        const users = await Practice_Schema.find({ user_name: name });
        // console.log(users);
        res.status(200).json({ code: 200, data: users });

    }
    catch (error) {
        // console.log(error);
        res.status(200).json({ code: 500, error: error.message })


    }
}





module.exports = { Practice_Schema, getAllData, getDataByName };