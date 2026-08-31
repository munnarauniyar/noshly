import { useParams, Link } from "react-router-dom";
import restaurants from "../../data/restaurants";
import "./RestaurantDetails.css";

function RestaurantDetails() {

    const { id } = useParams();

    const restaurant = restaurants.find(
        (restaurant) => restaurant.id === Number(id)
    );

    if (!restaurant) {
        return (
            <main className="restaurant-not-found">
                <h1>Restaurant Not Found</h1>
                <Link to="/">Back to restaurants</Link>
            </main>
        );
    }

    return (
        <main className="restaurant-details">

            <Link to="/" className="back-button">
                ← Back
            </Link>


            {/* Restaurant Image */}

            <div className="details-hero">

                <img
                    src={restaurant.image}
                    alt={restaurant.name}
                />

                <button className="details-favorite">
                    ♡
                </button>

            </div>


            {/* Restaurant Information */}

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


                {/* Meta information */}

                <div className="details-meta">

                    <div>
                        <span>🕒</span>
                        <p>
                            <strong>{restaurant.deliveryTime}</strong>
                            <small>Delivery time</small>
                        </p>
                    </div>

                    <div>
                        <span>📍</span>
                        <p>
                            <strong>{restaurant.address || "Birgunj"}</strong>
                            <small>Location</small>
                        </p>
                    </div>

                </div>


                {/* About */}

                <section className="about-section">

                    <h2>About this restaurant</h2>

                    <p>
                        {restaurant.description ||
                            "Enjoy delicious food prepared with fresh ingredients and delivered straight to your door."}
                    </p>

                </section>


                {/* Menu */}

                <section className="menu-section">

                    <div className="section-heading">
                        <h2>Popular Menu</h2>
                        <span>View all</span>
                    </div>


                    <div className="menu-grid">

                        <div className="menu-card">

                            <div className="menu-image">
                                <img
                                    src={restaurant.image}
                                    alt="Menu item"
                                />
                            </div>

                            <div className="menu-info">

                                <h3>Chef's Special</h3>

                                <p>
                                    Delicious house special
                                </p>

                                <div className="menu-bottom">

                                    <strong>Rs. 350</strong>

                                    <button>+</button>

                                </div>

                            </div>

                        </div>


                        <div className="menu-card">

                            <div className="menu-image">
                                <img
                                    src={restaurant.image}
                                    alt="Menu item"
                                />
                            </div>

                            <div className="menu-info">

                                <h3>Popular Choice</h3>

                                <p>
                                    Customer favorite
                                </p>

                                <div className="menu-bottom">

                                    <strong>Rs. 450</strong>

                                    <button>+</button>

                                </div>

                            </div>

                        </div>

                    </div>

                </section>

            </div>

        </main>
    );
}

export default RestaurantDetails;