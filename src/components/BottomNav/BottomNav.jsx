import { NavLink } from "react-router-dom";
import "./BottomNav.css";

function BottomNav() {
    return (
        <nav className="bottom-nav">

            <NavLink to="/" className="bottom-nav-item">
                <span>⌂</span>
                <p>Home</p>
            </NavLink>

            <NavLink to="/search" className="bottom-nav-item">
                <span>⌕</span>
                <p>Search</p>
            </NavLink>

            <NavLink to="/favorites" className="bottom-nav-item">
                <span>♡</span>
                <p>Favorite</p>
            </NavLink>

            <NavLink to="/profile" className="bottom-nav-item">
                <span>♙</span>
                <p>Profile</p>
            </NavLink>

        </nav>
    );
}

export default BottomNav;