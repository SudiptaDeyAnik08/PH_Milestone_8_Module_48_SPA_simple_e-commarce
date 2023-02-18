import React, { useEffect, useState } from "react"; 
import './Shop.css';
import Products from '../Products/Products.js';
import Cart from '../cart/Cart';
import {addToDb} from '../../utilities/fakedb.js';

const Shop = ()=>{

    const [product,setProduct] = useState([]);
    const [cart,setCart] = useState([]);
   

    useEffect(()=>{
        fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json')
        .then(res => res.json())
        .then(data => setProduct(data))
    },[])

    const addToCardHandeler = (respondGoods) =>{
        console.log(respondGoods);
        const newCart = [...cart,respondGoods];
        setCart(newCart);
        addToDb(respondGoods.id);
    }

    return(
        <div className="Parent">
           <div className="Product-container" >
           {
            product.map(res => <Products key = {res.id} data ={res} addToCardHandeler={addToCardHandeler}></Products>)
           }
           </div>
            <div className="oder-cart">
               <Cart cart={cart}></Cart>
            </div>
        </div>
    )
}

export default Shop;