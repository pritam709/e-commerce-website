import React from "react";

const CartContext=React.createContext({
    items:[],
    totalAmount:0,
    addItemTocart:(item)=>{

    },
    removeItemFromCart:(id)=>{

    }
})

export default CartContext;