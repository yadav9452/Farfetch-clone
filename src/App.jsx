import react from "react";
import "./App.css";
import Card from "./components/HomePage/Card";
import data from "./components/HomePage/data";
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
    </div>
  );
}

export default App;
