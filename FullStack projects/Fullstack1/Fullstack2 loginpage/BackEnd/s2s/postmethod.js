const axios = require("axios");
const { Practice_Schema } = require("../Model/Practice");



const verifyMobileNumber = async (req, res) => {

    const { mobile_number } = req.body;
    const hashed_mobile_number = req.hash;
    console.log(hashed_mobile_number);
    try {
        const users = await Practice_Schema.find({ mobile_number: hashed_mobile_number });
        console.log(users,"users");
        if (users.length!=0) {
            res.status(200).json({ code: 200, msg: "data matched", data: users })
        }
        else {
            res.status(200).json({ code: 400, msg: 'data does not exist' })
        }

    } catch (error) {
        res.status(200).json({ code: 500, msg: "Internal server error" })


    }


}

module.exports = { verifyMobileNumber };