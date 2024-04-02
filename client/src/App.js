import React from 'react';
import {createBrowserRouter,RouterProvider,Outlet} from "react-router-dom";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Products from './components/Products';
import Product from './components/Product';
import Home from './components/Home';
import "./app.scss"
const Layout =()=>{
  return(
    <div className='app'>
    <Navbar/>
    <Outlet/>
    <Footer/>
    
    </div>
  )
}
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children:[
      {
      path:"/",
      element:<Home/>
      },
      {
        path:"/Products/:id",
        element:<Products/>
      },
      {
        path:"/Product/:id",
        element:<Product/>
      }
  ]

  },
  
]);


function App() {
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
