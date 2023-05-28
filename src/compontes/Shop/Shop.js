import React, { useEffect, useState } from "react"; 
import './Shop.css';
import Products from '../Products/Products.js';
import Cart from '../cart/Cart';
import {addToDb, getStoredCart} from '../../utilities/fakedb.js';

const Shop = ()=>{

    const [product,setProduct] = useState([]);
    const [cart,setCart] = useState([]);
   

    useEffect(()=>{
        fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json')
        .then(res => res.json())
        .then(data => setProduct(data))
    },[])

    useEffect(()=>{
        const storedCart = getStoredCart();
        const saveCart = [];
        for(const id in storedCart){
            const addedProduct = product.find(res => res.id === id);
            console.log(addedProduct);
            if(addedProduct){
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                saveCart.push(addedProduct);
            }
        }
        setCart(saveCart);
    },[product])

    const addToCardHandeler = (respondGoods) =>{
        console.log(respondGoods);

        let newCart = [];
        const exitst = cart.find(res=> res.id === respondGoods.id);
        
        if(!exitst){
            respondGoods.quantity =1;
            newCart = [...cart,respondGoods];  
        }
        else{
            const rest = cart.filter(res => res.id !== respondGoods.id);
            exitst.quantity = exitst.quantity + 1;
            newCart = [...rest, exitst];
        }
        

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