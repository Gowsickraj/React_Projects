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

        
        const data = await Practice_Schema.create({
            user_name: name,
            mobile_number: hash
        }

        )
        console.log(data,"data");

        if (data) {
            res.status(200).json({ code: 200, msg: "Data received successfully" })
        }
    } catch (error) {
        // console.log(error.message);
        return res.status(500).json({ code: 500, msg: "Internal server error" })

    }


}


module.exports = { postData }