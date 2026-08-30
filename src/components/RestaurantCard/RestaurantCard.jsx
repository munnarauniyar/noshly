import { Link } from "react-router-dom";
import { useState } from "react";
import "./RestaurantCard.css";

function RestaurantCard({ restaurant, toggleFavorites }) {

    const [isFavorite, setIsFavorite] = useState(false);

    return (
        <Link
            to={`/restaurant/${restaurant.id}`}
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
                    onClick={(e) => {
                        e.preventDefault();
                        setIsFavorite(!isFavorite);
                        toggleFavorites(restaurant.id);
                    }}

                >
                    {isFavorite ? <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentcolor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-heart-icon lucide-heart"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5" /></svg> : <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className=
                        "lucide lucide-heart-icon lucide-heart"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5" /></svg>}
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

        </Link >
    );
}

export default RestaurantCard;