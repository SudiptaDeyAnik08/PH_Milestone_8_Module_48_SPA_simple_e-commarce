import { getStoredCart } from "../utilities/fakedb";

export const ProductsAndCartLoader = async()=>{
    
    //get the products from the API
    const productData = await fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json');

    const products = await productData.json();


    //get cart
    const saveCart = getStoredCart();
    // console.log("saved Cart: ",saveCart);
    const  initialCart =[];
    for(const id in saveCart){
          console.log(id);

          const addedProducts = products.find(responsedProduct=> responsedProduct.id === id);
          
         

          if(addedProducts){
            const quantity = saveCart[id];
            addedProducts.quantity = quantity;
            initialCart.push(addedProducts)
          }

    }

    return {products:products,initialCart:initialCart};
}