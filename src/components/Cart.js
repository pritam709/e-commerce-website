import React , {useContext}from "react";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import CartContext from "../store/CartContext";

const Cart = (props) => {
 const ctx= useContext(CartContext);
  return (
    <div className={classes.cart}>
      <div className={classes.btnX}>
        {" "}
        <button onClick={props.onClick}>x</button>
      </div>
      <div className={classes.center}>
        <h2>CART</h2>
      </div>
      <div>
        <span>ITEM</span>
        <span>PRICE</span>
        <span>QUANTITY</span>
      </div>

     <ul className={classes.list}> {ctx.items.map(item=><CartItem 
      key={item.id}
      id={item.id}
      _id={item._id}
      title={item.title}
      quantity={item.quantity}
      price={item.price} />)}</ul>

      <div className={classes.total}>
        {" "}
        <h3>Total: ${ctx.totalAmount} </h3>
      </div>
      <div className={classes.center}>
        <button className={classes.btn}>PURCHASE</button>
      </div>
    </div>
  );
};
export default Cart;
