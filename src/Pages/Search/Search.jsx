import { useState } from "react";
import RestaurantCard from "../../components/RestaurantCard/restaurantcard";
import restaurants from "../../data/restaurants";

import "./Search.css";

function Search() {

    const [search, setSearch] = useState("");

    const filteredRestaurants = restaurants.filter((restaurant) =>
        restaurant.name.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <section className="search-page">

            <div className="search-header">
                <h1>Find your food</h1>
                <p>Search for restaurants and discover something delicious.</p>
            </div>

            <div className="search-input-wrapper">

                <span className="search-icon">
                    🔍
                </span>

                <input
                    type="text"
                    placeholder="Search restaurants..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />

                {search && (
                    <button
                        className="clear-search"
                        onClick={() => setSearch("")}
                    >
                        ×
                    </button>
                )}

            </div>

            <div className="search-results">

                <h2>
                    {search
                        ? `Results for "${search}"`
                        : "Popular Restaurants"
                    }
                </h2>

                {filteredRestaurants.length > 0 ? (

                    <div className="restaurant-grid">

                        {filteredRestaurants.map((restaurant) => (
                            <RestaurantCard
                                restaurant={restaurant}
                                key={restaurant.id}
                            />
                        ))}

                    </div>

                ) : (

                    <div className="no-results">
                        <div className="no-results-icon">
                            🔍
                        </div>

                        <h3>No restaurants found</h3>

                        <p>
                            Try searching for another restaurant.
                        </p>
                    </div>

                )}

            </div>

        </section>
    );
}

export default Search;