const Client = require("../Model/Client");
const Product = require("../Model/Product");

const displayProduct = async (req, res) => {
    try {
        return res.status(200).json({ msg: await Product.find() })
    }
    catch (error) {
        console.error(error);
        return res.status(500).json({ msg: "Internal Error" })

    }

}

const displayClient = async (req, res) => {

    try {
        return res.status(200).json({ msg: await Client.find() })
    }
    catch (error) {
        console.error(error);
        return res.status(500).json({ msg: "Internal Error" })

    }
}

module.exports = {
    displayProduct,
    displayClient
}