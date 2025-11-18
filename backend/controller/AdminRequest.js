const { v4: uuidv4 } = require("uuid");
const Client = require("../Model/Client");
const Product = require("../Model/Product");
const Subscribe = require("../Model/User/Subscribe");
const User = require("../Model/User/UserDetails");
const cloudinary = require("../utils/cloud");

const getpath = async (file) => {
    if (!file) return null;

    const cloudinaryResult = await cloudinary.uploader.upload(file.path, {
        folder: "FliprAssignment"
    });

    return cloudinaryResult.secure_url;
};


// Add Product
const AddProduct = async (req, res) => {
    try {
        const { name, description } = req.body;
        const file = req.file;

        const unique_id = uuidv4();
        const imagepath = await getpath(file);

        const newProduct = new Product({
            uuid: unique_id,
            PName: name,
            PDescription: description,
            PImagepath: imagepath || ""
        });

        await newProduct.save();

        return res.status(200).json({ msg: "Product Added Successfully" });

    } catch (error) {
        console.error(error);
        return res.status(500).json({ msg: "Internal Server Error" });
    }
};

// Add Client
const AddClient = async (req, res) => {
    try {
        const { name, description, Designation } = req.body;
        const file = req.file;

        const unique_id = uuidv4();
        const imagepath = await getpath(file);

        const newClient = new Client({
            uuid: unique_id,
            CName: name,
            CDescription: description,
            CDesignation: Designation,
            CImagepath: imagepath || ""
        });

        await newClient.save();
        return res.status(200).json({ msg: "Client Added Successfully" });

    } catch (error) {
        console.error(error);
        return res.status(500).json({ msg: "Internal Server Error" });
    }
};

// Fetch All Consultation Forms
const FetchForm = async (req, res) => {
    try {
        const result = await User.find();
        return res.status(200).json({ data: result });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ msg: "Internal Server Error" });
    }
};

// Fetch Subscribers
const FetchSubscriber = async (req, res) => {
    try {
        const result = await Subscribe.find();
        return res.status(200).json({ data: result });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ msg: "Internal Server Error" });
    }
};
module.exports = {
    AddClient,
    AddProduct,
    FetchForm,
    FetchSubscriber
};
