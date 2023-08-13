
import React,{useContext} from "react"
import classes from "./CartItem.module.css"
import CartContext from "../store/CartContext"
const CartItem=(props)=>{
   const ctx= useContext(CartContext);
   const mail= ctx.email
const _id= props._id;
   const removeItemFromCart=(id)=>{
    fetch("https://crudcrud.com/api/7a413186d2ab4d3b97e779bdab4bac3f/cart" +mail+"/"+_id,{
        method:"DELETE"
    }).then(res=>console.log(res))
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