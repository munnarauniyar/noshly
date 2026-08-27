import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import RestaurantSection from "./components/RestaurantSection/RestaurantSection";
import Categories from "./components/Catagories/Categories";
import RestaurantDetails from "./Pages/RestaurantDetails/RestaurantDetails";
import BottomNav from "./components/BottomNav/BottomNav";

import { useState } from "react";
import { Routes, Route } from "react-router-dom";


function App() {

  const [search, setSearch] = useState("");

  return (
    <div>

      <Navbar />

      <Routes>

        <Route
          path="/"
          element={
            <>
              <Hero setSearch={setSearch} />
              <RestaurantSection search={search} />
              <Categories />
              <BottomNav />
            </>
          }
        />

        <Route
          path="/restaurant/:id"
          element={<RestaurantDetails />}
        />

      </Routes>

    </div>
  );
}

export default App;
