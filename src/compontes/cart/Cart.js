import React from "react";

const Cart = (props)=>{

    return(
        <div>
            <h3>Oder Summary</h3>
            <p>Total : {props.cart.length}</p>
        </div>
    )
}


export default Cart;