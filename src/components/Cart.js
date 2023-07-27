import React from "react";
import classes from "./Cart.module.css"
const cartElements = [

    {
    
    title: 'Colors',
    
    price: 100,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
    
    quantity: 2,
    
    },
    
    {
    
    title: 'Black and white Colors',
    
    price: 50,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
    
    quantity: 3,
    
    },
    
    {
    
    title: 'Yellow and Black Colors',
    
    price: 70,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
    
    quantity: 1,
    
    }
    
    ]
const Cart =()=>{
    return (
        <div className={classes.cart}>
          <div className={classes.btnX}>  <button>x</button></div>
            <div className={classes.center} >
            <h2>CART</h2>
            </div>
           <div>
           <span>ITEM</span>
           <span>PRICE</span>
           <span>QUANTITY</span>

           </div>
           
           <div className={classes.total}> <h3>Total: $0</h3></div>
           <div  className={classes.center}>
            <button className={classes.btn}  >PURCHASE</button>
           </div>
        </div>
    )

}
export default Cart;