import { useParams, Link } from "react-router-dom";
import restaurants from "../../data/restaurants";
import "./RestaurantDetails.css";

function RestaurantDetails() {

    const { id } = useParams();

    const restaurant = restaurants.find(
        (restaurant) => restaurant.id === Number(id)
    );

    if (!restaurant) {
        return <h1>Restaurant Not Found</h1>;
    }

    return (
        <main className="restaurant-details">

            <Link to="/" className="back-button">
                ← Back to restaurants
            </Link>

            <div className="details-hero">

                <img
                    src={restaurant.image}
                    alt={restaurant.name}
                />

            </div>

            <div className="details-content">

                <div className="details-header">

                    <div>
                        <h1>{restaurant.name}</h1>

                        <p className="details-cuisine">
                            {restaurant.cuisine}
                        </p>
                    </div>

                    <div className="details-rating">
                        ⭐ {restaurant.rating}
                    </div>

                </div>

                <div className="details-meta">

                    <span>
                        🕒 {restaurant.deliveryTime}
                    </span>

                    <span>
                        📍 {restaurant.address}
                    </span>

                </div>

                <section className="about-section">

                    <h2>About this restaurant</h2>

                    <p>
                        {restaurant.description}
                    </p>

                </section>

            </div>

        </main>
    );
}

export default RestaurantDetails;
