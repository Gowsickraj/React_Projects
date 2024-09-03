const axios = require("axios");
const jwt = require("jsonwebtoken")
const crypto = require("crypto");

const { Practice_Schema } = require("../Model/Practice");

const verifyMobileNumber = async (req, res) => {

    const { mobile_number } = req.body;
    const hashed_mobile_number = req.hash;
    // console.log(hashed_mobile_number);



    try {
        const users = await Practice_Schema.find({ mobile_number: hashed_mobile_number });
        // console.log(users[0].user_name,"users");



        if (users.length != 0) {
            const secretKey = "your-secret-key";

            const payload = {
                username: users[0].user_name,
                role: users[0].role
            }

            const token = jwt.sign(payload, secretKey, { expiresIn: "10s" });
            console.log(token, " created token");
            res.setHeader("Authorization", `Bearer ${token}`)
            res.status(200).json({ code: 200, msg: "data matched", data: users, jwt_token: token })
        }
        else {
            res.status(200).json({ code: 400, msg: 'data does not exist' })
        }

    } catch (error) {
        res.status(200).json({ code: 500, msg: "Internal server error" })


    }


}

module.exports = { verifyMobileNumber };