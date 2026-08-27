
import pizzaImage from "../assets/Restaurant/pizza.avif";
import burgerImage from "../assets/Restaurant/burger.avif";
import momoImage from "../assets/Restaurant/momocorner.avif";
import spiceImage from "../assets/Restaurant/spice.avif";

const restaurants = [
    {
        id: 1,
        name: "Pizza House",
        cuisine: "Pizza, Italian",
        rating: 4.6,
        deliveryTime: "25-35 min",
        image: pizzaImage,
        description: "Freshly made Italian pizzas with delicious toppings and a crispy crust.",
        address: "Main Road, Birgunj"
    },
    {
        id: 2,
        name: "Burger Hub",
        cuisine: "Burgers, Fast Food",
        rating: 4.6,
        deliveryTime: "25-35 min",
        image: burgerImage,
        description: "Juicy burgers, crispy fries and delicious fast food made fresh.",
        address: "Adarsh Nagar, Birgunj"
    },
    {
        id: 3,
        name: "Momo Corner",
        cuisine: "Momo, Nepali",
        rating: 4.5,
        deliveryTime: "30-40 min",
        image: momoImage,
        description: "Authentic Nepali momos with a variety of delicious fillings and sauces.",
        address: "Ghantaghar, Birgunj"
    },
    {
        id: 4,
        name: "Spice Garden",
        cuisine: "Indian, Chinese",
        rating: 4.7,
        deliveryTime: "30-40 min",
        image: spiceImage,
        description: "A blend of flavorful Indian and Chinese dishes prepared with fresh ingredients.",
        address: "Link Road, Birgunj"
    }
];

export default restaurants;
