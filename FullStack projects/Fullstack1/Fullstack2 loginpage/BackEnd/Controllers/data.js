const jwt = require("jsonwebtoken")
const crypto = require("crypto");


const { Practice_Schema } = require("../Model/Practice")

const postData = async (req, res) => {

    try {

        const { name, mobilenumber } = req.body;
        const hash = req.hash;

        // console.log(name,mobilenumber);
        // const hash = crypto.createHash('sha256').update(mobilenumber).digest('hex');
        // console.log(hash);

        const hashed_number = await Practice_Schema.findOne({ mobile_number: hash })

        if (hashed_number) {
            console.log("error");
            return res.status(200).json({ code: 400, msg: "user registered already" })
        }

        const data = await Practice_Schema.create({
            user_name: name,
            mobile_number: hash
        }

        )
        // console.log(data,"data");

        if (data) {
            res.status(200).json({ code: 200, msg: "Data received successfully" })
        }
    } catch (error) {
        // console.log(error.code);
        // if (error.code === 11000) {
        //     return res.status(200).json({ code: 400, msg: "user already registered" })
        // }
        return res.status(200).json({ code: 500, msg: "Internal server error" })

    }


}


module.exports = { postData }