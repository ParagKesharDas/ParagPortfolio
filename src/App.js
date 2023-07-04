import About from "./Component/About";
import Contact from "./Component/Contact";
import Home from "./Component/Home";
import Nav from "./Component/Nav";
import Project from "./Component/Project";
import Preloader from "./Component/Preloader/Preloader";
import Footer from "./Component/Footer";


function App() {
  return (
    <>
      <Preloader />
      <div className="App">
        <Nav />
        <Home />
        <About />
        <Project />
        <Contact />
        <Footer/>
      </div>
      


    </>
  );
}

export default App;
