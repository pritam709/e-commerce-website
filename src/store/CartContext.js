import React from "react";

const CartContext=React.createContext({
    email:"",
    items:[],
    totalAmount:0,
    token:"",
    isLoggedIn:false,
    login:(token)=>{},
    logout:()=>{},
    addItemTocart:(item)=>{

    },
    removeItemFromCart:(id)=>{

    }
})

export default CartContext;