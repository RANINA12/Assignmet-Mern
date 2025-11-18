// const cloudinary = require('cloudinary').v2;

// cloudinary.config({
//     cloud_name: 'dzsduinsj',
//     api_key: '395145489771269',
//     api_secret: 'q8kxCmxfhtTa2gfePFtOO5MFlMU',
// });

// module.exports = cloudinary;


const cloudinary = require('cloudinary').v2;

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});

module.exports = cloudinary;

