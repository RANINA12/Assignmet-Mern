const Admin = require("../Model/Admin/Admin");
const jwt = require("jsonwebtoken");


const adminLogin = async (req, res) => {
    try {
        const { userId, password } = req.body;

        const user = await Admin.findOne({ userId: userId });
        if (!user) return res.status(404).send({ message: "User not found" });
        if (!password === user.password) return res.status(400).send({ message: "Wrong password" });
        const accessToken = jwt.sign(
            { id: user._id, role: user.role },
            process.env.JWT_SECRET,
            { expiresIn: "30m" }
        );
        const refreshToken = jwt.sign(
            { id: user._id },
            process.env.REFRESH_SECRET,
            { expiresIn: "7d" }
        );
        res.cookie("refreshToken", refreshToken, {
            httpOnly: true,
            secure: false,
            sameSite: "lax",
            maxAge: 7 * 24 * 60 * 60 * 1000
        });
        return res.send({
            message: "Login Success",
            accessToken,
            user: {
                userId: user.userId,
                role: user.role
            }
        });

    } catch (err) {
        res.status(500).send({ error: err.message });
    }
};

module.exports = {
    adminLogin
}