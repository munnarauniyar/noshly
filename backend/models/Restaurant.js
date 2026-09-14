const mongoose = require("mongoose");

const restaurantSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },

        cuisine: {
            type: String,
            required: true,
        },

        image: {
            type: String,
            required: true,
        },

        rating: {
            type: Number,
            default: 0,
        },

        deliveryTime: {
            type: String,
        },

        address: {
            type: String,
        },

        description: {
            type: String,
        },

        category: {
            type: String,
        },
    },
    {
        timestamps: true,
    }
);

const Restaurant = mongoose.model("Restaurant", restaurantSchema);

module.exports = Restaurant;