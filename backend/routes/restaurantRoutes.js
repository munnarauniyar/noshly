const express = require("express");
const Restaurant = require("../models/Restaurant");

const router = express.Router();


// GET all restaurants
router.get("/", async (req, res) => {
    try {
        const restaurants = await Restaurant.find();

        res.json(restaurants);
    } catch (error) {
        res.status(500).json({
            message: "Failed to fetch restaurants",
        });
    }
});


// GET single restaurant
router.get("/:id", async (req, res) => {
    try {
        const restaurant = await Restaurant.findById(req.params.id);

        if (!restaurant) {
            return res.status(404).json({
                message: "Restaurant not found",
            });
        }

        res.json(restaurant);
    } catch (error) {
        res.status(500).json({
            message: "Failed to fetch restaurant",
        });
    }
});


module.exports = router;