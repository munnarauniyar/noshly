import "./Categories.css";

function Categories() {
    const categories = [
        { id: 1, name: "Momo", image: "/categories/momo.avif" },
        { id: 2, name: "Pizza", image: "/categories/pizza.avif" },
        { id: 3, name: "Burger", image: "/categories/burger.avif" },
        { id: 4, name: "Chicken", image: "/categories/chicken.avif" },
        { id: 5, name: "Noodles", image: "/categories/noodles.avif" },
        { id: 6, name: "Desserts", image: "/categories/desserts.avif" },
        { id: 7, name: "Pasta", image: "/categories/pasta.avif" },
        { id: 8, name: "Drinks", image: "/categories/drinks.avif" },
    ];

    return (
        <section className="categories-section">

            <h2>Categories</h2>

            <div className="categories-list">

                {categories.map((category) => (
                    <div className="category-card" key={category.id}>

                        <img
                            src={category.image}
                            alt={category.name}
                        />

                        <p>{category.name}</p>

                    </div>
                ))}

            </div>

        </section>
    );
}

export default Categories;
