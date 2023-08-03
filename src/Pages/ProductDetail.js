import React,{useState,useContext} from "react";
import classes from "./ProductDetail.module.css";
import { useParams } from "react-router-dom";
import CartContext from "../store/CartContext";
const productsArr = [
  {
    id: "p1",
    title: "Album 1",

    price: 80,

    imageUrl: [
      "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
      "https://cdn4.vectorstock.com/i/1000x1000/94/83/music-speakers-background-album-cover-poster-vector-33029483.jpg",
      "https://i.pinimg.com/736x/a4/b6/fc/a4b6fc000e66d3e07ebea1d9a9bffa33.jpg",
    ],
    review:"4.5/5",
  description: "lorem  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem",
  },

  {
    id: "p2",
    title: "Album 2",

    price: 50,

    imageUrl: [
      "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    ],
    review:"4/5",
    description: "lorem  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem",
  },

  {
    id: "p3",
    title: "Album 3",

    price: 70,

    imageUrl: [
      "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    ],
    review:"3.5/5",
    description: "lorem  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem",
  },

  {
    id: "p4",
    title: "Album 4",

    price: 100,

    imageUrl: 
      [ "https://prasadyash2411.github.io/ecom-website/img/Album%204.png"],
      review:"2.5/5",
      description: "lorem  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem",
  },
  
];

const ProductDetail = () => {

  const param = useParams();
  const product = productsArr.find((item) => param.prodId === item.id);
  console.log(product);
 const[pic,setPic]= useState(product.imageUrl[0]);
 const imgChangeHandler=(add)=>{
    setPic(add);
 }

 const ctx= useContext(CartContext);
 const addItemTocart=(item)=>{

  console.log("btn-click");

  console.log({...item,quantity:1});

  ctx.addItemTocart({...item,quantity:1})

 }



  return (

      <div className={classes.outer}>
        <div className={classes["pics-container"]}>
          <div className={classes["smaller-pics"]}>
            {product.imageUrl.map((address) => {
              return <button onClick={imgChangeHandler.bind(null,address)}><img src={address} alt="productImg" /></button>;
            })}
          </div>
          <img  className={classes['main-image']} src={pic} alt="pic1" />
        </div>
        <div className={classes.details}>
        <h1>{product.title}</h1>
         <h3>Price: ${product.price}</h3>
         <h4>Review: {product.review}</h4>
         <p>
            {product.description}
         </p>

         <button onClick={addItemTocart.bind(null,product)}>Add to Cart</button>


        </div>
      </div>

  );
};

export default ProductDetail;
