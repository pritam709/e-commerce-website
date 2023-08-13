import React, { useContext, useState } from "react";
import Cart from "./Cart";

import Container from "react-bootstrap/Container";

import Navbar from "react-bootstrap/Navbar";

import Button from "react-bootstrap/Button";
import CartContext from "../store/CartContext";
import { NavLink } from "react-router-dom";

function NavbarFn(props) {
  const ctx = useContext(CartContext);
  const mail = ctx.email;
  console.log(mail);
  // const totalItems = ctx.items.reduce((curr, item) => {
  //   return curr + item.quantity;
  // }, 0);

  const [showCart, setShowCart] = useState(false);
  const showCartHandler = () => {

    fetch(
      "https://crudcrud.com/api/7a413186d2ab4d3b97e779bdab4bac3f/cart" +
        mail
    ).then((res) => {
      const data= res.json();
      console.log(data);
      return data;
    }).then(data=>{
      for(let i=0;i<data.length;i++){
        const obj= data[i];
        const objForCart={
          _id:obj._id,
          id:obj.id,
          price:obj.price,
          quantity:obj.quantity,
          title:obj.title
        }

        ctx.addItemTocart(objForCart);
      }

    });
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
          <Navbar.Brand>
            <NavLink className="text-white text-decoration-none" to="/">
              {" "}
              Home
            </NavLink>
          </Navbar.Brand>
          <Navbar.Brand className="text-white" href="#home">
            <NavLink className="text-white text-decoration-none" to="/store">
              {" "}
              Store
            </NavLink>
          </Navbar.Brand>
          <Navbar.Brand className="text-white" href="#home">
            <NavLink className="text-white text-decoration-none" to="/about">
              {" "}
              About
            </NavLink>
          </Navbar.Brand>
          <Navbar.Brand className="text-white" href="#home">
            <NavLink className="text-white text-decoration-none" to="/login">
              {" "}
              Login
            </NavLink>
          </Navbar.Brand>
          <Navbar.Brand className="text-white" href="#home">
            <NavLink className="text-white text-decoration-none" to="/contact">
              {" "}
              Contact us
            </NavLink>
          </Navbar.Brand>

          <Button onClick={showCartHandler} type="submit" className="bg-dark">
            Cart 
          </Button>
        </Container>
      </Navbar>
      {showCart && <Cart onClick={hideCartHandler} />}
    </>
  );
}

export default NavbarFn;
