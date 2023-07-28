import React, { useContext,useState } from "react";
import Cart from "./Cart";

import Container from "react-bootstrap/Container";

import Navbar from "react-bootstrap/Navbar";

import Button from "react-bootstrap/Button";
import CartContext from "../store/CartContext";
import { NavLink } from "react-router-dom";

function NavbarFn(props) {
  const ctx = useContext(CartContext);

  const totalItems = ctx.items.reduce((curr, item) => {
    return curr + item.quantity;
  }, 0);

  const [showCart, setShowCart] = useState(false);
  const showCartHandler = () => {
    setShowCart(true);
  };
  const hideCartHandler = () => {
    setShowCart(false);
  };

  return (
    <>
      {" "}
      <Navbar expand="lg" className="bg-dark">
        <Container>
          <Navbar.Brand >
           <NavLink className="text-white text-decoration-none" to="/"> Home</NavLink>
          </Navbar.Brand>
          <Navbar.Brand className="text-white" href="#home">
           <NavLink className="text-white text-decoration-none"  to="/store"> Store</NavLink>
          </Navbar.Brand>
          <Navbar.Brand className="text-white" href="#home">
           <NavLink className="text-white text-decoration-none"  to="/about"> About</NavLink>
          </Navbar.Brand>

          <Button
            onClick={showCartHandler}
            type="submit"
            className="bg-dark"
          >
            Cart {totalItems}
          </Button>
        </Container>
      </Navbar>
      {showCart && <Cart onClick={hideCartHandler} />}
    </>
  );
}

export default NavbarFn;
