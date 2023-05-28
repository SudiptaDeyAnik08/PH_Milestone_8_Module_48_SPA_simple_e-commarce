import logo from './logo.svg';
import './App.css';

import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Shop from './compontes/Shop/Shop.js'

import Main from './compontes/Layout/Main';
import About from './compontes/About/About';
import Orders from './compontes/orders/Orders';
import Inventory from './compontes/Inventory/Inventory';
import { ProductsAndCartLoader } from './Loaders/ProductsAndCartLoader';

function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      element: <Main></Main>,
      children:[
        {
          path:'/',
          loader:async()=>{
            return fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json');
          },
          element: <Shop></Shop>
        },
        {
          path:'/Orders',
          loader:ProductsAndCartLoader,
          
          element:<Orders></Orders>
        },
        {
          path:'/Inventory',
          element:<Inventory></Inventory>
        },
        {
          path:'/About',
          element:<About></About>
        }
      
      ]
    },
    
  ])
  
  return (
    <div >
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
