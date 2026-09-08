const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const restaurantRoutes = require("./routes/restaurantRoutes");

dotenv.config();

const app = express();

const PORT = 5000;


// Connect MongoDB
connectDB();


// Middleware
app.use(express.json());


// Main test route
app.get("/", (req, res) => {
    res.send("Noshly Backend is Running");
});


// Restaurant routes
app.use("/api/restaurants", restaurantRoutes);


app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});