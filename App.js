import React from "react";
import ReactDOM from "react-dom/client";

import Home from "./Components/Home";
import Restaurant from "./Components/Restaurant";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RestaurantMenu from "./Components/RestaurantMenu";



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/restaurant" element={<Restaurant />} />
        <Route path="/city/delhi/:id" element={<RestaurantMenu></RestaurantMenu>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
