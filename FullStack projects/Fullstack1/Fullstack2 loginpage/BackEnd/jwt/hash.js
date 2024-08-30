

const generateHash = (req, res, next) => {
    const { name, mobilenumber } = req.body;
    let create_hash;
    if (mobilenumber) {
        create_hash = mobilenumber;
    }
    req.hash = crypto.createHash('sha256').update(create_hash).digest('hex');
    next();

}

module.exports = generateHash