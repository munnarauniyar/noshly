import RestaurantCard from "../../components/RestaurantCard/restaurantcard";
import restaurants from "../../data/restaurants";

import "./Favorites.css";

function Favorites() {

    return (
        <section className="favorites-page">

            <div className="favorites-header">
                <h1>Favorite Restaurants</h1>

                <p>
                    Restaurants you've saved will appear here.
                </p>
            </div>

            <div className="favorites-grid">

                {restaurants.slice(0, 2).map((restaurant) => (
                    <RestaurantCard
                        restaurant={restaurant}
                        key={restaurant.id}
                    />
                ))}

            </div>

        </section>
    );
}

export default Favorites;