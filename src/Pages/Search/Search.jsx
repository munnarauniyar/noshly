import { useState } from "react";
import RestaurantCard from "../../components/RestaurantCard/restaurantcard";
import restaurants from "../../data/restaurants";
function Search() {

    const [search, setSearch] = useState("");

    const filteredRestaurants = restaurants.filter((restaurant) =>

        restaurant.name.toLowerCase().includes(search.toLowerCase())

    );

    return (
        <div>
            <input
                type="text"
                placeholder="Search restaurants..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />

            <div className="restaurant-grid">
                {filteredRestaurants.map((restaurant) => (
                    <RestaurantCard
                        restaurant={restaurant}
                        key={restaurant.id}
                    />
                ))}
            </div>
        </div>
    );
}

export default Search;