const {savePersonalDetails, deletePersonalDetails, updatePersonalDetails} = require("../controller/data");
const {getPersonalDetails} = require("../controller/data");

const expressRouter = require("express").Router();
expressRouter.route("/get").get(getPersonalDetails);
expressRouter.route("/save").post(savePersonalDetails);
expressRouter.route("/update").put(updatePersonalDetails);
expressRouter.delete("/api/delete",deletePersonalDetails);

module.exports = expressRouter;