import React from 'react';
import { createBrowserRouter, Router, RouterProvider } from 'react-router-dom';
import './App.css'
import About from './component/About/About';
import Inventory from './component/Inventory/Inventory';
import Main from './component/layouts/Main';
import Orders from './component/Orders/Orders';
import Shop from './component/Shop/Shop';




const App = () => {
  const router=createBrowserRouter([
    {
      path:'/',element:<Main></Main>, children:[
       
        
        {
          path:'/order',
          loader:()=>fetch('product.json'),
          element:<Orders></Orders>
        },
        {
          path:'/shop', 
          loader:()=>fetch('product.json'),
          element:<Shop></Shop>
        },
        {
          path:'/inventory', element:<Inventory></Inventory>
        },
        {
          path:'/about', element:<About></About>
        }
      ]
    }
  ])
  return (
    <div >
    <RouterProvider router={router}></RouterProvider>
    
    </div>
  );
};
export default App;