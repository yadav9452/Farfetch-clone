import react from "react";
import "./App.css";
import Card from "./components/HomePage/Card";
import data from "./components/HomePage/data";
<<<<<<< HEAD
import HomePageDrop from "./components/HomePage/HomePageDrop";
import Navbar from "./components/Navbar/Navbar";
=======
import { Route, Routes } from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import { Cart } from './pages/Cart';
import {Payment}  from "./pages/Payment";
import { Address } from "./pages/Address";
import Women from "./pages/women";
import Men from "./pages/men";

>>>>>>> 6e8d3c7d1a200f71ebf12fa02a1885ef2c314c11


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
<<<<<<< HEAD
      <HomePageDrop/>
      
    </div>
  );
=======
      <Routes>
        <Route path="/cart" element={ <Cart /> } />
        <Route path="/cart/address/payment" element={ <Payment/> } />
        <Route path="/cart/address" element={ <Address/> } />
        <Route path="/womens" element={<Women/>}/>
        <Route path="/mens" element={<Men/>}/>
      </Routes>
    </div>  
  )
>>>>>>> 6e8d3c7d1a200f71ebf12fa02a1885ef2c314c11
}

export default App;
