const jwt = require("jsonwebtoken");

// const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
    try {
        const authHeader = req.headers.authorization;

        if (!authHeader || !authHeader.startsWith("Bearer ")) {
            return res.status(401).json({ msg: "No token provided" });
        }

        const token = authHeader.split(" ")[1];  // get actual token
        // console.log("SECRET VERIFYING:", process.env.JWT_SECRET);
        // console.log("TOKEN RECEIVED:", token);


        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        req.user = decoded; // attach decoded user data to request
        next();

    } catch (error) {
        return res.status(401).json({ msg: "Invalid Token" });
    }
};

module.exports = { verifyToken };


const isAdmin = (req, res, next) => {
    if (req.user.role !== "admin") {
        return res.status(403).send({ message: "Admin access denied" });
    }
    next();
};

module.exports = {
    verifyToken,
    isAdmin
}