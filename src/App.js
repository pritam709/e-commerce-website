import React, { useState } from "react";
import "./App.css";
import NavbarFn from "./components/Navbar";
import Header from "./components/Header";
import Music from "./components/Music";
import Cart from "./components/Cart";
import CartProvider from "./store/CartProvider";

function App() {
  const [showCart, setShowCart] = useState(false);
  const showCartHandler = () => {
    setShowCart(true);
  };
  const hideCartHandler = () => {
    setShowCart(false);
  };
  return (
    <CartProvider >
      <NavbarFn showCartHandler={showCartHandler} />
      {showCart && <Cart onClick={hideCartHandler} />}
      <Header />
      <Music />
    </CartProvider>
  );
}

export default App;
