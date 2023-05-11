import "./App.css";
import Residents from "./components/Residents";
import Header from "./components/Header";
import Footer from "./components/Footer";
import './components/Residents.css'

function App() {


  return (
    <div className="App font-lato">
      <div className="bg- flex flex-wrap justify-center">
        <section className="absolute">
          <Header />
        </section>

       <section className="mt-[50px] w-full max-w-[1200px]  grid items-center">
          <Residents/>
        </section> 

        <section >
          <Footer/>
        </section>
      </div>
    </div>
  );
}

export default App;
