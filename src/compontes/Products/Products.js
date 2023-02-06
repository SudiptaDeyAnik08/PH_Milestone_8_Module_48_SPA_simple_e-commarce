import React from "react";
import './Products.css'
const Products=(props)=>{
    const {name, img, seller, price, ratings} = props.data;
    return(
        <div className="Product">
            {
                console.log(props)
            }
            <img src={img} alt="" />
            <p>{name}</p>
        </div>
    )
}

export default Products;