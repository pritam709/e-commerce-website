
import React,{useContext} from "react"
import classes from "./CartItem.module.css"
import CartContext from "../store/CartContext"
const CartItem=(props)=>{
   const ctx= useContext(CartContext);

   const removeItemFromCart=(id)=>{
ctx.removeItemFromCart(id);

    }
    return <li>
    <div className={classes.item}>
    <div  className={classes.title}>
       {props.title}
    </div>
    <div  className={classes.price}>
        {props.price}
    </div>
    <div  className={classes.quantity}>
        {props.quantity}
    </div>

    <button onClick={removeItemFromCart.bind(null,props.id)}>Remove</button>

    </div>

    </li>
}
export default CartItem;