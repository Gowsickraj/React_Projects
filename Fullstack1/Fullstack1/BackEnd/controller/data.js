

let personalDetails = [];

const getPersonalDetails = (req, res) => {
  try {

    if (personalDetails.length > 0) {

      return res.status(200).json({ code: 200, data: personalDetails });
    }
    else {
      return res.status(200).json({ code: 400, msg: "no data found" })
    }
  } catch (error) {
    return res.status(200).json({ code: 500, msg: "internal server error" })

  }
}

const savePersonalDetails = (req, res) => {
  try {
    const details = req.body;
    console.log(req.body);
    personalDetails.push(details);
    console.log(personalDetails);
    if (Object.keys(details).length > 0) {
      res.status(200).json({ code: 200, msg: "data received successfully" })
    }
    else {
      res.status(200).json({ code: 400, msg: "data not received" })
    }
  } catch (error) {

    res.status(200).json({ code: 500, msg: "internal server error" })

  }

}

const updatePersonalDetails = (req, res) => {
  try {



  }
  catch (error) {

  }
}

const deletePersonalDetails = (req, res) => {
  try {
    const index = req.body;
    console.log(req.body, "index to be deleted");
    if (index >= 0) {
      personalDetails.splice(index, 1);
      res.status(200).json({ code: 200, msg: "data deleted successfully" })
    }
    else {
      res.status(200).json({ code: 400, msg: "data does not exist" })
    }


  } catch (error) {
    res.status(200).json({ code: 500, msg: "internal server error" })

  }

}





module.exports = { savePersonalDetails, getPersonalDetails, updatePersonalDetails, deletePersonalDetails };
