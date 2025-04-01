import React, { Route,Routes } from "react-router";
import './App.css';
import Home from "./screens/Home/home";
import ProductDetails from './productdetails/productDetails';
import About from './screens/about/about';
import Notfound from './screens/not found/Notfound';
import Header from "./common/header/header";
import Cart from "./screens/cart/Cart";
import { useState } from "react";
import {createContext}from "react"

export const Context= createContext<any>(null);

function App() {
  const [home, setHomeInfo ]= useState({homeScreen:true});

  const[cart, setCart]=useState([]);
return(
  <>
  <Context.Provider value={{home,setHomeInfo,cart,setCart}}>
  <Header/>
  <main>
  <Routes>
    <Route path="/ecommerce" element ={<Home/>}/>
    <Route path="/product/:id" element ={<ProductDetails/>}/>
    <Route path="/about" element ={<About/>}/>
    <Route path="/cart" element ={<Cart/>}/>
    <Route path="/*" element ={<Notfound/>}/>

  </Routes>
  </main>
 </Context.Provider>
  </>
);
}
export default App;
