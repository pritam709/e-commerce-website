import React, { useReducer ,useState} from "react";
import CartContext from "./CartContext";


const CartProvider = (props) => {

  const storedToken= localStorage.getItem('token');
  const[token,setToken]=useState(storedToken);

  const userIsLoggedIn= !!token;
  const loginHandler=(token)=>{
     setToken(token);
     localStorage.setItem('token',token);
    //  const expiration = new Date();
    //  console.log(expiration);
  
  }
  const logoutHandler=()=>{
     setToken(null);
     localStorage.removeItem('token');
  }

  
 

  const defaultCartState = {
    items: [],
    totalAmount: 0,
  };
  const cartReducerFn = (state, action) => {
    console.log("inside Reducer");
    if (action.type === "ADD") {
      const newAmount = state.totalAmount + action.item.price;
      const itemIndex = state.items.findIndex((item) => item.id === action.item.id);
      const existingItem = state.items[itemIndex];
      let updatedItemsArray;

      if (existingItem) {
        const updatedItem = {
          ...existingItem,
          quantity: existingItem.quantity + 1,
        };
        updatedItemsArray = [...state.items];
        updatedItemsArray[itemIndex] = updatedItem;
      } else {
        updatedItemsArray = state.items.concat(action.item);
      }

      return {
        items: updatedItemsArray,
        totalAmount: newAmount,
      };
    }

    if(action.type==="REMOVE"){
        const newItemsArray=state.items.filter(item=>item.id!==action.id);
        const newAmount=newItemsArray.reduce((curr,item)=>{
            return curr+(item.price)*(item.quantity);
        },0)

        return {
            items: newItemsArray,
            totalAmount:newAmount
        }
    }

    return defaultCartState;
  };
  const [cartState, dispatchFn] = useReducer(cartReducerFn, defaultCartState);
  const addItemTocartHandler = (item) => {
    console.log("hello");
    dispatchFn({ type: "ADD", item: item });
  };
  const removeItemFromCartHandler = (id) => {
    dispatchFn({ type: "REMOVE", id: id });
  };

  

  const initialCart = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    token:token,
    isLoggedIn:userIsLoggedIn,
    login:loginHandler,
    logout:logoutHandler,
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
