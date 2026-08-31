import "./Profile.css";

function Profile() {
    return (
        <section className="profile-page">

            <div className="profile-header">

                <div className="profile-avatar">
                    M
                </div>

                <div>
                    <h1>Munna</h1>
                    <p>munna@example.com</p>
                </div>

            </div>


            <div className="profile-menu">

                <div className="profile-menu-item">
                    <span>📦</span>
                    <div>
                        <h3>My Orders</h3>
                        <p>View your order history</p>
                    </div>
                    <span>›</span>
                </div>

                <div className="profile-menu-item">
                    <span>❤️</span>
                    <div>
                        <h3>Favorite Restaurants</h3>
                        <p>View your saved restaurants</p>
                    </div>
                    <span>›</span>
                </div>

                <div className="profile-menu-item">
                    <span>📍</span>
                    <div>
                        <h3>Saved Addresses</h3>
                        <p>Manage your delivery addresses</p>
                    </div>
                    <span>›</span>
                </div>

                <div className="profile-menu-item">
                    <span>⚙️</span>
                    <div>
                        <h3>Settings</h3>
                        <p>Manage your preferences</p>
                    </div>
                    <span>›</span>
                </div>

                <div className="profile-menu-item">
                    <span>❓</span>
                    <div>
                        <h3>Help & Support</h3>
                        <p>Get help with your orders</p>
                    </div>
                    <span>›</span>
                </div>

            </div>


            <button className="logout-button">
                Log Out
            </button>

        </section>
    );
}

export default Profile;