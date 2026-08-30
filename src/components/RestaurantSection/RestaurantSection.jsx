import RestaurantCard from "../RestaurantCard/restaurantcard";
import restaurants from "../../data/restaurants";

import "./RestaurantSection.css";



function RestaurantSection({ search, toggleFavorites }) {



    const filteredRestaurants = restaurants.filter((restaurant) =>
        restaurant.name.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <section className="restaurant-section">
            <h2>Popular Restaurants</h2>

            <div className="restaurant-grid">
                {filteredRestaurants.map((restaurant) => (
                    <RestaurantCard
                        restaurant={restaurant}
                        key={restaurant.id}
                        toggleFavorites={toggleFavorites}
                    />
                ))}
            </div>
        </section>

    );
}

export default RestaurantSection;