const express = require("express");
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

// Allowed origins
const allowedOrigins = [
    "https://assignmetadminpanel.vercel.app",
    "https://assignmentflipr.vercel.app",
    "http://localhost:5173",
    "http://localhost:5174"
];

app.use(
    cors({
        origin: function (origin, callback) {
            // Allow requests with no origin (like mobile apps or curl requests)
            if (!origin) return callback(null, true);
            if (allowedOrigins.includes(origin)) {
                callback(null, true);
            } else {
                callback(new Error("Not allowed by CORS"));
            }
        },
        credentials: true
    })
);

// DB connect (Added error handling to prevent crash)
connectDB().catch(err => console.error("Database connection failed:", err));

// Simple Route to check if Backend is Alive
app.get("/", (req, res) => {
    res.json({ message: "Backend is working!" });
});

// Routes
app.use("/admin", adminRoutes);
app.use("/api", ConsultationRequest);
app.use("/admin", AdminGetService);
app.use("/admin", AdminPostService);
app.use("/api", DisplayRoute);

// --- THE HYBRID SETUP ---
const PORT = process.env.PORT || 5000;

// If running on Vercel, export the app
if (process.env.VERCEL) {
    module.exports = app;
} else {
    // If running locally, listen on port
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
}
