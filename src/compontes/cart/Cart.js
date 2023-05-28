import React from "react";
import './Cart.css'

const Cart = (props)=>{
    const {cart,clearCart,children} = props;
    console.log("carts",cart);

    let total = 0;
    let shipping = 0;
    let quantity = 0;

    for(const product of cart)
    {
        quantity = quantity + product.quantity;
        total = total + (product.price * product.quantity);
        shipping = shipping + product.shipping;
    }
    
    const tax = (total * 0.1).toFixed(2);
    const  grandTotal = parseFloat(tax) + total + shipping;
    return(
        <div className="cart">
            <h2>Oder Summary</h2>
            <p>Total : {quantity}</p>
            <p>Total Price: {total}$ </p>
            <p>Total Shipping : {shipping}$</p>
            <p>Tax: {tax}$ </p>
            <h4>Grad Total: {grandTotal}$ </h4>
            <button onClick={clearCart}>Clear Cart</button>
            {
                children
            }
        </div>
    )
}


export default Cart;