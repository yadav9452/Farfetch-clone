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
import Account from "./pages/Account";
import CustomizedDialogs from "./components/Navbar/dialog";


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
      {/* <CustomizedDialogs > */}
        
      <Routes>
        <Route path="/cart" element={ <Cart /> } />
        <Route path="/cart/address/payment" element={ <Payment/> } />
        <Route path="/cart/address" element={ <Address/> } />
        <Route path="/womens" element={<Women/>}/>
        <Route path="/mens" element={<Men/>}/>
          <Route path="/account" element={ <CustomizedDialogs ><Account />
          </CustomizedDialogs> } />

      </Routes>
    </div>  
  )
}

export default App;
