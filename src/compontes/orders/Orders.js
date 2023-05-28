import React, { useState } from 'react'
import { useLoaderData } from 'react-router-dom'
import Cart from '../cart/Cart';

function Orders() {

  const {products,initialCart } = useLoaderData();  // {products:products,initialCart:initialCart};


  console.log(products)
  console.log(products.length)

  const [cart,setCart] = useState(initialCart)

  return (
    <div className='Parent'>
        <div className="Product-container">

        </div>
        <div className="oder-cart">
          <Cart cart={cart}></Cart>
        </div>
     </div>
   
  )
}

export default Orders