import React from "react";
import './Cart.css'

const Cart = (props)=>{
    const {cart} = props;
    console.log(cart);

    let total = 0;
    let shipping = 0;

    for(const product of cart)
    {
        total = total + product.price;
        shipping = shipping + product.shipping;
    }
    
    const tax = (total * 0.1).toFixed(2);
    const  grandTotal = parseFloat(tax) + total + shipping;
    return(
        <div className="cart">
            <h2>Oder Summary</h2>
            <p>Total : {cart.length}</p>
            <p>Total Price: {total}$ </p>
            <p>Total Shipping : {shipping}$</p>
            <p>Tax: {tax}$ </p>
            <h4>Grad Total: {grandTotal}$ </h4>
        </div>
    )
}


export default Cart;