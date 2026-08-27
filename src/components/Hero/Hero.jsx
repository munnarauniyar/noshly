import "./Hero.css";

import appframe from "../../assets/Restaurant/appframe.png";

function Hero({ setSearch }) {

    return (

        <div className="hero">
            <div className="hero-content">

                <span className="hero-badge">
                    Delicious food, delivered
                </span>

                <h1>
                    What are you <br />
                    Craving today?
                </h1>

                <p>
                    Discover your favorite restaurants, meals,
                    and flavors all in one place.
                </p>

                <div className="search-box">
                    <input
                        type="text"
                        onChange={(e) => setSearch(e.target.value)}
                    />
                    <button>
                        Search
                    </button>

                </div>

                <button className="hero-cta">
                    Explore Restaurants →
                </button>
            </div>

            <div className="hero-image">
                <img src={appframe} alt="momoimage" />
            </div>
        </div>

    );
}

export default Hero;