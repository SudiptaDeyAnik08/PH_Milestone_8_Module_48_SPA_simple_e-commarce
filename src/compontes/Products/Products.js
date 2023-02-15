import React from "react";
import './Products.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee,faShoppingCart } from '@fortawesome/free-solid-svg-icons'


const Products=(props)=>{
    // const {data,addToCardHandeler} = props;
    // console.log(props);
    const {name, img, seller, price, ratings} = props.data;

    // const {addToCardHandeler} = props.addToCardHandeler
    
    // console.log(addToCardHandeler)

    return(
        <div className="Product">
            <img src={img} alt="" />
           <div className="product-info">
                <p className="Single_goods_name">{name}</p>
                <p>Price: {price}</p>
                <p><small>Seller: {seller}</small></p>
                <p><small>Ratings: {ratings}stars</small></p>
           </div>
           <button onClick= {()=>props.addToCardHandeler(props.data)} className="btn-cart"> <p>Add to Cart </p>
           <FontAwesomeIcon icon={faShoppingCart} />
           </button>
          
        </div>
    )
}

export default Products;