import { Link } from "react-router-dom";
import "./RestaurantCard.css";

function RestaurantCard({ restaurant }) {

    return (
        <Link
            to={`/ restaurant / ${restaurant.id} `}
            className="restaurant-card"
        >

            <div className="restaurant-image">

                <img
                    src={restaurant.image}
                    alt={restaurant.name}
                />

                <span className="rating-badge">
                    ⭐ {restaurant.rating}
                </span>

                <button
                    className="favorite-button"
                    onClick={(e) => e.preventDefault()}
                >
                    ♡
                </button>

            </div>

            <div className="restaurant-info">

                <h3>{restaurant.name}</h3>

                <p className="restaurant-cuisine">
                    {restaurant.cuisine}
                </p>

                <div className="restaurant-meta">

                    <span>
                        🕒 {restaurant.deliveryTime}
                    </span>

                    <span className="delivery-label">
                        Delivery
                    </span>

                </div>

            </div>

        </Link>
    );
}

export default RestaurantCard;