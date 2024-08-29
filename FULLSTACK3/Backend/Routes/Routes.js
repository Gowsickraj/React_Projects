const handleData = (req, res) => {

    console.log("handle data function");

    // return "handledata";
    const data = {
        name: "Gowsick",
        age: 22,
    }
    // res.send(data);
    res.status(200).send((data));
}
module.exports = handleData
