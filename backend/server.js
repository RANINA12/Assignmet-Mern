const express = require("express");   // ✔ FIXED
const cors = require("cors");
const cookieParser = require("cookie-parser");
require("dotenv").config();

const adminRoutes = require("./routes/adminRoutes");
const ConsultationRequest = require("./routes/ConsultationRequest");
const AdminGetService = require("./routes/AdminRequest/AdminGetRequest");
const AdminPostService = require("./routes/AdminRequest/AdminPostRequest");
const DisplayRoute = require("./routes/DisplayRoutes");

const connectDB = require("./db/connection");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());

// Allow multiple origins
const allowedOrigins = [
    "http://localhost:5173",
    "http://localhost:5174",
    "https://your-admin-panel.com",
    "https://your-client-site.com"
];

app.use(
    cors({
        origin: function (origin, callback) {
            if (!origin) return callback(null, true);

            if (allowedOrigins.includes(origin)) {
                callback(null, true);
            } else {
                callback(new Error("Not allowed by CORS"), false);
            }
        },
        credentials: true,
        allowedHeaders: ["Content-Type", "Authorization"],
        exposedHeaders: ["Authorization"]
    })
);

// Database connection
connectDB();

// Routes
app.use("/admin", adminRoutes);
app.use("/api", ConsultationRequest);
app.use("/admin", AdminGetService);
app.use("/admin", AdminPostService);
app.use("/api", DisplayRoute);

// Start server
app.listen(process.env.PORT, () =>
    console.log("Server running on", process.env.PORT)
);
