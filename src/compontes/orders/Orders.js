import React, { useState } from 'react'
import { Link, useLoaderData } from 'react-router-dom'
import Cart from '../cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';

function Orders() {

  const {products,initialCart } = useLoaderData();  // {products:products,initialCart:initialCart};


  

  const [cart,setCart] = useState(initialCart);


  const clearCart =()=>{
    setCart([]);
    deleteShoppingCart();
}


  const handelRemoveItem = (id) =>{
    console.log(id);
    const remaining = cart.filter(product=> product.id !== id);
    setCart(remaining);
    removeFromDb(id);
  }

  return (
    <div className='Parent'>
       
        <div className="order-container">
          {
            cart.map(singleProduct=> <ReviewItem key={singleProduct.id} handelRemoveItem={handelRemoveItem} singleProduct={singleProduct}></ReviewItem>)
          }
          {
            cart.length === 0 && <h2>The Cart is empty.Please <Link to='/'>Shop More..!</Link> </h2>
          }

        </div>
          
        <div className="oder-cart ">
          <Cart clearCart={clearCart} cart={cart}></Cart>
           
        </div>
     </div>
   
  )
}

export default Orders