import React from "react";
import "./App.css";
import ItemDetails from "./components/ItemDetails/ItemDetails";
import ItemFilterContainer from "./components/ItemFilterContainer/ItemFilterContainer";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Navbar from "./components/NavBar/NavBar";
import NotFound from "./components/NotFound/NotFound";
import { CartProvider } from "./context/CartContext";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/marca/:marcaId" element={<ItemFilterContainer />} />
          <Route path="/product/:productId" element={<ItemDetails />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
