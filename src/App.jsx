import React from "react";
import './App.css'
import { Route, Routes } from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import { Cart } from './pages/Cart';
import { Checkout } from "./pages/Checkout";

function App() {

  return (
    <div className="App">
      {/* <Navbar /> */}
      <Routes>
        <Route path="/cart" element={ <Cart /> } />
        <Route path="/checkout" element={ <Checkout /> } />

      </Routes>
      
       
    </div>  
  )
}

export default App
