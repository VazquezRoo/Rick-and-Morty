import "./App.css";
import Residents from "./components/Residents";
import Header from "./components/Header";
import Footer from "./components/Footer";
import './components/Residents.css'

function App() {


  return (
    <div className="App font-lato">
  
          <Header />
         
          <Residents/>
      
          <Footer/>
      
    </div>
  );
}

export default App;
