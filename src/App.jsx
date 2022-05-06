import react from "react";
import "./App.css";
import Card from "./components/HomePage/Card";
import data from "./components/HomePage/data";
import { Route, Routes } from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import { Cart } from './pages/Cart';
import {Payment}  from "./pages/Payment";
import { Address } from "./pages/Address";
import Women from "./pages/women";
import Men from "./pages/men";


function App() {
  const cards = data.map(item => {
    return (
        <Card 
            img={item.img}
            title = {item.title}
            
        />
    )
}) 
  return (
    <div className="App">
    
      <Navbar />
      {cards}
      <Routes>
        <Route path="/cart" element={ <Cart /> } />
        <Route path="/cart/address/payment" element={ <Payment/> } />
        <Route path="/cart/address" element={ <Address/> } />
        <Route path="/womens" element={<Women/>}/>
        <Route path="/mens" element={<Men/>}/>
      </Routes>
    </div>  
  )
}

export default App;
