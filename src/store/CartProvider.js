import React, { useReducer, useState } from "react";
import CartContext from "./CartContext";

const CartProvider = (props) => {
  const storedToken = localStorage.getItem("token");
  const storedEmail = localStorage.getItem("email");
  const [token, setToken] = useState(storedToken);
  const [email, setEmail] = useState(storedEmail);

  // console.log(token);
  const userIsLoggedIn = !!token;
  // console.log(userIsLoggedIn);
  const loginHandler = (token, email) => {
    setToken(token);
    setEmail(email);
    localStorage.setItem("token", token);
    localStorage.setItem("email", email);
    //  const expiration = new Date();
    //  console.log(token);
  };
  const logoutHandler = () => {
    setToken(null);
     localStorage.removeItem('token');
     setEmail(null);
     localStorage.removeItem('email');
     window.location.reload(true);
  };

  const defaultCartState = {
    items: [],
    totalAmount: 0,
  };
  const cartReducerFn = (state, action) => {
    // console.log("inside Reducer");
    if (action.type === "ADD") {
      const itemIndex = state.items.findIndex(
        (item) => item._id === action.item._id
      );
      const existingItem = state.items[itemIndex];
      let updatedItemsArray;
      let newAmount;
      if (existingItem) {
        return {
          items: state.items,
          totalAmount: state.totalAmount,
        };
        // const updatedItem = {
        //   ...existingItem,
        //   quantity: existingItem.quantity + 1,
        // };
        // updatedItemsArray = [...state.items];
        // updatedItemsArray[itemIndex] = updatedItem;
      } else {
        updatedItemsArray = state.items.concat(action.item);
        newAmount = state.totalAmount + action.item.price;
      }

      return {
        items: updatedItemsArray,
        totalAmount: newAmount,
      };
    }

    if (action.type === "REMOVE") {
      const newItemsArray = state.items.filter((item) => item.id !== action.id);
      const newAmount = newItemsArray.reduce((curr, item) => {
        return curr + item.price * item.quantity;
      }, 0);

      return {
        items: newItemsArray,
        totalAmount: newAmount,
      };
    }

    return defaultCartState;
  };
  const [cartState, dispatchFn] = useReducer(cartReducerFn, defaultCartState);
  const addItemTocartHandler = (item) => {
    // console.log("hello");
    dispatchFn({ type: "ADD", item: item });
  };
  const removeItemFromCartHandler = (id) => {
    dispatchFn({ type: "REMOVE", id: id });
  };

  const initialCart = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    token: token,
    email: email,
    isLoggedIn: userIsLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
    addItemTocart: addItemTocartHandler,
    removeItemFromCart: removeItemFromCartHandler,
  };
  return (
    <CartContext.Provider value={initialCart}>
      {props.children}
    </CartContext.Provider>
  );
};
export default CartProvider;
