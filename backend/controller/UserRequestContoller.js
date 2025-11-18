const { v4: uuidv4 } = require("uuid");
const User = require("../Model/User/UserDetails");
const Subscribe = require("../Model/User/Subscribe");
const ConsultationForm = async (req, res) => {
    const { name, email, mobile, city } = req.body;
    const unique_id = uuidv4();
    try {
        const newUser = new User({
            uuid: unique_id,
            Name: name,

            Email: email,
            Mobile: mobile,
            City: city,
        })

        await newUser.save();

        return res.status(200).json({ msg: "sucessfully recieved your request" })
    }

    catch (error) {
        console.log(error);
        return res.status(500).json({ msg: "Internal server error" })
    }
}

const SubscribeRequest = async (req, res) => {
    const { email } = req.body;

    try {
        const existing = await Subscribe.findOne({ Email: email });

        if (existing) {
            return res.status(409).json({ msg: "Already Subscribe" });
        }

        await Subscribe.create({ Email: email });
        res.status(200).json({ msg: "Subscribed Successfully" });

    } catch (err) {

        console.error("Subscribe Error:", err);

        // Duplicate key error from MongoDB
        if (err.code === 11000) {
            return res.status(409).json({ msg: "Already Subscribe" });
        }

        res.status(500).json({ msg: "Internal Server Error" });
    }

}

module.exports = {
    ConsultationForm,
    SubscribeRequest
};