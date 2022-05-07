import react from "react";
import "./App.css";
import Card from "./components/HomePage/Card";
import data from "./components/HomePage/data";
import HomePageDrop from "./components/HomePage/HomePageDrop";
import Navbar from "./components/Navbar/Navbar";


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
      <HomePageDrop/>
      
    </div>
  );
}

export default App;
