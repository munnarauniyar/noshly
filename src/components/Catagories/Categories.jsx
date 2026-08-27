function Categories() {
    const categories = [
        {
            id: 1,
            name: "momo",
            icon: "🥟"

        },
        {
            id: 2,
            name: "Pizza",
            icon: "🍕"
        },
        {
            id: 3,
            name: "Burger",
            icon: "🍔"
        },
        {
            id: 4,
            name: "Chicken",
            icon: "🍗"
        },
        {
            id: 5,
            name: "Noodles",
            icon: "🍜"
        },
        {
            id: 6,
            name: "Desserts",
            icon: "🍨"
        }

    ];

    return (
        <section className="categories">
            <h2>Browse Categories</h2>

            <div className="category-grid">
                {categories.map((category) => (
                    <div className="category-card" key={category.id}>
                        <span className="category-icon">{category.icon}</span>
                        <h3>{category.name}</h3>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Categories;