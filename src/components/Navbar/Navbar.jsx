import { Link } from "react-router-dom";
import "./Navbar.css";

import logo from "../../assets/Logo/NoshlyLogo.png";

function Navbar() {
    return (
        <nav className="navbar">

            <Link to="/" className="navbar-logo">
                <img src={logo} alt="Noshly" />
            </Link>

            <div className="navbar-links">
                <Link to="/">Home</Link>
                <Link to="/restaurants">Restaurants</Link>
                <Link to="/categories">Categories</Link>
                <Link to="/about">About</Link>
            </div>

            <div className="navbar-actions">
                <button className="cart-button">
                    🛒
                    <span>Cart</span>
                </button>

                <button className="login-button">
                    Login
                </button>
            </div>

        </nav>
    );
}

export default Navbar;