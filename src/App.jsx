import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Cart } from "./pages/Cart";
import Navbar from "./components/Navbar/Navbar"

class App extends Component {
  render() {
    return (
     <div>
     <Navbar/>
     </div>
    );
  }
}

export default App;
