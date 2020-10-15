const jwt = require("jsonwebtoken");
const User = require("../models/user");

const auth = async (req, res, next) => {
    try {
        // Looks for the header the user is supposed to provide
        const token = req.header("Authorization").replace("Bearer ", "");
        // It validates that header
        const decoded = jwt.verify(token, "thisismynewcourse");
        // Then finds the associated user.
        const user = await User.findOne({ _id: decoded._id, "tokens.token": token });

        if (!user) {
            throw new Error ();
        }
        req.user = user;
        next();
    } catch (error) {
        res.status(401).send({ Error: "Please authenticate."});
    }
};

module.exports = auth;