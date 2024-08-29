const { Practice_Schema } = require("../Schema/Practice")

const postData = async (req, res) => {


    const { name, mobilenumber } = req.body;
    try {
        const data = await Practice_Schema.create({
            user_name: name,
            mobile_number: mobilenumber
        })

        if(data){
            res.status(200).json({code:200,msg:"Data received successfully"})
        }
    } catch (error) {
        res.status(200).json({code:500,msg:"Internal server error"})

    }


}


module.exports = {postData}