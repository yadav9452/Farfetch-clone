import "./App.css";
import { AllRoutes } from "./All_Routes/AllRoutes";
import HomePageDrop from "./components/HomePage/HomePageDrop";


function App() {
  return (
    <div className="App">

      <HomePageDrop/>
      
      <AllRoutes />
    </div>  
  )
}

export default App;
